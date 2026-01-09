/**
 * Mixin used to add support for registering documents in the dependents registry.
 * @template {foundry.abstract.Document} T
 * @param {typeof T} Base  The base document class to wrap.
 * @returns {typeof DependentDocument}
 * @mixin
 */
export default function DependentDocumentMixin(Base) {
  class DependentDocument extends Base {
    /** @inheritDoc */
    prepareData() {
      super.prepareData();
      if ( this.flags?.naheulbeuk?.dependentOn && this.uuid ) {
        naheulbeuk.registry.dependents.track(this.flags.naheulbeuk.dependentOn, this);
      }
    }

    /* -------------------------------------------- */

    /** @inheritDoc */
    _onDelete(options, userId) {
      super._onDelete(options, userId);
      if ( this.flags?.naheulbeuk?.dependentOn && this.uuid ) {
        naheulbeuk.registry.dependents.untrack(this.flags.naheulbeuk.dependentOn, this);
      }
    }
  }
  return DependentDocument;
}
