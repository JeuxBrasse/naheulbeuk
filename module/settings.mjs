/**
 * Register all of the system's keybindings.
 */
export function registerSystemKeybindings() {

  game.keybindings.register("naheulbeuk", "dragCopy", {
    name: "KEYBINDINGS.NAHEULBEUK.DragCopy",
    editable: [{ key: "ControlLeft" }, { key: "ControlRight" }, { key: "AltLeft" }, { key: "AltRight" }]
  });

  game.keybindings.register("naheulbeuk", "dragMove", {
    name: "KEYBINDINGS.NAHEULBEUK.DragMove",
    editable: [{ key: "ShiftLeft" }, { key: "ShiftRight" }, { key: "OsLeft" }, { key: "OsRight" }]
  });    
}

/* -------------------------------------------- */

/**
 * Register all of the system's settings.
 */
export function registerSystemSettings() {
  // Internal System Migration Version
  game.settings.register("naheulbeuk", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  // Movement automation
  game.settings.register("naheulbeuk", "movementAutomation", {
    name: "SETTINGS.NAHEULBEUK.AUTOMATION.Movement.Name",
    hint: "SETTINGS.NAHEULBEUK.AUTOMATION.Movement.Hint",
    scope: "world",
    config: true,
    default: "full",
    type: String,
    choices: {
      full: "SETTINGS.NAHEULBEUK.AUTOMATION.Movement.Full",
      noBlocking: "SETTINGS.NAHEULBEUK.AUTOMATION.Movement.NoBlocking",
      none: "SETTINGS.NAHEULBEUK.AUTOMATION.Movement.None"
    }
  });

  // Allow rotating square templates
  game.settings.register("naheulbeuk", "gridAlignedSquareTemplates", {
    name: "SETTINGS.NAHEULBEUK.GridAlignedSquareTemplatesN",
    hint: "SETTINGS.NAHEULBEUK.GridAlignedSquareTemplatesL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  // Metric Length Weights
  game.settings.register("naheulbeuk", "metricLengthUnits", {
    name: "SETTINGS.NAHEULBEUK.METRIC.LengthUnits.Name",
    hint: "SETTINGS.NAHEULBEUK.METRIC.LengthUnits.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Metric Volume Weights
  game.settings.register("naheulbeuk", "metricVolumeUnits", {
    name: "SETTINGS.NAHEULBEUK.METRIC.VolumeUnits.Name",
    hint: "SETTINGS.NAHEULBEUK.METRIC.VolumeUnits.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Metric Unit Weights
  game.settings.register("naheulbeuk", "metricWeightUnits", {
    name: "SETTINGS.NAHEULBEUK.METRIC.WeightUnits.Name",
    hint: "SETTINGS.NAHEULBEUK.METRIC.WeightUnits.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  game.settings.register("naheulbeuk", "currencyWeight", {
    name: "SETTINGS.NAHEULBEUK.VARIANT.CurrencyWeight.Name",
    hint: "SETTINGS.NAHEULBEUK.VARIANT.CurrencyWeight.Hint",
    scope: "world",
    config: false,
    default: true,
    type: Boolean
  });

  game.settings.register("naheulbeuk", "encumbrance", {
    name: "SETTINGS.NAHEULBEUK.VARIANT.Encumbrance.Name",
    hint: "SETTINGS.NAHEULBEUK.VARIANT.Encumbrance.Hint",
    scope: "world",
    config: false,
    default: "none",
    type: String,
    choices: {
      none: "SETTINGS.NAHEULBEUK.VARIANT.Encumbrance.None",
      normal: "SETTINGS.NAHEULBEUK.VARIANT.Encumbrance.Normal",
      variant: "SETTINGS.NAHEULBEUK.VARIANT.Encumbrance.Variant"
    }
  });

  game.settings.register("naheulbeuk", "levelingMode", {
    name: "SETTINGS.NAHEULBEUK.VARIANT.LevelingMode.Name",
    hint: "SETTINGS.NAHEULBEUK.VARIANT.LevelingMode.Hint",
    scope: "world",
    config: false,
    default: "xpBoons",
    type: String,
    choices: {
      noxp: "SETTINGS.NAHEULBEUK.VARIANT.LevelingMode.NoXP",
      xp: "SETTINGS.NAHEULBEUK.VARIANT.LevelingMode.XP",
      xpBoons: "SETTINGS.NAHEULBEUK.VARIANT.LevelingMode.XPBoons"
    }
  });  
}

/* -------------------------------------------- */

/**
 * Set the theme on an element, removing the previous theme class in the process.
 * @param {HTMLElement} element     Body or sheet element on which to set the theme data.
 * @param {string} [theme=""]       Theme key to set.
 * @param {Set<string>} [flags=[]]  Additional theming flags to set.
 */
export function setTheme(element, theme="", flags=new Set()) {
  if ( foundry.utils.getType(theme) === "Object" ) theme = theme.applications;
  element.className = element.className.replace(/\bnaheulbeuk-(theme|flag)-[\w-]+\b/g, "");

  // Primary Theme
  if ( !theme && (element === document.body) ) {
    if ( matchMedia("(prefers-color-scheme: dark)").matches ) theme = "dark";
    if ( matchMedia("(prefers-color-scheme: light)").matches ) theme = "light";
  }
  if ( theme ) {
    element.classList.add(`naheulbeuk-theme-${theme.slugify()}`);
    element.dataset.theme = theme;
  }
  else delete element.dataset.theme;

  // Additional Flags
  if ( (element === document.body) && matchMedia("(prefers-contrast: more)").matches ) flags.add("high-contrast");
  for ( const flag of flags ) element.classList.add(`naheulbeuk-flag-${flag.slugify()}`);
  element.dataset.themeFlags = Array.from(flags).join(" ");
}