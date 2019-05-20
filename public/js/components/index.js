webpackJsonp([0],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(262);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Content = __webpack_require__(260);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      dMode: false
    };
    _this.darkMode = _this.darkMode.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'darkMode',
    value: function darkMode(event) {
      var temp = document.getElementById("dark");
      if (event.target.className == "") {
        temp.classList.add("mode");
        this.setState({
          dMode: true
        });
      } else {
        temp.classList.remove("mode");
        this.setState({
          dMode: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.state.dMode == true ? 'dMode' : '' },
        _react2.default.createElement(_Navbar2.default, { darkMode: this.darkMode }),
        _react2.default.createElement(_Content2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.state = {
      name: "Joe"
    };
    _this.cardListing = _this.cardListing.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: "cardListing",
    value: function cardListing() {
      var _this2 = this;

      return this.props.countries.map(function (item) {
        return _react2.default.createElement(
          "div",
          { className: "card", key: item.name },
          _react2.default.createElement(
            "div",
            { className: "card-image" },
            _react2.default.createElement("img", { src: item.flag, onClick: _this2.props.detailChecker, id: item.name })
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
              "h3",
              null,
              item.name
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "span",
                null,
                "Population:"
              ),
              " ",
              item.population
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "span",
                null,
                "Region:"
              ),
              " ",
              item.region
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "span",
                null,
                "Capital:"
              ),
              " ",
              item.capital
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.countries !== undefined) {
        return _react2.default.createElement(
          "div",
          { className: "card-container" },
          this.cardListing()
        );
      } else {
        return _react2.default.createElement(
          "div",
          null,
          "Loading"
        );
      }
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(241);

var _axios2 = _interopRequireDefault(_axios);

var _Card = __webpack_require__(259);

var _Card2 = _interopRequireDefault(_Card);

var _Details = __webpack_require__(261);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));

    _this.state = {
      name: "",
      details: false,
      detailCountry: {}
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.clicked = _this.clicked.bind(_this);
    _this.detailChecker = _this.detailChecker.bind(_this);
    return _this;
  }

  _createClass(Content, [{
    key: "componentDidMount",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios2.default.get("https://restcountries.eu/rest/v2/all");

              case 3:
                response = _context.sent;

                this.setState({
                  countries: response.data,
                  filteredData: response.data,
                  filter: "All"
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                console.error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "detailChecker",
    value: function detailChecker(event) {
      if (this.state.details !== true) {
        var newState = this.state.filteredData.filter(function (item) {
          if (event.target.id == item.name) {
            return item;
          }
        });
        this.setState({
          details: true,
          detailCountry: newState
        });
      } else {
        this.setState({
          details: false
        });
      }
    }
  }, {
    key: "clicked",
    value: function clicked(event) {
      var _this2 = this;

      this.setState({
        filter: event.target.id
      }, function () {
        _this2.filteredData();
      });
    }
  }, {
    key: "change",
    value: function change(event) {
      var _this3 = this;

      this.setState({
        name: event.target.value
      }, function () {
        _this3.filteredData();
      });
    }
  }, {
    key: "filteredData",
    value: function filteredData() {
      var _this4 = this;

      var newData = this.state.countries;
      // console.log(newData);
      if (this.state.filter !== "All") {
        var ff = this.state.filter;
        newData = newData.filter(function (item) {
          if (ff == item.region) {
            return true;
          }
        });
      }

      if (this.state.name !== "") {
        newData = newData.filter(function (item) {
          var name = item.name.toLowerCase();
          var checker = name.match(_this4.state.name);
          if (checker !== null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      }, function () {
        // console.log(this.state.countries);

      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.details !== true) {
        return _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "div",
            { className: "filters" },
            _react2.default.createElement("input", {
              type: "text",
              className: "search",
              placeholder: "Search for a country....",
              onChange: this.change
            }),
            _react2.default.createElement(
              "div",
              { className: "dropdown" },
              _react2.default.createElement(
                "div",
                { className: "dropbtn" },
                _react2.default.createElement(
                  "div",
                  null,
                  "Filter By Region"
                ),
                " ",
                _react2.default.createElement("i", { className: "fas fa-chevron-down" })
              ),
              _react2.default.createElement(
                "div",
                { className: "dropdown-content" },
                _react2.default.createElement(
                  "div",
                  { className: "fit", id: "All", onClick: this.clicked },
                  "All"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "fit", id: "Africa", onClick: this.clicked },
                  "Africa"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "fit", id: "Americas", onClick: this.clicked },
                  "America"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "fit", id: "Asia", onClick: this.clicked },
                  "Asia"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "fit", id: "Europe", onClick: this.clicked },
                  "Europe"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "fit", id: "Oceania", onClick: this.clicked },
                  "Oceania"
                )
              )
            )
          ),
          _react2.default.createElement(_Card2.default, {
            countries: this.state.filteredData,
            detailChecker: this.detailChecker
          })
        );
      } else {
        return _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(_Details2.default, { detailChecker: this.detailChecker, detailCountry: this.state.detailCountry })
        );
      }
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.state = {
      name: "Joe",
      temp: {}
    };
    _this.detailRender = _this.detailRender.bind(_this);
    _this.countryGenerator = _this.countryGenerator.bind(_this);
    return _this;
  }

  _createClass(Details, [{
    key: "countryGenerator",
    value: function countryGenerator(array) {
      return array.length;
    }
  }, {
    key: "detailRender",
    value: function detailRender() {
      var a = this.props.detailCountry[0];
      // console.log(a);
      return _react2.default.createElement(
        "div",
        { className: "details" },
        _react2.default.createElement(
          "div",
          { className: "flag-img" },
          _react2.default.createElement("img", { src: a.flag })
        ),
        _react2.default.createElement(
          "div",
          { className: "more-details" },
          _react2.default.createElement(
            "h1",
            null,
            a.name
          ),
          _react2.default.createElement(
            "div",
            { className: "contain-more" },
            _react2.default.createElement(
              "div",
              { className: "even-more" },
              _react2.default.createElement(
                "h5",
                null,
                "Native Name: "
              ),
              " ",
              a.nativeName,
              " ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "h5",
                null,
                "Population: "
              ),
              " ",
              a.population,
              " ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "h5",
                null,
                "Region: "
              ),
              " ",
              a.region,
              " ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "h5",
                null,
                "Sub Region: "
              ),
              " ",
              a.subregion,
              " ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "h5",
                null,
                "Capital: "
              ),
              " ",
              a.capital
            ),
            _react2.default.createElement(
              "div",
              { className: "even-more2" },
              _react2.default.createElement(
                "h5",
                null,
                "Top Level Domain: "
              ),
              " ",
              a.topLevelDomain[0],
              " ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "h5",
                null,
                "Currencies: "
              ),
              " ",
              a.currencies[0].code,
              " ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "h5",
                null,
                "Languages: "
              ),
              " ",
              a.languages.length
            )
          ),
          _react2.default.createElement(
            "h4",
            { id: "border-countries" },
            "Border Countries: "
          )
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "details" },
        _react2.default.createElement(
          "div",
          { className: "back-btn", onClick: this.props.detailChecker },
          _react2.default.createElement("i", { className: "fas fa-long-arrow-alt-left" }),
          "Back"
        ),
        this.detailRender()
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          "div",
          { className: "title" },
          _react2.default.createElement(
            "h1",
            null,
            "Where in the world?"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "", id: "dark", onClick: this.props.darkMode },
          _react2.default.createElement("i", { className: "far fa-moon" }),
          "Dark mode"
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

exports.default = Navbar;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(102);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(237);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ })

},[263]);