"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var css = function css(props) {
  var color = 'yellow';

  if (props.color) {
    color = props.color;
  }

  return "\n        .popup {\n          position: absolute;\n          visibility: hidden;\n          z-index: 9999999999;\n          will-change: transform;\n          top: 0px;\n          left: 0px;\n          transform: translate3d(0px, 0px, 0px);\n          width: auto;\n          display:block;\n          background-color: #000;\n          color: #FFF;\n          text-align: center;\n          border-radius: 6px;\n          padding: 10px;\n          margin-left: -80px;\n          line-height: 20px;\n          font-size: 14px;\n          border: 4px solid rgb(0, 0, 0);\n          box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px 0px;\n         }\n        .popup::after {\n          content: \"\";\n          position: absolute;\n          width: 0;\n          height: 0;\n          border-width: 10px;\n          border-style: solid;\n          border-color: #000 transparent transparent transparent;\n          top: 44px;\n          left: 50%;\n          margin-left:-12px;\n          \n        }\n        .popupItem{width:auto; padding:8px 12px; font-size:16px; font-weight:bold; border-right:1px solid #433E49; cursor:pointer;}\n        .popupItem:hover{text-decoration:underline; color:#1890ff;}\n        .popupItem:last-child{border-right:none}\n        .extracted-class {\n        position: relative;\n    display: inline-block;\n    }\n        .extracted-class::after {\n          background:  ".concat(color, ";\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: 999;\n          left: 0;\n          right: 0;\n          opacity: 0.3;\n          top: 0;\n          bottom: 0;\n        }\n        \n        .extracted-simple-text {\n          background-color: ").concat(color, ";\n          color: black;\n        }\n        ");
};

var PopOver =
/*#__PURE__*/
function (_Component) {
  _inherits(PopOver, _Component);

  function PopOver(props) {
    var _this;

    _classCallCheck(this, PopOver);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopOver).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "parseItems", function (items) {
      if (items != null && items != undefined && items.length > 0) {
        if (!Array.isArray(items)) items = [items];
        var parsed = '';
        items.forEach(function (item, index) {
          var handler = "<span class='popupItem' data-action=\"".concat(index, "\"  id=\"").concat(item.text, "-").concat(index, "\">\n            ").concat(item.text, "\n          </span>");
          parsed += handler;
        });
        return parsed;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectionEndText", function (e) {
      var t = document.getSelection();

      if (t.toString().length !== 0) {
        _this.range = t.getRangeAt(0);

        if (_this.range && !_this.range.collapsed) {
          _this.frangment = _this.range.cloneContents();
        }

        var top = 0;
        if (e.pageY < _this.state.startY) top = e.pageY - 50;else top = _this.state.startY - 50;
        var left = 0;

        if (_this.state.startX > e.pageX) {
          left = _this.state.startX;
        } else {
          left = e.pageX;
        }

        var popup = document.querySelector('#popup-dynamic');

        if (popup) {
          popup.style.visibility = 'visible';
          popup.style.transform = "translate3d(".concat(left, "px, ").concat(top, "px, 0px)");
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "processSelection", function (e) {
      var t = document.getSelection();

      if (t.toString().length !== 0 && e.target.classList.contains('popupItem')) {
        if (_this.frangment) {
          if (_this.props.colorText) {
            var span = document.createElement('span');

            try {
              span.className = 'extracted-simple-text';

              _this.range.surroundContents(span);
            } catch (error) {
              console.log(error);
              span.className = 'extracted-class';

              var frangment = _this.range.extractContents();

              span.appendChild(frangment);

              _this.range.insertNode(span);
            }

            if (span.nextSibling.innerHTML === "") {
              span.parentElement.removeChild(span.nextSibling);
            }

            if (span.previousSibling.innerHTML === "") {
              span.parentElement.removeChild(span.previousSibling);
            }
          }

          _this.props.events[e.target.dataset.action].handler(_this.range.cloneContents().children[0], _this.range.toString());

          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          } else if (document.selection) {
            document.selection.empty();
          }
        }
      } else {
        _this.setState({
          startX: e.pageX,
          startY: e.pageY
        });
      }

      _this.hidePopup();
    });

    _this.state = {
      startX: 0,
      startY: 0
    };
    _this.el = document.createElement('span');
    _this.range = null;
    _this.frangment = null;
    return _this;
  }

  _createClass(PopOver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var style = document.createElement('style');
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText += css(this.props);
      } else {
        style.appendChild(document.createTextNode(css(this.props)));
      }

      this.el.appendChild(style);
      var span = document.createElement('span');
      var parseItems = this.parseItems(this.props.events);
      span.innerHTML = "<span class='popup' id=\"popup-dynamic\" >\n          ".concat(parseItems, "\n        </span>");
      this.el.appendChild(span);
      document.body.appendChild(this.el);
      document.onmouseup = this.selectionEndText;
      document.onmousedown = this.processSelection;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
      this.range = null;
      this.frangment = null;
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      var popup = document.querySelector('#popup-dynamic');

      if (popup) {
        popup.style.visibility = 'hidden';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return PopOver;
}(_react.Component);

var _default = PopOver;
exports["default"] = _default;
