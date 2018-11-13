module scenes {
    export class Over extends objects.Scene{

        // private instance variables
        private _background:objects.Background;
        private _background2:objects.Background;
        private _gameOverLabel:objects.Label;
        private _restartButton:objects.Button;
        private _exitButton: objects.Button;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Main(): void {
            
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            this._background2 = new objects.Background();
            this._background2.Reset();
            this.addChild(this._background2);

            // adds restartButton to the stage
            this.addChild(this._restartButton);

             // adds exitButton to the stage
             this.addChild(this._exitButton);

            // adds player to the stage
            this.addChild(this._gameOverLabel);

            // event listeners

            // starts the play scene
            this._restartButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
                managers.Game.scoreBoard.Reset();
            });

            //returns to Start/Home scene
            this._exitButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.START;
                managers.Game.scoreBoard.Reset();
            })

            managers.Game.scoreBoard.AddHighScore(this);
        }        
        public Start(): void {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 340, true);
            this._exitButton = new objects.Button("exitButton",250, 400 )
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 220, true);

            this.Main();
        }
        public Update(): void {
        // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }

            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
        }
        public Reset(): void {
           
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}