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

var GAME_CONFIG = {
    ROWS : 6,
    COLS : 7,
    DEFAULT_OPPONENT      : OPPONENT_TYPES.AI,
    DEFAULT_AI_DIFFICULTY : AI_DIFFICULTIES.EASY
};

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