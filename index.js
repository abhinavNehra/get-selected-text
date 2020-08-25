"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var css = function css(props) {
  var color = 'yellow';

  if (props.color) {
    color = props.color;
  }

  return "\n        .popup {\n          width: auto;\n          position: absolute;\n          visibility: hidden;\n          z-index: 9999999999;\n          will-change: transform;\n          top: 0px;\n          left: 0px;\n          transform: translate3d(0px, 0px, 0px);\n          display:block;\n          background-color: #000;\n          color: #FFF;\n          text-align: center;\n          border-radius: 6px;\n          padding: 10px;\n          margin-left: -80px;\n          line-height: 20px;\n          font-size: 14px;\n          borde r: 4px solid rgb(0, 0, 0);\n          box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px 0px;\n         }\n        .popup::after {\n          content: \"\";\n          position: absolute;\n          width: 0;\n          height: 0;\n          border-width: 10px;\n          border-style: solid;\n          border-color: #000 transparent transparent transparent;\n          top: 44px;\n          left: 50%;\n          margin-left:-12px;\n          \n        }\n        .popupItem{width:auto; padding:8px 12px; font-size:16px; font-weight:bold; border-right:1px solid #433E49; cursor:pointer;}\n        .popupItem:hover{text-decoration:underline; color:#1890ff;}\n        .popupItem:last-child{border-right:none}\n        .extracted-class {\n        position: relative;\n    display: inline-block;\n    }\n        .extracted-class::after {\n          background:  ".concat(color, ";\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: 999;\n          left: 0;\n          right: 0;\n          opacity: 0.3;\n          top: 0;\n          bottom: 0;\n        }\n        \n        .extracted-simple-text {\n          background-color: ").concat(color, ";\n          color: black;\n        }\n        \n        .for-mobile {\n            position: fixed;\n            top: 50%;\n            right: 40px;\n            width: auto;\n        }\n        .visible {\n            visibility: visible;\n        }\n\n        #tooltip {\n            position: fixed;\n            display: none;\n        }\n        ");
};

