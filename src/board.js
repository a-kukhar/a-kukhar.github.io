/**
 * 
 */
class Board {
    constructor(scene) {
        this.scene        = scene;        
        this.matrix       = [];
        this.previewCells = [];
        this.boardCells   = [];
        this.placedBalls  = [];
        this.scale        = 1;

        this.previewBallPlayer   = null;
        this.previewBallOpponent = null;        

        return this;
    };
    /**
     * 
     */
    initMatrix() {
        for (let r = 0; r < GAME_CONFIG.ROWS; r++) {
            let row = [];
            for (let c = 0; c < GAME_CONFIG.COLS; c++) {
                row.push(0);
            }
            this.matrix.push(row);
        }
    };    
    /**
     * 
     */
    create() {
        this.initMatrix();        

        this.scale = this.getCellScale();

        this.previewBallPlayer = this.scene.add.sprite(0, 0, "ball-1");
        this.previewBallPlayer.setScale(this.scale);
        this.previewBallPlayer.setAlpha(0);

        this.previewBallOpponent = this.scene.add.sprite(0, 0, "ball-2");
        this.previewBallOpponent.setScale(this.scale);
        this.previewBallOpponent.setAlpha(0);

        this.drawPreviewRow();
        this.drawBoard();

        return this;
    };
    /**
     * 
     */
    getCellScale() {
        const gameWidth = this.scene.game.scale.width;
        const gameHeight = this.scene.game.scale.height;
        let cell = this.scene.add.sprite(-200, -200, "cell");
        let width = cell.width;
        let height = cell.height;

        let neededWidth = width * GAME_CONFIG.COLS;
        let widthScale = neededWidth > gameWidth ? gameWidth / neededWidth : 1;

        let neededHeight = height * (GAME_CONFIG.ROWS + 1);
        let heightScale = neededHeight > gameHeight ? gameHeight / neededHeight : 1;

        cell.destroy();

        return widthScale < heightScale ? widthScale : heightScale;
    }
    /**
     * 
     */
    drawPreviewRow() {
        let startX = 0;
        for (let colIndex = 0; colIndex < GAME_CONFIG.COLS; colIndex++) {
            let previewCell = this.scene.add.sprite(startX, 0, "cell").setOrigin(0);
            previewCell.setAlpha(0);
            previewCell.setScale(this.scale);
            startX += previewCell.displayWidth;
            this.previewCells.push(previewCell);
        }        
    };
    /**
     * 
     */
    drawBoard() {
        let currentX = 0;
        let currentY = this.previewCells[0].displayHeight;

        for (let r = 0; r < this.matrix.length; r++) {
            currentX = 0;
            let row = this.matrix[r];
            let rowCells = [];
            for (let c = 0; c < row.length; c++) {
                let cell = this.scene.add.sprite(currentX, currentY, "cell").setOrigin(0);
                cell.setScale(this.scale);
                cell.setData("column", c);
                cell.setData("row", r);
                cell.setInteractive();
                cell.on("pointerover", this.showPreview.bind(this, cell), this);
                cell.on("pointerup", this.placeTurn.bind(this, cell), this);
                rowCells.push(cell);
                currentX += cell.displayWidth;
            }
            this.boardCells.push(rowCells);
            currentY += this.previewCells[0].displayHeight;
        }
    };
    /**
     * 
     */
    showPreview(cell) {
        let column = cell.getData("column");
        let previewCell = this.previewCells[column];
        
        this.previewBallOpponent.setPosition(previewCell.x + previewCell.width / 2, previewCell.y + previewCell.height / 2);
        this.previewBallPlayer.setPosition(previewCell.x + previewCell.width / 2, previewCell.y + previewCell.height / 2);
       
        let owner = this.scene.getTurnOwner();
               
        if (owner === TURN_TYPES.PLAYER) {
            this.previewBallPlayer.setAlpha(1);
            this.previewBallOpponent.setAlpha(0);
        } else {
            this.previewBallOpponent.setAlpha(1);
            this.previewBallPlayer.setAlpha(0);
        }
    };
    /**
     * 
     */
    placeTurn(cell) {
        let column = cell.getData("column");
        let isPlaced = false;
        for (let rowIndex = GAME_CONFIG.ROWS - 1; rowIndex >= 0; rowIndex--) {
            let row = this.matrix[rowIndex];
            if (row[column] === 0) {
                row[column] = this.scene.getTurnOwner();
                this.placeBall(this.boardCells[rowIndex][column], this.scene.getTurnOwner());
                isPlaced = true;
                break;
            }
        }
        if (isPlaced) {
            this.checkSequence();
            this.scene.switchTurn();
            this.showPreview(cell);
        }
    };
    /**
     * 
     */
    placeBall(cell, turnOwner) {
        let spriteName = turnOwner === TURN_TYPES.PLAYER ? "ball-1" : "ball-2";
        let ball = this.scene.add.sprite(cell.x + cell.width / 2, cell.y + cell.height / 2, spriteName);
        this.placedBalls.push(ball);
    }
    /**
     * 
     */
    checkSequence() {
        // ROWS
        for (let rowIndex = 0; rowIndex < GAME_CONFIG.ROWS; rowIndex++) {
            let playerBalls = 0;
            let opponentBalls = 0;
            let row = this.matrix[rowIndex];
            for (let columnIndex = 0; columnIndex < GAME_CONFIG.COLS; columnIndex++) {
                if (row[columnIndex] === TURN_TYPES.PLAYER) {
                    playerBalls++;
                    opponentBalls = 0;
                } else if (row[columnIndex] === TURN_TYPES.OPPONENT) {
                    playerBalls = 0;
                    opponentBalls++;
                }
            }
            if (this.checkWin(playerBalls, opponentBalls)) return;
        }

        // COLUMNS
        for (let columnIndex = 0; columnIndex < GAME_CONFIG.COLS; columnIndex++) {
            let playerBalls = 0;
            let opponentBalls = 0;
            for (let rowIndex = 0; rowIndex < GAME_CONFIG.ROWS; rowIndex++) {
                if (this.matrix[rowIndex][columnIndex] === TURN_TYPES.PLAYER) {
                    playerBalls++;
                    opponentBalls = 0;
                } else if (this.matrix[rowIndex][columnIndex] === TURN_TYPES.OPPONENT) {
                    playerBalls = 0;
                    opponentBalls++;
                }
            }
            if (this.checkWin(playerBalls, opponentBalls)) return;
        }

        // DIAGONALS LEFT-RIGHT
        for (let rowIndex = 3; rowIndex < GAME_CONFIG.ROWS; rowIndex++) {
            for (let columnIndex = 0; columnIndex <= GAME_CONFIG.COLS - 4; columnIndex++) {
                let playerBalls = 0;
                let opponentBalls = 0;
                for (let tempRowIndex = rowIndex; tempRowIndex > rowIndex - 4; tempRowIndex--) {
                    if (this.matrix[tempRowIndex][columnIndex + (rowIndex - tempRowIndex)] === TURN_TYPES.PLAYER) {
                        playerBalls++;
                        opponentBalls = 0;
                    } else if (this.matrix[tempRowIndex][columnIndex + (rowIndex - tempRowIndex)] === TURN_TYPES.OPPONENT) {
                        playerBalls = 0;
                        opponentBalls++;
                    }
                }
                if (this.checkWin(playerBalls, opponentBalls)) return;    
            }
        }        

        // DIAGONALS RIGHT-LEFT
        
    };
    /**
     * 
     */
    checkWin(playerBalls, opponentBalls) {
        if (playerBalls === 4) {
            this.scene.showWinner(TURN_TYPES.PLAYER);
            return true;
        } else if (opponentBalls === 4) {
            this.scene.showWinner(TURN_TYPES.OPPONENT);
            return true;
        }
        return false;
    }
}