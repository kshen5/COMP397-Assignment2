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
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // public properties
        // constructor
        /**
         *Creates an instance of Background.
         * @param {string} imageString
         * @param {number} [verticalSpeed=0]
         * @memberof Background
         */
        function Background() {
            var _this = _super.call(this, "space", 90) || this;
            // private instance variables
            _this._horizontalSpeed = 0;
            _this.Start();
            return _this;
        }
        // private methods
        Background.prototype._move = function () {
            this.y += this._horizontalSpeed;
        };
        // public methods
        Background.prototype.Start = function () {
        };
        Background.prototype.Update = function () {
            this._move();
        };
        Background.prototype.Reset = function () {
            this.x = -this.Height;
        };
        Background.prototype.Destroy = function () {
        };
        return Background;
    }(objects.GameObject));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map