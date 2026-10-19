export default class PiegeData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "icons/svg/trap.svg"}),
            categorie: new StringField({initial: ""}),
            detecter: new StringField({initial: ""}),
            desamorcer: new StringField({initial: ""}),
            contourner: new StringField({initial: ""}),
            esquiver: new StringField({initial: ""}),
            zone: new StringField({initial: ""}),
            effets: new StringField({initial: ""}),
            degat: new StringField({initial: ""})
        }
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
