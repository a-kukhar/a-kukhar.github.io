var PHASER_GAME = null;

const OPPONENT_TYPES = {
    PLAYER : 0,
    AI     : 1
};

const TURN_TYPES = {
    PLAYER   : 1,
    OPPONENT : 2
};

const AI_DIFFICULTIES = {
    EASY   : 1,
    NORMAL : 3,
    HARD   : 5
};

const GAME_CONFIG = {
    ROWS : 6,
    COLS : 7,
    DEFAULT_OPPONENT      : OPPONENT_TYPES.AI,
    DEFAULT_AI_DIFFICULTY : AI_DIFFICULTIES.EASY
};

// GAME DATA TO GAMESHELL

/**
 * Information for GameShell about game configuration.
 * @type {GameInfo}
 */
const GAMESHELL_GAME_INFO = new GameInfo({
    name: "“Connect Four",
    width: 700,
    height: 700,
    autoScale: true,
    themes: ["default", "Valentine's", "St. Patrick's", "Halloween", "Christmas", "Easter", "Thanksgiving"],
    gamesetsAllowed: true,
    minimumGamesetCardsAllowed: 1,
    isTurnTaking: true,
    allowGameCardNavigation: true        
});

/**
 * @typedef GameParticipant
 * @type {object}
 * @property {string} name - name of player.
 * @property {number} personId - ID of player.
 * @property {boolean} isLocal - is player are local player,
 * @property {boolean} controlsEnabled - is player able to interact with game.
 * @property {boolean} gamemaster - is player Game Master.
 * @property {boolean} isOnline - is player online.
 */

/**
 * @typedef GameShellInfo
 * @type {object}
 * @property {number} userType - type of user (1 - student, 2 - therapist, 3 - e-helper).
 * @property {GameParticipant[]} players - array of players.
 * @property {GameParticipant} currentPlayer - info about current player.
 */

// GAME DATA FROM GAMESHELL

/**
 * Information from GameShell
 * @type {GameShellInfo}
 */
var GAMESHELL_PLAYERS_INFO = null;
/**
 * Information about current player.
 * @type {GameParticipant}
 */
var GAMESHELL_CURRENT_PLAYER = null;
/**
 * Type of current player.
 * 1 - student;
 * 2 - therapist;
 * 3 - e-helper;
 */
var GAMESHELL_CURRENT_PLAYER_TYPE = 1;