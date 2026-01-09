import DialogNaheulbeuk from "../api/dialog.mjs";

const { NumberField, StringField } = foundry.data.fields;

/**
 * @import { SpellScrollConfiguration } from "../../documents/_types.mjs";
 */

/**
 * Application for configuration spell scroll creation.
 */
export default class CreateScrollDialog extends DialogNaheulbeuk {
  constructor(options={}) {
    super(options);
    this.#config = options.config;
    this.#spell = options.spell;
  }

  /** @override */
  static DEFAULT_OPTIONS = {
    classes: ["create-scroll"],
    window: {
      title: "NAHEULBEUK.Scroll.CreateScroll",
      icon: "fa-solid fa-scroll"
    },
    form: {
      handler: CreateScrollDialog.#handleFormSubmission
    },
    position: {
      width: 420
    },
    buttons: [{
      action: "create",
      label: "NAHEULBEUK.Scroll.CreateScroll",
      icon: "fa-solid fa-check",
      default: true
    }],
    config: null,
    spell: null
  };

  /** @inheritDoc */
  static PARTS = {
    ...super.PARTS,
    content: {
      template: "systems/naheulbeuk/templates/apps/spell-scroll-dialog.hbs"
    }
  };

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /**
   * Configuration options for scroll creation.
   * @type {SpellScrollConfiguration}
   */
  #config;

  get config() {
    return this.#config;
  }

  /* -------------------------------------------- */

  /**
   * Spell from which the scroll will be created.
   * @type {ItemNaheulbeuk|object}
   */
  #spell;

  get spell() {
    return this.#spell;
  }

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Prepare rendering context for the content section.
   * @param {ApplicationRenderContext} context  Context being prepared.
   * @param {HandlebarsRenderOptions} options   Options which configure application rendering behavior.
   * @returns {Promise<ApplicationRenderContext>}
   * @protected
   */
  async _prepareContentContext(context, options) {
    context.anchor = this.spell instanceof Item ? this.spell.toAnchor().outerHTML : `<span>${this.spell.name}</span>`;
    context.config = this.config;
    context.fields = [{
      field: new StringField({
        required: true, blank: false,
        label: game.i18n.localize("NAHEULBEUK.Scroll.Explanation.Label"),
        hint: game.i18n.localize("NAHEULBEUK.Scroll.Explanation.Hint")
      }),
      name: "explanation",
      options: [
        { value: "full", label: game.i18n.localize("NAHEULBEUK.Scroll.Explanation.Complete") },
        { value: "reference", label: game.i18n.localize("NAHEULBEUK.Scroll.Explanation.Reference") },
        { value: "none", label: game.i18n.localize("NAHEULBEUK.None") }
      ],
      value: this.config.explanation ?? "reference"
    }, {
      field: new NumberField({ label: game.i18n.localize("NAHEULBEUK.SpellLevel") }),
      name: "level",
      options: Object.entries(CONFIG.NAHEULBEUK.spellLevels)
        .map(([value, label]) => ({ value, label }))
        .filter(l => Number(l.value) >= this.spell.system.level),
      value: this.config.level ?? this.spell.system.level
    }];
    context.values = {
      bonus: new NumberField({ label: game.i18n.localize("NAHEULBEUK.BonusAttack") }),
      dc: new NumberField({ label: game.i18n.localize("NAHEULBEUK.Scroll.SaveDC") })
    };
    context.valuePlaceholders = {};
    for ( const level of Array.fromRange(this.config.level + 1).reverse() ) {
      context.valuePlaceholders = CONFIG.NAHEULBEUK.spellScrollValues[level];
      if ( context.valuePlaceholders ) break;
    }
    return context;
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /**
   * Handle submission of the dialog using the form buttons.
   * @this {CreateScrollDialog}
   * @param {Event|SubmitEvent} event    The form submission event.
   * @param {HTMLFormElement} form       The submitted form.
   * @param {FormDataExtended} formData  Data from the dialog.
   */
  static async #handleFormSubmission(event, form, formData) {
    foundry.utils.mergeObject(this.#config, formData.object);
    this.#config.level = Number(this.#config.level);
    await this.close({ naheulbeuk: { submitted: true } });
  }

  /* -------------------------------------------- */

  /** @inheritDoc */
  _onChangeForm(formConfig, event) {
    super._onChangeForm(formConfig, event);
    const formData = new foundry.applications.ux.FormDataExtended(this.form);
    foundry.utils.mergeObject(this.#config, formData.object);
    this.#config.level = Number(this.#config.level);
    this.render({ parts: ["content"] });
  }

  /* -------------------------------------------- */

  /** @override */
  _onClose(options={}) {
    if ( !options.naheulbeuk?.submitted ) this.#config = null;
  }

  /* -------------------------------------------- */
  /*  Factory Methods                             */
  /* -------------------------------------------- */

  /**
   * Display the create spell scroll dialog.
   * @param {ItemNaheulbeuk|object} spell              The spell or item data to be made into a scroll.
   * @param {SpellScrollConfiguration} config  Configuration options for scroll creation.
   * @param {object} [options={}]              Additional options for the application.
   * @returns {Promise<object|null>}           Form data object with results of the dialog.
   */
  static async create(spell, config, options={}) {
    return new Promise(resolve => {
      const dialog = new this({ spell, config, ...options });
      dialog.addEventListener("close", event => resolve(dialog.config), { once: true });
      dialog.render({ force: true });
    });
  }
}
