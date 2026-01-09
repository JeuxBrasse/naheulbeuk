import ItemCompendiumNaheulbeuk from "./applications/item/item-compendium.mjs";
import TableOfContentsCompendium from "./applications/journal/table-of-contents.mjs";
import { log } from "./utils.mjs";

/* -------------------------------------------- */
/*  Module Data                                 */
/* -------------------------------------------- */

/**
 * Scan module manifests for any data that should be integrated into the system configuration.
 */
export function registerModuleData() {
  log("Registering Module Data", { level: "groupCollapsed" });
  for ( const manifest of [game.system, ...game.modules.filter(m => m.active), game.world] ) {
    try {
      const complete = registerMethods.map(m => m(manifest)).filter(r => r);
      if ( complete.length ) log(`Registered ${manifest.title} data: ${complete.join(", ")}`);
    } catch(err) {
      log(`Error registering ${manifest.title}\n`, { extras: [err.message], level: "error" });
    }
  }
  console.groupEnd();
}

const registerMethods = [registerSourceBooks, registerSpellLists];

/* -------------------------------------------- */

/**
 * Register package source books from `flags.naheulbeuk.sourceBooks`.
 * @param {Module|System|World} manifest  Manifest from which to register data.
 * @returns {string|void}                 Description of the data registered.
 */
function registerSourceBooks(manifest) {
  if ( !manifest.flags.naheulbeuk?.sourceBooks ) return;
  Object.assign(CONFIG.NAHEULBEUK.sourceBooks, manifest.flags.naheulbeuk.sourceBooks);
  return "source books";
}

/* -------------------------------------------- */

/**
 * Register package spell lists from `flags.naheulbeuk.spellLists`.
 * @param {Module|System|World} manifest  Manifest from which to register data.
 * @returns {string|void}                 Description of the data registered.
 */
function registerSpellLists(manifest) {
  if ( foundry.utils.getType(manifest.flags.naheulbeuk?.spellLists) !== "Array" ) return;
  manifest.flags.naheulbeuk.spellLists.forEach(uuid => naheulbeuk.registry.spellLists.register(uuid));
  return "spell lists";
}

/* -------------------------------------------- */
/*  Compendium Packs                            */
/* -------------------------------------------- */

/**
 * Apply any changes to compendium packs during the setup hook.
 */
export function setupModulePacks() {
  log("Setting Up Compendium Packs", { level: "groupCollapsed" });
  for ( const pack of game.packs ) {
    if ( pack.metadata.type === "Item" ) pack.applicationClass = ItemCompendiumNaheulbeuk;
    try {
      const complete = setupMethods.map(m => m(pack)).filter(r => r);
      if ( complete.length ) log(`Finished setting up ${pack.metadata.label}: ${complete.join(", ")}`);
    } catch(err) {
      log(`Error setting up ${pack.title}\n`, { extras: [err.message], level: "error" });
    }
  }
  if ( sortingChanged ) game.settings.set("core", "collectionSortingModes", collectionSortingModes);
  console.groupEnd();
}

const setupMethods = [setupPackDisplay, setupPackSorting];

/* -------------------------------------------- */

/**
 * Set application based on `flags.naheulbeuk.display`.
 * @param {Compendium} pack  Pack to set up.
 * @returns {string|void}    Description of the step.
 */
function setupPackDisplay(pack) {
  const display = pack.metadata.flags.display ?? pack.metadata.flags.naheulbeuk?.display;
  if ( display !== "table-of-contents" ) return;
  pack.applicationClass = TableOfContentsCompendium;
  return "table of contents";
}

/* -------------------------------------------- */

let collectionSortingModes;
let sortingChanged = false;

/**
 * Set default sorting order based on `flags.naheulbeuk.sorting`.
 * @param {Compendium} pack  Pack to set up.
 * @returns {string|void}    Description of the step.
 */
function setupPackSorting(pack) {
  collectionSortingModes ??= game.settings.get("core", "collectionSortingModes") ?? {};
  if ( !pack.metadata.flags.naheulbeuk?.sorting || collectionSortingModes[pack.metadata.id] ) return;
  collectionSortingModes[pack.metadata.id] = pack.metadata.flags.naheulbeuk.sorting;
  sortingChanged = true;
  return "default sorting";
}

/* -------------------------------------------- */
/*  Redirects                                   */
/* -------------------------------------------- */

/**
 * Add compendium UUID redirects from core premium modules to SRD if module's aren't enabled.
 */
export function registerModuleRedirects() {
  log("Registering Module Redirects", { level: "groupCollapsed" });
  for ( const [moduleId, redirects] of Object.entries(moduleRedirects) ) {
    if ( game.modules.get(moduleId)?.active ) {
      log(`Skipped redirects for ${moduleId}`);
    } else {
      log(`Registered redirects to SRD for ${moduleId}`);
      Object.assign(CONFIG.compendium.uuidRedirects, redirects);
    }
  }
  console.groupEnd();
}

const moduleRedirects = {
  "ddn-players-handbook": {
    "Compendium.ddn-players-handbook.actors": "Compendium.naheulbeuk.actors",
    "Compendium.ddn-players-handbook.classes": "Compendium.naheulbeuk.classes",
    "Compendium.ddn-players-handbook.content": "Compendium.naheulbeuk.content",
    "Compendium.ddn-players-handbook.equipment": "Compendium.naheulbeuk.equipment",
    "Compendium.ddn-players-handbook.feats": "Compendium.naheulbeuk.feats",
    "Compendium.ddn-players-handbook.origins": "Compendium.naheulbeuk.origins",
    "Compendium.ddn-players-handbook.spells": "Compendium.naheulbeuk.spells",
    "Compendium.ddn-players-handbook.tables": "Compendium.naheulbeuk.tables"
  },
  "ddn-dungeon-masters-guide": {
    "Compendium.ddn-dungeon-masters-guide.actors": "Compendium.naheulbeuk.actors",
    "Compendium.ddn-dungeon-masters-guide.content": "Compendium.naheulbeuk.content",
    "Compendium.ddn-dungeon-masters-guide.equipment": "Compendium.naheulbeuk.equipment",
    "Compendium.ddn-dungeon-masters-guide.tables": "Compendium.naheulbeuk.tables"
  },
  "ddn-monster-manual": {
    "Compendium.ddn-monster-manual.actors": "Compendium.naheulbeuk.actors",
    "Compendium.ddn-monster-manual.content": "Compendium.naheulbeuk.content",
    "Compendium.ddn-monster-manual.features": "Compendium.naheulbeuk.monsterfeatures",
    "Compendium.ddn-monster-manual.tables": "Compendium.naheulbeuk.tables"
  }
};
