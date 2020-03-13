TestScene = function() {

};

TestScene.prototype.create = function() {
    this.cameras.main.setBackgroundColor(0xffffff);
    let mainTitle = this.add.text(this.game.scale.width / 2, this.game.scale.height / 2 - 50, "GAME IS READY", {
        fontFamily: "Arial",
        fontSize: 80,
        fontStyle: "bold",
        color: "#0000ff",
        stroke: "#000000",
        strokeThickness: 2
    }).setOrigin(0.5);
    let waitTitle = this.add.text(this.game.scale.width / 2, this.game.scale.height / 2 + 50, "waiting for start...", {
        fontFamily: "Arial",
        fontSize: 40,
        fontStyle: "bold",
        color: "#0000ff",
    }).setOrigin(0.5);
    this.tweens.add({
        targets: [waitTitle],
        alpha: 0.2,
        duration: 300,
        repeat: -1,
        yoyo: true
    });
    sendToGameshell({
        eventType: "gameReady",
        message: GAMESHELL_GAME_INFO
    });
}