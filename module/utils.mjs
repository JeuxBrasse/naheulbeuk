/* -------------------------------------------- */
/*  Logging                                     */
/* -------------------------------------------- */

/**
 * Log a console message with the "Naheulbeuk" prefix and styling.
 * @param {string} message                    Message to display.
 * @param {object} [options={}]
 * @param {string} [options.color="#055000"]  Color to use for the log.
 * @param {any[]} [options.extras=[]]         Extra options passed to the logging method.
 * @param {string} [options.level="log"]      Console logging method to call.
 */
export function log(message, {color="#055000", extras=[], level="log"}={}) {
    console[level](
    `%cNaheulbeuk | %c${message}`, `color: ${color}; font-variant: small-caps`, "color: revert", ...extras
  );
}
