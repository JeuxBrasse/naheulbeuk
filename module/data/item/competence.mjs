export default class CompetenceData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
      const {AnyField, ArrayField, StringField, BooleanField, HTMLField} = foundry.data.fields;
      let data = {
        description:new HTMLField({initial:""}),
        img: new StringField({initial: "icons/svg/statue.svg"}),
        formula: new StringField({initial: "-"}),
        diff: new StringField({initial: ""}),
        choix: new BooleanField({initial: true}),
        base: new BooleanField({initial: false}),
        gagne: new BooleanField({initial: false}),
        gagneSource: new StringField({initial: ""}),
        items: new AnyField()
      };
		return data;
    }

	_initialize(options = {}) {
		super._initialize(options);
	}

  get item() {
    return this.parent;
  }

  prepareBaseData() {
  }

  prepareDerivedData() {
  }

  static migrateData(source) {
    return super.migrateData(source);
  }
}
