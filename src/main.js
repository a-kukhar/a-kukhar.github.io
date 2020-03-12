class MainScene extends Phaser.Scene {
    /**
     * 
     */
    constructor() {
        super("Main");
        this.board = null;
        this.turnOwner = TURN_TYPES.PLAYER;
    };
    /**
     * 
     */
    create() {
        this.cameras.main.setBackgroundColor(0xffffff);
        this.board = new Board(this).create();
    };
    /**
     * 
     */
    getTurnOwner() {
        return this.turnOwner;
    };
    /**
     * 
     */
    switchTurn() {
        this.turnOwner = this.turnOwner === TURN_TYPES.PLAYER ? TURN_TYPES.OPPONENT : TURN_TYPES.PLAYER;
    };
    /**
     * 
     */
    showWinner(winner) {
        if (winner === TURN_TYPES.PLAYER) {
            console.log("Player win!");
        } else {
            console.log("Opponent win!");
        }
    };
}