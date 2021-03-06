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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        //constructor
        function Instructions() {
            var _this = _super.call(this) || this;
            _this._flavourText = "You are the developer of a new player for the USA's \"Space Force\". "
                + "Your goal is to remotely pilot the player against a number of Russian tanks to see how well it fares. "
                + "Destroy 20 tanks to clear the mission!\n";
            _this._controlsText = "mouse up and down\n "
                + "space to attack";
            _this.Start();
            return _this;
        }
        Object.defineProperty(Instructions.prototype, "ShowControls", {
            //public props
            get: function () {
                return this._showControls;
            },
            set: function (newVal) {
                this._showControls = newVal;
                if (this._showControls) {
                    this._instructionLbl.text = this._controlsText;
                }
                else {
                    this._instructionLbl.text = this._flavourText;
                }
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instructions.prototype.Start = function () {
            this._space = new objects.Background();
            this._welcomeLbl = new objects.Label("Instructions", "60px", "Consolas", "#FFFF00", 360, 60, true);
            this._instructionLbl = new objects.Label(this._flavourText, "30px", "Consolas", "#FFFF00", 360, 115, false);
            this._instructionLbl.lineWidth = 640;
            this._instructionLbl.lineHeight = 30;
            this._instructionLbl.textAlign = "center";
            this._nextBtn = new objects.Button("nextButton", 200, 460, true);
            this._menuBtn = new objects.Button("menuButton", 520, 460, true);
            this.Main();
        };
        Instructions.prototype.Update = function () {
            this._space.Update();
        };
        Instructions.prototype.Main = function () {
            var _this = this;
            this.addChild(this._space);
            this.addChild(this._welcomeLbl);
            this.addChild(this._instructionLbl);
            this.addChild(this._menuBtn);
            this.addChild(this._nextBtn);
            this._menuBtn.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
            this._nextBtn.on("click", function () {
                _this.ShowControls = !_this.ShowControls;
            });
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map