import MapLocationControlIcon from "./canvas/map-location-control-icon.mjs";
import { ConsumptionTargetData } from "./data/activity/fields/consumption-targets-field.mjs";
import * as activities from "./documents/activity/_module.mjs";
import ActorNaheulbeuk from "./documents/actor/actor.mjs";
import * as advancement from "./documents/advancement/_module.mjs";
import { preLocalize } from "./utils.mjs";
import MappingField from "./data/fields/mapping-field.mjs";
import VehicleData from "./data/actor/vehicle.mjs";


/**
 * @import {} from "./_types.mjs";
 */
// Namespace Configuration Values
const NAHEULBEUK = {};

// ASCII Artwork
NAHEULBEUK.ASCII = `_______________________________
_______________________________`;

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
NAHEULBEUK.abilities = {
  "cou": "NAHEULBEUK.AbilityCou",
  "int": "NAHEULBEUK.AbilityInt",
  "cha": "NAHEULBEUK.AbilityCha",
  "fo": "NAHEULBEUK.AbilityFo",
  "ad": "NAHEULBEUK.AbilityAd",
  "att": "NAHEULBEUK.AbilityAtt",
  "prd": "NAHEULBEUK.AbilityPrd"
};

NAHEULBEUK.abilityAbbreviations = {
  "cou": "NAHEULBEUK.AbilityCouAbbr",
  "int": "NAHEULBEUK.AbilityIntAbbr",
  "cha": "NAHEULBEUK.AbilityChaAbbr",
  "fo": "NAHEULBEUK.AbilityFoAbbr",
  "ad": "NAHEULBEUK.AbilityAdAbbr",
  "att": "NAHEULBEUK.AbilityAttAbbr",
  "prd": "NAHEULBEUK.AbilityPrdAbbr"
};

/* -------------------------------------------- */
/*  Sources                                     */
/* -------------------------------------------- */

/**
 * List of books available as sources.
 * @enum {string}
 */
NAHEULBEUK.sourceBooks = {};
preLocalize("sourceBooks", { sort: true });

/* -------------------------------------------- */
/*  Themes                                      */
/* -------------------------------------------- */

/**
 * Themes that can be set for the system or on sheets.
 * @enum {string}
 */
NAHEULBEUK.themes = {
  light: "SHEETS.NAHEULBEUK.THEME.Light",
  dark: "SHEETS.NAHEULBEUK.THEME.Dark"
};
preLocalize("themes");

/* -------------------------------------------- */

export default NAHEULBEUK;
