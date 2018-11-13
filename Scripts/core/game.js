//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    // state objects
    var currentScene;
    var currentState;
    var scoreBoard;
    // utility variables
    var assetManifest = [
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "restartButton", src: "./Assets/images/restartButton.png" },
        { id: "menuButton", src: "./Assets/images/menuButton.png" },
        { id: "exitButton", src: "./Assets/images/exitButton.png" },
        { id: "howToButton", src: "./Assets/images/howToButton.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "player", src: "./Assets/images/player.png" },
        { id: "enemy", src: "./Assets/images/enemy.png" },
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; //global reference to assetManager
        assetManager.installPlugin(createjs.Sound); //enable sound preloading
        assetManager.loadManifest(assetManifest); //preloads assets listed in the manifest
        assetManager.on("complete", Start); //call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        document.addEventListener("keydown", function (event) {
            managers.Input.HandleInput(event);
        });
        document.addEventListener("keyup", function (event) {
            managers.Input.HandleUpInput(event);
        });
        //Setup global scoreboard and UI
        scoreBoard = new objects.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;
        //Setup initial scene
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    //main game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.INSTRUCTIONS:
                currentScene = new scenes.Instructions();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map