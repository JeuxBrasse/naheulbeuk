import * as Trait from "../../documents/actor/trait.mjs";
import ActivitySheet from "./activity-sheet.mjs";

/**
 * Sheet for the check activity.
 */
export default class CheckSheet extends ActivitySheet {

  /** @inheritDoc */
  static DEFAULT_OPTIONS = {
    classes: ["check-activity"]
  };

  /* -------------------------------------------- */

  /** @inheritDoc */
  static PARTS = {
    ...super.PARTS,
    effect: {
      template: "systems/naheulbeuk/templates/activity/check-effect.hbs",
      templates: [
        ...super.PARTS.effect.templates,
        "systems/naheulbeuk/templates/activity/parts/check-details.hbs"
      ]
    }
  };

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /** @inheritDoc */
  async _prepareEffectContext(context, options) {
    context = await super._prepareEffectContext(context, options);

    const group = game.i18n.localize("NAHEULBEUK.Abilities");
    context.abilityOptions = [
      { value: "", label: "" },
      { rule: true },
      { value: "spellcasting", label: game.i18n.localize("NAHEULBEUK.SpellAbility") },
      ...Object.entries(CONFIG.NAHEULBEUK.abilities).map(([value, config]) => ({ value, label: config.label, group }))
    ];
    let ability;
    const associated = this.activity.check.associated;
    if ( (this.item.type === "tool") && !associated.size ) {
      ability = CONFIG.NAHEULBEUK.abilities[this.item.system.ability]?.label?.toLowerCase();
    } else if ( (associated.size === 1) && (associated.first() in CONFIG.NAHEULBEUK.skills) ) {
      ability = CONFIG.NAHEULBEUK.abilities[CONFIG.NAHEULBEUK.skills[associated.first()].ability]?.label?.toLowerCase();
    }
    if ( ability ) context.abilityOptions[0].label = game.i18n.format("NAHEULBEUK.DefaultSpecific", { default: ability });

    context.associatedOptions = [
      ...Object.entries(CONFIG.NAHEULBEUK.skills).map(([value, { label }]) => ({
        value, label, group: game.i18n.localize("NAHEULBEUK.Skills")
      })),
      ...Object.keys(CONFIG.NAHEULBEUK.tools).map(value => ({
        value, label: Trait.keyLabel(value, { trait: "tool" }), group: game.i18n.localize("TYPES.Item.toolPl")
      })).sort((lhs, rhs) => lhs.label.localeCompare(rhs.label, game.i18n.lang))
    ];

    context.calculationOptions = [
      { value: "", label: game.i18n.localize("NAHEULBEUK.SAVE.FIELDS.save.dc.CustomFormula") },
      { rule: true },
      { value: "spellcasting", label: game.i18n.localize("NAHEULBEUK.SpellAbility") },
      ...Object.entries(CONFIG.NAHEULBEUK.abilities).map(([value, config]) => ({ value, label: config.label, group }))
    ];

    return context;
  }
}
