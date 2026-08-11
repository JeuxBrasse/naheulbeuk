export default class RecetteData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "systems/naheulbeuk/assets/from-rexard-icons/Sorts/sort%20(1018).webp"}),
            quantity: new NumberField({initial: 1}),
            weight: new NumberField({initial: 0}),
            categorie: new StringField({initial: "Ingrédients"}),
            specialites: new StringField({initial: ""}),
            niveau: new StringField({initial: ""}),
            materiaux: new StringField({initial: ""}),
            temps: new StringField({initial: ""}),
            outils: new StringField({initial: ""}),
            difficulte: new StringField({initial: ""}),
            xp: new StringField({initial: ""}),
            prix: new StringField({initial: ""}),
            malus: new StringField({initial: ""}),
            remarque: new StringField({initial: ""}),
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
