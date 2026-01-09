import LocalDocumentField from "../../fields/local-document-field.mjs";
const { HTMLField, SchemaField, StringField } = foundry.data.fields;

/**
 * @import { DetailsCommonData, DetailsCreatureData } from "./_types.mjs";
 */

/**
 * Shared contents of the details schema between various actor types.
 */
export default class DetailsField {
  /**
   * Fields shared between characters, NPCs, and vehicles.
   * @type {DetailsCommonData}
   */
  static get common() {
    return {
      biography: new SchemaField({
        value: new HTMLField({label: "NAHEULBEUK.Biography"}),
        public: new HTMLField({label: "NAHEULBEUK.BiographyPublic"})
      }, {label: "NAHEULBEUK.Biography"})
    };
  }

  /* -------------------------------------------- */

  /**
   * Fields shared between characters and NPCs.
   * @type {DetailsCreatureData}
   */
  static get creature() {
    return {
      alignment: new StringField({required: true, label: "NAHEULBEUK.Alignment"}),
      ideal: new StringField({required: true, label: "NAHEULBEUK.Ideals"}),
      bond: new StringField({required: true, label: "NAHEULBEUK.Bonds"}),
      flaw: new StringField({required: true, label: "NAHEULBEUK.Flaws"}),
      race: new LocalDocumentField(foundry.documents.BaseItem, {
        required: true, fallback: true, label: "NAHEULBEUK.Species"
      })
    };
  }
}
