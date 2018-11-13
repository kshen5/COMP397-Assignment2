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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // public properties
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Main = function () {
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
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
            // goes to the instructions scene
            this._instructionsButton.on("click", function () {
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            });
        };
        Start.prototype.Start = function () {
            // Instantiates objects
            this._startButton = new objects.Button("startButton", 160, 240, true);
            this._instructionsButton = new objects.Button("instructionsButton", 440, 240, true);
            this._exitButton = new objects.Button("exitButton", 300, 360, true);
            this._welcomeLabel = new objects.Label("Shooting Star", "60px", "Consolas", "#FFFF00", 320, 120, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }
            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map