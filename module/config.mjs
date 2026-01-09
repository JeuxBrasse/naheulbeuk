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