var PopOver = /*#__PURE__*/function (_Component) {
  _inherits(PopOver, _Component);

  var _super = _createSuper(PopOver);

  function PopOver(props) {
    var _this;

    _classCallCheck(this, PopOver);

    _this = _super.call(this, props);

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

    _defineProperty(_assertThisInitialized(_this), "checkMobile", function () {
      var deviceIsMobile = false;

      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        deviceIsMobile = true;
      }

      return deviceIsMobile;
    });

    _defineProperty(_assertThisInitialized(_this), "selectionEndText", function (e) {
      var t = document.getSelection();

      if (t.toString().length !== 0) {
        _this.range = t.getRangeAt(0);

        if (_this.range && !_this.range.collapsed) {
          _this.frangment = _this.range.cloneContents();
        }

        if (!_this.checkMobile()) {
          var top = 0,
              left = 0;
          if (e.pageY < _this.state.startY) top = e.pageY - 50;else top = _this.state.startY - 50;

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
      }
    });

    _defineProperty(_assertThisInitialized(_this), "processSelection", function (e) {
      if (_this.checkMobile()) {
        if (e.target.classList.contains('popup-button')) return true;
      }

      var t = document.getSelection();

      if (t.toString().length !== 0 && e.target.classList.contains('popupItem')) {
        if (_this.frangment) {
          if (_this.props.colorText) {
            var span = document.createElement('span');
            var id = Math.floor(Math.random() * 1000);

            try {
              span.className = "extracted-simple-text";
              span.id = "id-".concat(id);

              _this.range.surroundContents(span);
            } catch (error) {
              console.log(error);
              var ansector = _this.range.commonAncestorContainer;
              var tagCollection = [];

              if (ansector.nodeType != 3) {
                tagCollection = Array.from(ansector.querySelectorAll('*'));
              }

              span.className = '';

              if (_this.frangment && _this.frangment.childNodes && _this.frangment.childNodes.length) {
                _this.frangment.childNodes.forEach(function (child, i) {
                  tagCollection.forEach(function (tag) {
                    if (child.nodeType === 3 && child.nodeName == '#text' && tag.innerHTML.includes(child.textContent)) {
                      var spanWrapper = document.createElement('span');
                      spanWrapper.className = "extracted-simple-text id-".concat(id);
                      spanWrapper.id = "id-".concat(id);
                      spanWrapper.append(child.textContent);
                      var Html = tag.innerHTML.replace(child.textContent, spanWrapper.innerHTML);
                      tag.innerHTML = Html;
                    } else if (tag.innerHTML && tag.innerHTML.includes(child.innerHTML)) {
                      var _spanWrapper = document.createElement('span');

                      _spanWrapper.className = "extracted-simple-text id-".concat(id);
                      _spanWrapper.id = "id-".concat(id);

                      _spanWrapper.append(child.textContent);

                      var _Html = tag.innerHTML.replace(child.innerHTML, _spanWrapper.outerHTML);

                      tag.innerHTML = _Html;
                    }
                  });
                });
              }
            }

            if (_this.props.unmark) {
              console.log('this.props.tooltip', _assertThisInitialized(_this));

              _this.tooltip(id);
            }
          }

          var frangmentWrapper = document.createElement('span');
          frangmentWrapper.appendChild(_this.frangment);

          _this.props.events[e.target.dataset.action].handler(frangmentWrapper, _this.range.toString());

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

      if (!_this.checkMobile()) _this.hidePopup();
    });

    _defineProperty(_assertThisInitialized(_this), "tooltip", function (id) {
      if (!_this.tooltipElement) {
        var button = document.createElement('button');
        button.id = "tooltip";
        button.textContent = _this.props.unmarkText ? _this.props.unmarkText : 'remove';
        button.style.display = 'none';
        document.body.append(button);
        _this.tooltipElement = button;
      }

      var elemID = "id-".concat(id);
      var main = document.getElementById(elemID);

      if (main) {
        main.onmouseenter = _this.handleFocus;
        main.onmouseleave = _this.handleLost;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      e.preventDefault();
      var button = document.getElementById('tooltip');

      if (button.style.display === 'none') {
        button.style.display = 'block';

        if (button.className !== e.target.id) {
          button.className = e.target.id;
          button.style.top = "".concat(e.clientY, "px");
          button.style.left = "".concat(e.clientX, "px");
          button.onclick = _this.deleteElement;
          button.onmouseleave = _this.handleLost;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deleteElement", function (evt) {
      var classID = evt.target.className;
      var element = document.getElementById(classID);

      if (!element) {
        return;
      } else if (element) {
        element.className = '';
        element.id = '';
        element.onmouseenter = null;
        element.onmouseleave = null;
        return _this.deleteElement(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLost", function (e) {
      e.preventDefault();
      console.log('lost --');

      if (e.relatedTarget.id === 'tooltip' || e.target.id === 'tooltip' && e.relatedTarget.className === 'extracted-simple-text') {//console.log('tooltip')
      } else {
        console.log('other');
        var button = document.getElementById('tooltip');
        button.style.display = 'none';
        button.className = "";
      }
    });

    _this.state = {
      startX: 0,
      startY: 0,
      timeout: null
    };
    _this.el = document.createElement('span');
    _this.range = null;
    _this.frangment = null;
    _this.tooltipElement = null;
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
      span.className = 'popup-span';

      if (document.getElementsByClassName('popup-span').length) {
        return;
      }

      if (this.checkMobile()) {
        span.className += ' for-mobile';
        span.innerHTML = "<span class='popup popup-button visible' id=\"popup-dynamic\" >\n              ".concat(parseItems, "\n            </span>");
        window.addEventListener("touchstart", this.processSelection);
        window.addEventListener("pointerdown", this.selectionEndText);
        window.addEventListener("touchmove", this.selectionEndText);
        window.addEventListener("touchend", this.selectionEndText);
        window.addEventListener("touchcancel", this.selectionEndText);
        span.addEventListener('onclick', function (e) {
          this.selectionEndText(e);
          setTimeout(function () {
            this.processSelection(e);
          });
        });
      } else {
        span.innerHTML = "<span class='popup popup-button' id=\"popup-dynamic\" >\n              ".concat(parseItems, "\n            </span>");
        document.onmouseup = this.selectionEndText;
        document.onmousedown = this.processSelection;
      }

      this.el.appendChild(span);
      document.body.appendChild(this.el);
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
