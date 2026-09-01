/**
 * Register all of the system's keybindings.
 */
export function registerSystemKeybindings() {
  game.keybindings.register("naheulbeuk", "skipDialogNormal", {
    name: "KEYBINDINGS.NAHEULBEUK.SkipDialogNormal",
    editable: [{ key: "ShiftLeft" }, { key: "ShiftRight" }]
  });

  game.keybindings.register("naheulbeuk", "skipDialogAdvantage", {
    name: "KEYBINDINGS.NAHEULBEUK.SkipDialogAdvantage",
    editable: [{ key: "AltLeft" }, { key: "AltRight" }]
  });

  game.keybindings.register("naheulbeuk", "skipDialogDisadvantage", {
    name: "KEYBINDINGS.NAHEULBEUK.SkipDialogDisadvantage",
    editable: [{ key: "ControlLeft" }, { key: "ControlRight" }, { key: "OsLeft" }, { key: "OsRight" }]
  });

  game.keybindings.register("naheulbeuk", "dragCopy", {
    name: "KEYBINDINGS.NAHEULBEUK.DragCopy",
    editable: [{ key: "ControlLeft" }, { key: "ControlRight" }, { key: "AltLeft" }, { key: "AltRight" }]
  });

  game.keybindings.register("naheulbeuk", "dragMove", {
    name: "KEYBINDINGS.NAHEULBEUK.DragMove",
    editable: [{ key: "ShiftLeft" }, { key: "ShiftRight" }, { key: "OsLeft" }, { key: "OsRight" }]
  });

  game.keybindings.register("naheulbeuk", "toggleSheetMode", {
    name: "KEYBINDINGS.NAHEULBEUK.ToggleSheetMode",
    editable: [{ key: "KeyE", modifiers: ["Shift"] }],
    onDown: () => {
      const app = ui.activeWindow;
      if ( !app?.rendered || !app.changeMode || !app.isEditable ) return false;
      app.changeMode();
      return true;
    }
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

  // Debug Mode
  game.settings.register("naheulbeuk", "debugMode", {
    name: "Debug Mode",
    hint: "Enable debug mode for the system.",
    scope: "world",
    config: true,
    default: "standard",
    type: String,
    choices: {
      debug: "SETTINGS.NAHEULBEUK.Log.Debug",
      standard: "SETTINGS.NAHEULBEUK.Log.Standard"
    },
    requiresReload: true
  });

}
