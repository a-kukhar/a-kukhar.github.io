/**
 * Handlers for GameShell events. Names is hardcoded in gameshell.js
 */

/**
 * Get "welcome" message with general information about players.
 * @param {GameShellInfo} data 
 */
function setGameshellInfoHook(data) {
    GAMESHELL_PLAYERS_INFO        = data;
    GAMESHELL_CURRENT_PLAYER      = data.currentPlayer;
    GAMESHELL_CURRENT_PLAYER_TYPE = data.userType;
};

function startGameHook() {
    PHASER_GAME
    debugger;
}