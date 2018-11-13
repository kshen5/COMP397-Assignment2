var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // public properties
        // constructors
        function Over() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Over.prototype.Main = function () {
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
            this._restartButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
                managers.Game.scoreBoard.Reset();
            });
            //returns to Start/Home scene
            this._exitButton.on("click", function () {
                managers.Game.currentState = config.Scene.START;
                managers.Game.scoreBoard.Reset();
            });
            managers.Game.scoreBoard.AddHighScore(this);
        };
        Over.prototype.Start = function () {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 340, true);
            this._exitButton = new objects.Button("exitButton", 250, 400);
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 220, true);
            this.Main();
        };
        Over.prototype.Update = function () {
            // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }
            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
        };
        Over.prototype.Reset = function () {
        };
        Over.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map