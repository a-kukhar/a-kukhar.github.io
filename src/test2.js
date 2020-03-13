TestScene2 = function() {

};

TestScene2.prototype.create = function() {
    console.log("Preloader scene function");
    /*this.load.on("complete", this.loadComplete, this);
    this.load.setPath("./images/theme_01/")
    
    this.load.image("cell", "cell.png");
    this.load.image("ball-1", "ball-1.png");
    this.load.image("ball-2", "ball-2.png");

    this.load.start();*/
    this.scene.start("ddfsff");
};

TestScene2.prototype.loadComplete = function() {
    console.log("loading complete");
    this.scene.start("Ready");
};