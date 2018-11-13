module managers {
    export class Game {
        // Global
        public static assetManager: createjs.LoadQueue;
        public static stage: createjs.Stage;
        public static currentState: config.Scene;
        public static scoreBoard: objects.ScoreBoard;
        public static bulletManager: managers.Bullet;
    }
}