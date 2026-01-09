import FormulaField from "../fields/formula-field.mjs";

const { BooleanField, SetField, StringField } = foundry.data.fields;

/**
 * @import { TravelPaceNaheulbeul } from "../actor/fields/_types.mjs";
 */

/**
 * Field for storing movement data.
 */
export default class MovementField extends foundry.data.fields.SchemaField {
  constructor(fields={}, { initialUnits=null, ...options }={}) {
    fields = {
      walk: new FormulaField({ deterministic: true, label: "NAHEULBEUK.MOVEMENT.Type.Speed", speed: true }),
      burrow: new FormulaField({ deterministic: true, label: "NAHEULBEUK.MOVEMENT.Type.Burrow", speed: true }),
      climb: new FormulaField({ deterministic: true, label: "NAHEULBEUK.MOVEMENT.Type.Climb", speed: true }),
      fly: new FormulaField({ deterministic: true, label: "NAHEULBEUK.MOVEMENT.Type.Fly", speed: true }),
      swim: new FormulaField({ deterministic: true, label: "NAHEULBEUK.MOVEMENT.Type.Swim", speed: true }),
      bonus: new FormulaField({ deterministic: true, label: "NAHEULBEUK.MOVEMENT.FIELDS.bonus.label" }),
      special: new StringField({ label: "NAHEULBEUK.MOVEMENT.FIELDS.special.label" }),
      units: new StringField({
        required: true, nullable: true, blank: false, initial: initialUnits, label: "NAHEULBEUK.MOVEMENT.FIELDS.units.label"
      }),
      hover: new BooleanField({ required: true, label: "NAHEULBEUK.MOVEMENT.Hover" }),
      ignoredDifficultTerrain: new SetField(new StringField(), {
        label: "NAHEULBEUK.MOVEMENT.FIELDS.ignoredDifficultTerrain.label"
      }),
      ...fields
    };
    Object.entries(fields).forEach(([k, v]) => !v ? delete fields[k] : null);
    super(fields, { label: "NAHEULBEUK.Movement", ...options });
  }

  /* -------------------------------------------- */

  /**
   * Apply rules for travel pace to the given skill.
   * @param {TravelPaceNaheulbeuk} pace  The travel pace.
   * @param {string} skill       The skill.
   * @returns {{ advantage: boolean, disadvantage: boolean }}
   */
  static getTravelPaceMode(pace, skill) {
    foundry.utils.logCompatibilityWarning(
      "The `MovementField#getTravelPaceMode` has been moved to `TravelField#getTravelPaceMode.",
      { since: "Naheulbeuk 13.0", until: "Naheulbeuk 14.0", once: true }
    );
    return naheulbeuk.dataModels.actor.TravelField.getTravelPaceMode(pace, skill);
  }

  /* -------------------------------------------- */

  /**
   * Prepare movement data.
   * @this {MovementData}
   * @param {DataField} field  The movement field.
   */
  static prepareData(field) {
    foundry.utils.logCompatibilityWarning(
      "The `MovementField#prepareData` is now handled through `TravelField#prepareData`.",
      { since: "Naheulbeuk 13.0", until: "Naheulbeuk 14.0", once: true }
    );
  }
}
