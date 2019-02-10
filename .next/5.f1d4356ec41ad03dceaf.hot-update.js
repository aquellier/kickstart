webpackHotUpdate(5,{

/***/ 736:
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

var _semanticUiReact = __webpack_require__(737);

var _factory = __webpack_require__(997);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1165);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/index.js?entry';


// Next wants to be able to get the initial data without
// rendering the component, hence this statis keyword

var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, 'View Campaign'),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Open campaigns'), _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create campaign',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRWpCO0FBQ0E7O0ksQUFDSTs7Ozs7Ozs7Ozs7c0NBTWMsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUFhLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxXQUFBLEVBRlIsQUFFUSxBQUNiO2lCQUhGLEFBQU8sQUFHRSxBQUVWO0FBTFEsQUFDTDtBQUZKLEFBQWMsQUFRZCxPQVJjOzsyQ0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUVDLEFBQ1I7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLG1DQUFBLEFBQUM7aUJBQUQsQUFDVyxBQUNUO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBSEYsQUFHRSxBQU1DO0FBTkQ7QUFDRSxlQU5WLEFBQ0ksQUFDRSxBQVNHLEFBQUssQUFJZjs7Ozs7Ozs7Ozs7O3VCQS9CeUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTtpREFDQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhpQixBLEFBb0M1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW50b2luZXF1ZWxsaWVyL2NvZGUvYXF1ZWxsaWVyL3NvbGlkaXR5L2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/antoinequellier/code/aquellier/solidity/kickstart/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mMWQ0MzU2ZWM0MWFkMDNkY2VhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzVkMzEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuICAvLyBOZXh0IHdhbnRzIHRvIGJlIGFibGUgdG8gZ2V0IHRoZSBpbml0aWFsIGRhdGEgd2l0aG91dFxuICAvLyByZW5kZXJpbmcgdGhlIGNvbXBvbmVudCwgaGVuY2UgdGhpcyBzdGF0aXMga2V5d29yZFxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgIHJldHVybiB7IGNhbXBhaWducyB9O1xuICB9XG5cbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBDYW1wYWlnbjwvYT4sXG4gICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPlxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiLz5cbiAgICAgICAgICAgIDxoMz5PcGVuIGNhbXBhaWduczwvaDM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9IFwicmlnaHRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIGNhbXBhaWduXCJcbiAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQU9BO0FBQUE7O0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBOzs7Ozs7Ozs7Ozs7QUF0QkE7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=