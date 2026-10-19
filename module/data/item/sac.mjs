export default class SacData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: ""}),
            quantity: new NumberField({initial: 1}),
            weight: new NumberField({initial: 0}),
            prix: new NumberField({initial: 0}),
            equipe: new BooleanField({initial: false}),
            type: new StringField({initial: "sac à dos"}),
            place: new NumberField({initial: 0}),
            cou: new NumberField({initial: 0}),
            int: new NumberField({initial: 0}),
            cha: new NumberField({initial: 0}),
            ad: new NumberField({initial: 0}),
            fo: new NumberField({initial: 0}),
            att: new NumberField({initial: 0}),
            prd: new StringField({initial: "0"}),
            pr: new NumberField({initial: 0}),
            prm: new NumberField({initial: 0}),
            mvt: new NumberField({initial: 0}),
            rm: new NumberField({initial: 0}),
            att_arme_jet: new StringField({initial: "0"}),
            degat_arme_jet: new StringField({initial: "0"}),
            mphy: new NumberField({initial: 0}),
            mpsy: new NumberField({initial: 0}),
            esq: new NumberField({initial: 0}),
            degat_arme_cac: new NumberField({initial: 0}),
            cha_ignorempsy: new NumberField({initial: 0}),
            nb_pr_ss_encombrement: new NumberField({initial: 0}),
            autre: new StringField({initial: ""}),
            cacher: new BooleanField({initial: false}),
            desccacher: new StringField({initial: ""}),
            nomcacher: new StringField({initial: "Nom de l'objet caché"}),
            stockage: new StringField({initial: "sac"}),
            conteneur: new SchemaField({})

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
