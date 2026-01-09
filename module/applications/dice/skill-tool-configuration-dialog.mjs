import D20RollConfigurationDialog from "./d20-configuration-dialog.mjs";

/**
 * @import { SkillToolRollConfigurationDialogOptions } from "../../dice/_types.mjs";
 */

/**
 * Extended roll configuration dialog that allows selecting abilities.
 * @extends D20RollConfigurationDialog<SkillToolRollConfigurationDialogOptions>
 */
export default class SkillToolRollConfigurationDialog extends D20RollConfigurationDialog {
  /** @override */
  static DEFAULT_OPTIONS = {
    chooseAbility: true
  };

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /** @inheritDoc */
  async _prepareConfigurationContext(context, options) {
    context = await super._prepareConfigurationContext(context, options);
    if ( this.options.chooseAbility ) context.fields.unshift({
      field: new foundry.data.fields.StringField({
        required: true, blank: false, label: game.i18n.localize("NAHEULBEUK.Abilities")
      }),
      name: "ability",
      options: Object.entries(CONFIG.NAHEULBEUK.abilities).map(([value, { label }]) => ({ value, label })),
      value: this.config.ability
    });
    return context;
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /** @inheritDoc */
  _onChangeForm(formConfig, event) {
    super._onChangeForm(formConfig, event);
    if ( this.config.skill && (event.target?.name === "ability") ) {
      const skillLabel = CONFIG.NAHEULBEUK.skills[this.config.skill]?.label ?? "";
      const ability = event.target.value ?? this.config.ability;
      const abilityLabel = CONFIG.NAHEULBEUK.abilities[ability]?.label ?? "";
      const flavor = game.i18n.format("NAHEULBEUK.SkillPromptTitle", { skill: skillLabel, ability: abilityLabel });
      foundry.utils.setProperty(this.message, "data.flavor", flavor);
      this._updateFrame({ window: { title: flavor } });
    }
  }
}
