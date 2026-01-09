const { NumberField, StringField } = foundry.data.fields;

/**
 * Field for storing senses data.
 */
export default class SensesField extends foundry.data.fields.SchemaField {
  constructor(fields={}, { initialUnits=null, ...options }={}) {
    const numberConfig = { required: true, nullable: true, integer: true, min: 0, initial: null };
    fields = {
      darkvision: new NumberField({ ...numberConfig, label: "NAHEULBEUK.SenseDarkvision" }),
      blindsight: new NumberField({ ...numberConfig, label: "NAHEULBEUK.SenseBlindsight" }),
      tremorsense: new NumberField({ ...numberConfig, label: "NAHEULBEUK.SenseTremorsense" }),
      truesight: new NumberField({ ...numberConfig, label: "NAHEULBEUK.SenseTruesight" }),
      units: new StringField({
        required: true, nullable: true, blank: false, initial: initialUnits, label: "NAHEULBEUK.SenseUnits"
      }),
      special: new StringField({ required: true, label: "NAHEULBEUK.SenseSpecial" }),
      ...fields
    };
    Object.entries(fields).forEach(([k, v]) => !v ? delete fields[k] : null);
    super(fields, { label: "NAHEULBEUK.Senses", ...options });
  }
}
