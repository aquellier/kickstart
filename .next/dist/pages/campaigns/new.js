'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

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
      minimumContribution: ''

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
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
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
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Create a campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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
          lineNumber: 35
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFDSixBOzJCQUN1QixBQUd2Qjs7QUFDQTtBQUxRLEE7QUFBQSxBQUNOLGFBS0YsQTsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtBQUNBO3NCQUZTLEFBRVQsQUFBTTtnQ0FGRzt1QkFHYyxjQUFBLEFBQUssSUFIbkIsQUFHYyxBQUFTOzttQkFBMUI7QUFIRyxvQ0FBQTtnQ0FBQTt5Q0FJSCxBQUFRLFFBQVIsQUFDSCxlQUFlLE1BQUEsQUFBSyxNQURqQixBQUN1QixxQkFEdkIsQUFFSDt3QkFDTyxTQVBELEFBSUgsQUFFRSxBQUNFLEFBQVM7QUFEWCxBQUNKLGlCQUhFOzttQkFKRzttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7U0FXWDs7QUFDQTs7NkJBQ1M7bUJBQ1A7OzZCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURuQyxBQUNSLEFBQWMsQUFBb0M7QUFMdEQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWhCSixBQUNBLEFBR0UsQUFZRSxBQUlMOzs7OztBQXpDdUIsQSxBQTRDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbnRvaW5lcXVlbGxpZXIvY29kZS9hcXVlbGxpZXIvc29saWRpdHkva2lja3N0YXJ0In0=