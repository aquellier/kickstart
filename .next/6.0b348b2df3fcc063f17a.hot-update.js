webpackHotUpdate(6,{

/***/ 1189:
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

var _Layout = __webpack_require__(1171);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1190);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(482);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
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
      }, 'Show page'), this.renderCards());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7a0NBZVU7bUJBT1IsS0FQUSxBQU9IO1VBUEcsQUFFVixpQkFGVSxBQUVWO1VBRlUsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJViw2QkFKVSxBQUlWO1VBSlUsQUFLVix1QkFMVSxBQUtWO1VBTFUsQUFNVix3QkFOVSxBQU1WLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0FOYixBQUFjLEFBQ1osQUFLUyxBQUFnQixBQUkzQjtBQVRFLEFBQ0UsT0FGVTs7MkNBVVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNDLG1CQUhMLEFBQ0UsQUFFRyxBQUFLLEFBR1g7Ozs7OzJHQTNDNEIsQTs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7dUJBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBOzt1Q0FHaUIsUUFEaEIsQUFDZ0IsQUFBUSxBQUM3QjsyQkFBUyxRQUZKLEFBRUksQUFBUSxBQUNqQjtpQ0FBZSxRQUhWLEFBR1UsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFKWCxBQUlXLEFBQVEsQUFDeEI7MkJBQVMsUUFMSixBQUtJLEFBQVEsQTtBQUxaLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQcUIsQSxBQStDM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW50b2luZXF1ZWxsaWVyL2NvZGUvYXF1ZWxsaWVyL3NvbGlkaXR5L2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/campaigns/show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wYjM0OGIyZGYzZmNjMDYzZjE3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MzcxMTgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG5cbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxuICAgIH07XG4gIH1cblxuICByZW5kZXJDYXJkcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBiYWxhbmNlLFxuICAgICAgbWFuYWdlcixcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICByZXF1ZXN0c0NvdW50LFxuICAgICAgYXBwcm92ZXJzQ291bnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIG1hbmFnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5JyxcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+U2hvdyBwYWdlPC9oMz5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQXRDQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=