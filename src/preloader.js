class PreloaderScene extends Phaser.Scene {
    /**
     * 
     */
    constructor() {
        super("Preloader");
    };
    /**
     * 
     */
    create() {
        console.log("Game preloader");
        this.load.on("complete", this.loadComplete, this);
        this.load.setPath("./images/theme_01/")
        
        this.load.image("cell", "cell.png");
        this.load.image("ball-1", "ball-1.png");
        this.load.image("ball-2", "ball-2.png");

        this.load.start();
    };
    /**
     * 
     */
    loadComplete() {
        console.log("loading complete");
        this.scene.start("Ready");
    }
}