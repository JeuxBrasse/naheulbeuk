// import ItemDataModel from "../abstract/item-data-model.mjs";


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

  /* -------------------------------------------- */

  /** @inheritDoc */
  // static metadata = Object.freeze(foundry.utils.mergeObject(super.metadata, {
  //   enchantable: true
  // }, {inplace: false}));

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*  Data Migration                              */
  /* -------------------------------------------- */

  /** @inheritDoc */
  static _migrateData(source) {
    super._migrateData(source);
    return source;
  }

  /* -------------------------------------------- */

  /**
   * Force quantity to always be 1.
   * @param {object} source  The candidate source data from which the model will be constructed.
   */
  static #migrateQuantity(source) {
    source.quantity = 1;
  }

  /* -------------------------------------------- */
  /*  Data Preparation                            */
  /* -------------------------------------------- */

	_initialize(options = {}) {
		super._initialize(options);
	}

  prepareBaseData() {

  }

  prepareDerivedData() {
    super.prepareDerivedData();
  }

  /* -------------------------------------------- */
  /*  Socket Event Handlers                       */
  /* -------------------------------------------- */

  /** @inheritDoc */
  async _onUpdate(changed, options, userId) {
    super._onUpdate(changed, options, userId);
  }

  /* -------------------------------------------- */

  /** @inheritDoc */
  async _onDelete(options, userId) {
    super._onDelete(options, userId);
    if ( (userId !== game.user.id) || !options.deleteContents ) return;

    // Delete a container's contents when it is deleted
    const contents = await this.allContainedItems;
    if ( contents?.size ) await Item.deleteDocuments(Array.from(contents.map(i => i.id)), {
      pack: this.parent.pack,
      parent: this.parent.parent
    });
  }
}
