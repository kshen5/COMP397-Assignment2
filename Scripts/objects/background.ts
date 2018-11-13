module objects{
    export class Background extends objects.GameObject{
        
        // private instance variables
        private _horizontalSpeed: number = 0;

        // public properties

        // constructor
        /**
         *Creates an instance of Background.
         * @param {string} imageString
         * @param {number} [verticalSpeed=0]
         * @memberof Background
         */
        constructor() {
            super("space", 90);

            this.Start();
        }

        // private methods


        private _move():void {
            this.y += this._horizontalSpeed;
        }

        // public methods

        public Start(): void {
        }
        public Update(): void {
            this._move();
        }
        public Reset(): void {
            this.x = -this.Height;
        }
        public Destroy(): void {

        }
    }
}