module objects {
    export class Player extends objects.GameObject {
        
        // private instance variables

        // public properties
        
        // constructors
        constructor() {
            super("player",90);

            this.Start();
        }


        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 50;
        }

        public Update():void {
            // switched from x to y
            this.y = managers.Game.stage.mouseY;
            this._updatePosition();
            // checks the right boundary
            if(this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }

            // check the left boundary
            if(this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }

        }

        public Reset(): void {
        }
        
        public Destroy(): void {
        }


    }
}