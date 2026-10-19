const {AnyField, ArrayField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;

// export default class ConteneurData extends ItemDataModel.mixin () {
export default class ConteneurData extends foundry.abstract.TypeDataModel {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  /** @override */
  static LOCALIZATION_PREFIXES = ["NAHEULBEUK.CONTAINER", "NAHEULBEUKs.SOURCE"];

  /** @inheritDoc */
  static defineSchema() {
    // return this.mergeSchema(super.defineSchema(), {
      let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "icons/svg/chest.svg"}),
            quantity: new NumberField({initial: 1}),
            weight: new NumberField({initial: 0}),
            prix: new NumberField({initial: 0}),
            equipe: new BooleanField({initial: false}),
            formula: new StringField({initial: "d6"}),
            categorie: new StringField({initial: "Divers"}),
            cacher: new BooleanField({initial: false}),
            desccacher: new StringField({initial: ""}),
            nomcacher: new StringField({initial: "Nom de l'objet caché"}),
            stockage: new StringField({initial: "sac"}),
            place: new NumberField({initial: 0}),
            poidconteneur: new NumberField({initial: 0}),
            conteneur: new ArrayField(new AnyField()),
            items: new ArrayField(new AnyField())
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
