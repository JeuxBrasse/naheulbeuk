export default class AttaqueData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "icons/svg/sword.svg"}),
            formula: new StringField({initial: "d6"}),
            attaque: new StringField({initial: "10"}),
            att_arme_jet: new StringField({initial: "-"}),
            degat_arme_jet: new StringField({initial: "0"}),
            autre: new StringField({initial: ""}),
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
            custom: new StringField({initial: ""})
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
