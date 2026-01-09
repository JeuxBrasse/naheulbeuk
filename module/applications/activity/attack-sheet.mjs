import ActivitySheet from "./activity-sheet.mjs";

/**
 * Sheet for the attack activity.
 */
export default class AttackSheet extends ActivitySheet {

  /** @inheritDoc */
  static DEFAULT_OPTIONS = {
    classes: ["attack-activity"]
  };

  /* -------------------------------------------- */

  /** @inheritDoc */
  static PARTS = {
    ...super.PARTS,
    identity: {
      template: "systems/naheulbeuk/templates/activity/attack-identity.hbs",
      templates: [
        ...super.PARTS.identity.templates,
        "systems/naheulbeuk/templates/activity/parts/attack-identity.hbs"
      ]
    },
    effect: {
      template: "systems/naheulbeuk/templates/activity/attack-effect.hbs",
      templates: [
        ...super.PARTS.effect.templates,
        "systems/naheulbeuk/templates/activity/parts/attack-damage.hbs",
        "systems/naheulbeuk/templates/activity/parts/attack-details.hbs",
        "systems/naheulbeuk/templates/activity/parts/damage-part.hbs",
        "systems/naheulbeuk/templates/activity/parts/damage-parts.hbs"
      ]
    }
  };

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /** @inheritDoc */
  async _prepareEffectContext(context, options) {
    context = await super._prepareEffectContext(context, options);

    const availableAbilities = this.activity.availableAbilities;
    context.abilityOptions = [
      {
        value: "", label: game.i18n.format("NAHEULBEUK.DefaultSpecific", {
          default: this.activity.attack.type.classification === "spell"
            ? game.i18n.localize("NAHEULBEUK.Spellcasting").toLowerCase()
            : availableAbilities.size
              ? game.i18n.getListFormatter({ style: "short", type: "disjunction" }).format(
                Array.from(availableAbilities).map(a => CONFIG.NAHEULBEUK.abilities[a].label.toLowerCase())
              )
              : game.i18n.localize("NAHEULBEUK.None").toLowerCase()
        })
      },
      { rule: true },
      { value: "none", label: game.i18n.localize("NAHEULBEUK.None") },
      { value: "spellcasting", label: game.i18n.localize("NAHEULBEUK.Spellcasting") },
      ...Object.entries(CONFIG.NAHEULBEUK.abilities).map(([value, config]) => ({
        value, label: config.label, group: game.i18n.localize("NAHEULBEUK.Abilities")
      }))
    ];

    context.hasBaseDamage = this.item.system.offersBaseDamage;

    return context;
  }

  /* -------------------------------------------- */

  /** @inheritDoc */
  async _prepareIdentityContext(context, options) {
    context = await super._prepareIdentityContext(context, options);

    context.attackTypeOptions = Object.entries(CONFIG.NAHEULBEUK.attackTypes)
      .map(([value, config]) => ({ value, label: config.label }));
    if ( this.item.system.validAttackTypes?.size ) context.attackTypeOptions.unshift({
      value: "",
      label: game.i18n.format("NAHEULBEUK.DefaultSpecific", {
        default: game.i18n.getListFormatter({ type: "disjunction" }).format(
          Array.from(this.item.system.validAttackTypes).map(t => CONFIG.NAHEULBEUK.attackTypes[t].label.toLowerCase())
        )
      })
    });

    context.attackClassificationOptions = Object.entries(CONFIG.NAHEULBEUK.attackClassifications)
      .map(([value, config]) => ({ value, label: config.label }));
    if ( this.item.system.attackClassification ) context.attackClassificationOptions.unshift({
      value: "",
      label: game.i18n.format("NAHEULBEUK.DefaultSpecific", {
        default: CONFIG.NAHEULBEUK.attackClassifications[this.item.system.attackClassification].label.toLowerCase()
      })
    });

    return context;
  }
}
