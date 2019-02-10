webpackHotUpdate(6,{

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1165);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(737);

var _factory = __webpack_require__(997);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(998);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      loading: false

      // Whenever we call a function on a contract
      // it is always going to be asynchronous
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Prevent from submitting the form when event occurs
                event.preventDefault();

                // Starting the spinner
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                // This will render the message to the user entering wrong input
                _this.setState({ errorMessage: _context.t0.message });

              case 13:

                // Stopping the spinner
                _this.setState({ loading: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',

    // No parentheses on the onSubmit function because we
    // do not want it to be executed right now

    // error property will appear only if the message is not ''
    // The !! transforms the string into its boolean equivalent
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Create a campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        labelPosition: 'right',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7MkJBQVEsQUFDZSxBQUNyQjtvQkFGTSxBQUVRLEFBQ2Q7ZUFBUyxBQUdYOztBQUNBO0FBUFEsQTtBQUFBLEFBQ04sYUFPRixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO0FBQ0E7c0JBQUEsQUFBTSxBQUVOOztBQUNBO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBTHRCLEFBS1QsQUFBYyxBQUErQjtnQ0FMcEM7Z0NBQUE7dUJBT2dCLGNBQUEsQUFBSyxJQVByQixBQU9nQixBQUFTOzttQkFBMUI7QUFQQyxvQ0FBQTtnQ0FBQTt5Q0FRRCxBQUFRLFFBQVIsQUFDSCxlQUFlLE1BQUEsQUFBSyxNQURqQixBQUN1QixxQkFEdkIsQUFFSDt3QkFDTyxTQVhILEFBUUQsQUFFRSxBQUNFLEFBQVM7QUFEWCxBQUNKLGlCQUhFOzttQkFSQztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFjUDs7QUFDQTtzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZnZCLEFBZVAsQUFBYyxBQUFvQjs7bUJBR3BDOztBQUNBO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBbkJQLEFBbUJULEFBQWMsQUFBVzs7bUJBbkJoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7U0FzQlg7O0FBQ0E7QUFFQTs7QUFDQTs7NkJBQ1M7bUJBQ1A7OzZCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURuQyxBQUNSLEFBQWMsQUFBb0M7QUFMdEQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQWJGLEFBYUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBbEJKLEFBQ0EsQUFHRSxBQWNFLEFBSUw7Ozs7O0FBM0R1QixBLEFBOEQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FudG9pbmVxdWVsbGllci9jb2RlL2FxdWVsbGllci9zb2xpZGl0eS9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/campaigns/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/campaigns/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mZmM4ODg3NDc5OGU5Y2Y1OTIxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz8xNGFkMGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1pbmltdW1Db250cmlidXRpb246ICcnLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfVxuXG4gIC8vIFdoZW5ldmVyIHdlIGNhbGwgYSBmdW5jdGlvbiBvbiBhIGNvbnRyYWN0XG4gIC8vIGl0IGlzIGFsd2F5cyBnb2luZyB0byBiZSBhc3luY2hyb25vdXNcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IGZyb20gc3VibWl0dGluZyB0aGUgZm9ybSB3aGVuIGV2ZW50IG9jY3Vyc1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBTdGFydGluZyB0aGUgc3Bpbm5lclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgICAuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxuICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBUaGlzIHdpbGwgcmVuZGVyIHRoZSBtZXNzYWdlIHRvIHRoZSB1c2VyIGVudGVyaW5nIHdyb25nIGlucHV0XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICAvLyBTdG9wcGluZyB0aGUgc3Bpbm5lclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICB9O1xuXG4gIC8vIE5vIHBhcmVudGhlc2VzIG9uIHRoZSBvblN1Ym1pdCBmdW5jdGlvbiBiZWNhdXNlIHdlXG4gIC8vIGRvIG5vdCB3YW50IGl0IHRvIGJlIGV4ZWN1dGVkIHJpZ2h0IG5vd1xuXG4gIC8vIGVycm9yIHByb3BlcnR5IHdpbGwgYXBwZWFyIG9ubHkgaWYgdGhlIG1lc3NhZ2UgaXMgbm90ICcnXG4gIC8vIFRoZSAhISB0cmFuc2Zvcm1zIHRoZSBzdHJpbmcgaW50byBpdHMgYm9vbGVhbiBlcXVpdmFsZW50XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgIDxoMz5DcmVhdGUgYSBjYW1wYWlnbjwvaDM+XG5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIndlaVwiXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWluaW11bUNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PkNyZWF0ZTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7QUFOQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFBQTtBQVFBO0FBR0E7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7O0FBQUE7QUFVQTtBQVZBO0FBQ0E7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==