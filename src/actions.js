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

/**
 * Start game for admin.
 */
function startGameHook() {
    sendToGameshell({
        eventType: "sendToAll",
        message: {
            type: "startGame",
            data: { startingPlayerId: GAMESHELL_CURRENT_PLAYER.personId }
        }
    });
};
  
/**
 * Handle start game for players
 * @param {number} playerId - id of player who turn. 
 */
function gsStartGame(playerId) {
    console.log("################ START GAME ####################");
    console.log(playerId);
    console.log("################################################");
};

function handleGameMessageHook(message) {
    let messageType = message.type;
    let messageData = message.data;

    switch (messageType) {
        case "startGame": 
            gsStartGame(messageData);
            break;
    };
};

