'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./construct/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instace = _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x314EeF11c0ee8D51F8a62da78543eFD58FAC58c0');

exports.default = instance;

// If we need to access our deployed factory instance from
// somewhere else in the app we can import this file instead
// of going through the whole process
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBLElBQU0sVUFBVSxjQUFLLEFBQUwsSUFBUyxBQUFULFNBQ2QsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBRGMsWUFFZCxBQUZjLEFBQWhCLEFBS0E7O2tCQUFlLEFBQWY7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FudG9pbmVxdWVsbGllci9jb2RlL2FxdWVsbGllci9zb2xpZGl0eS9raWNrc3RhcnQifQ==