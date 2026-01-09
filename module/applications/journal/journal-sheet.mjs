import JournalEntrySheetNaheulbeuk from "./journal-entry-sheet.mjs";

/**
 * Variant of the standard journal sheet to handle custom TOC numbering.
 */
export default class JournalSheetNaheulbeuk extends foundry.appv1.sheets.JournalSheet {
  constructor(...args) {
    foundry.utils.logCompatibilityWarning("The JournalSheetNaheulbeuk application has been deprecated and replaced with "
      + "JournalEntrySheetNaheulbeuk.");
    super(...args);
  }

  /* -------------------------------------------- */

  /** @override */
  static _warnedAppV1 = true;

  /* --------------------------------------------- */

  /** @inheritDoc */
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.classes.push("naheulbeuk-journal", "naheulbeuk-journal-legacy");
    return options;
  }

  /* --------------------------------------------- */
  /*  Rendering                                    */
  /* --------------------------------------------- */

  /** @inheritDoc */
  _getPageData() {
    const pageData = super._getPageData();
    JournalEntrySheetNaheulbeuk._adjustTOCNumbering(this.document, Object.fromEntries(pageData.map(p => {
      p.id = p._id;
      return [p.id, p];
    })));
    return pageData;
  }

  /* --------------------------------------------- */

  /** @inheritdoc */
  async _render(...args) {
    await super._render(...args);
    return JournalEntrySheetNaheulbeuk._injectNavigation(this.document, this.element[0]);
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /** @inheritDoc */
  activateListeners(html) {
    super.activateListeners(html);
    html.on("pointerdown", event => {
      if ( (event.button === 1) && document.getElementById("tooltip")?.classList.contains("active") ) {
        event.preventDefault();
      }
    });
  }
}
