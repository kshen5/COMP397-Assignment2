module scenes {
    export class Play extends objects.Scene {

        // private instance variables

        private _player: objects.Player;
        private _enemiesNum: number;
        private _enemies: objects.Enemies[];
        private _background: objects.Background;
        private _background2: objects.Background;

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Start(): void {

            this._enemiesNum = 4;
            this._player = new objects.Player();
            // must do this to instantiate the array
            this._enemies = new Array<objects.Enemies>();
            // adds enemies to the array
            for (let count = 0; count < this._enemiesNum; count++) {
                this._enemies[count] = new objects.Enemies();
            }

            this.Main();
        }
        public Update(): void {

            this._player.Update();

             // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }

            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
            
            // updates each enemy in array
            this._enemies.forEach(enemy => {
                enemy.Update();
                managers.Collision.Check(this._player, enemy);
            });

               
        }
        public Reset(): void {

        }
        public Destroy(): void {
            this.removeAllChildren();
        }        

        public Main(): void {

            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            this._background2 = new objects.Background();
            this._background2.Reset();
            this.addChild(this._background2);

            // adds player to the stage
            this.addChild(this._player);

            //adds enemies to the scene
            this._enemies.forEach(enemies => {
                this.addChild(enemies);
              });

            //add Scoreboard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);

        }

    }
}