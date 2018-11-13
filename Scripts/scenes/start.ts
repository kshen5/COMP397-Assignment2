module scenes{
    export class Start extends objects.Scene{
        // private instance variables
        
        private _background: objects.Background;
        private _background2: objects.Background;
        private _welcomeLabel:objects.Label;
        private _startButton:objects.Button;
        private _instructionsButton: objects.Button;
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


            // adds start button to the scene
            this.addChild(this._startButton);

            // adds intructions button to the scene
            this.addChild(this._instructionsButton);

            // adds exit button to the scene
            this.addChild(this._exitButton);

            // adds welcomelabel to the scene
            this.addChild(this._welcomeLabel);

            // event listeners

            // starts the play scene
            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            })

            // goes to the instructions scene
            this._instructionsButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._startButton = new objects.Button("startButton", 160, 240, true);
            this._instructionsButton = new objects.Button("instructionsButton", 440, 240, true);
            this._exitButton = new objects.Button("exitButton", 300, 360, true);
            this._welcomeLabel = new objects.Label("Shooting Star", "60px", "Consolas", "#FFFF00", 320, 120, true);

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