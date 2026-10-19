export default class CoupData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "icons/svg/combat.svg"}),
            type: new StringField({initial: ""}),
            duree: new StringField({initial: ""}),
            condition: new StringField({initial: ""}),
            epreuve: new StringField({initial: ""}),
            degat: new StringField({initial: ""}),
            effet: new StringField({initial: ""}),
            reussite: new StringField({initial: ""}),
            echec: new StringField({initial: ""}),
            attaque: new StringField({initial: ""}),
            bourrepif: new BooleanField({initial: false}),
            apprentissage: new StringField({initial: "au choix du MJ"}),
            niveau: new StringField({initial: "1"})
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
