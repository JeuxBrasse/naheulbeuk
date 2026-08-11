export default class SortData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "icons/svg/chest.svg"}),
            spellLevel: new NumberField({initial: 1}),
            type: new StringField({initial: "generaliste"}),
            cout: new StringField({initial: "0"}),
            incantation: new StringField({initial: "0"}),
            duree: new StringField({initial: "0"}),
            portee: new StringField({initial: "0"}),
            epreuve: new StringField({initial: "d20"}),
            degat: new StringField({initial: "d20"}),
            effet: new StringField({initial: ""}),
            name1: new StringField({initial: ""}),
            name2: new StringField({initial: ""}),
            name3: new StringField({initial: ""}),
            name4: new StringField({initial: ""}),
            name5: new StringField({initial: ""}),
            epreuve1: new StringField({initial: ""}),
            epreuve2: new StringField({initial: ""}),
            epreuve3: new StringField({initial: ""}),
            epreuve4: new StringField({initial: ""}),
            epreuve5: new StringField({initial: ""}),
            jet1: new StringField({initial: ""}),
            jet2: new StringField({initial: ""}),
            jet3: new StringField({initial: ""}),
            jet4: new StringField({initial: ""}),
            jet5: new StringField({initial: ""}),
            epreuvecustom: new BooleanField({initial: false}),
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
