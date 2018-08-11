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

var _semanticUiReact = require('semantic-ui-react');

var _campaigns = require('../../../ethereum/campaigns');

var _campaigns2 = _interopRequireDefault(_campaigns);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/admin/Desktop/CampaignContract/pages/campaigns/requests/newRequest.js?entry';


var newRequest = function (_Component) {
  (0, _inherits3.default)(newRequest, _Component);

  function newRequest() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, newRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = newRequest.__proto__ || (0, _getPrototypeOf2.default)(newRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: '',
      value: '',
      recipient: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaigns2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaigns.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                  from: accounts[0]
                });

              case 9:
                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](3);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(newRequest, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Create New Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Request Description'), _react2.default.createElement(_semanticUiReact.Input, { icon: 'file text', iconPosition: 'left', value: this.state.description, onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, { icon: 'money', iconPosition: 'left', value: this.state.value, onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Recepient of Funds'), _react2.default.createElement(_semanticUiReact.Input, { icon: 'users', iconPosition: 'left', value: this.state.recipient, onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: 'left', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Create Request', _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return newRequest;
}(_react.Component);

exports.default = newRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXdSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkljb24iLCJDYW1wYWlnbiIsIkxheW91dCIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwibmV3UmVxdWVzdCIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhbXBhaWducyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBQ3ZDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0lBRXZCLEE7Ozs7Ozs7Ozs7Ozs7OztvTkFDSixBO21CQUFRLEFBQ08sQUFDYjthQUZNLEFBRUMsQUFDUDtpQkFITSxBLEFBR0s7QUFITCxBQUNOLGFBV0YsQTsyRkFBVyxpQkFBQSxBQUFNLE9BQU47a0VBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFQTs7QUFIRywyQkFHUSx5QkFBUyxNQUFBLEFBQUssTUFIdEIsQUFHUSxBQUFvQjs4QkFDSyxNQUpqQyxBQUlzQyxPQUp0QyxBQUlELDBCQUpDLEFBSUQsYUFKQyxBQUlZLG9CQUpaLEFBSVksT0FKWixBQUltQix3QkFKbkIsQUFJbUI7Z0NBSm5CO2dDQUFBO3VCQU9nQixjQUFBLEFBQUssSUFQckIsQUFPZ0IsQUFBUzs7bUJBQTFCO0FBUEMsb0NBQUE7Z0NBQUE7aUNBUUQsQUFBVSxRQUFWLEFBQWtCLGNBQWxCLEFBQWdDLGFBQWEsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BQTlELEFBQTZDLEFBQXVCLFVBQXBFLEFBQThFLFdBQTlFLEFBQXlGO3dCQUN2RixTQVRELEFBUUQsQUFBOEYsQUFDNUYsQUFBUztBQURtRixBQUNsRyxpQkFESTs7bUJBUkM7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBQUE7O21CQUFBO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBY0Y7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUMsd0NBQU0sTUFBUCxBQUFZLGFBQVksY0FBeEIsQUFBcUMsUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUF4RCxBQUE4RCxhQUFhLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWMsQUFBNEI7QUFBeEk7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTsyQkFFRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxTQUFRLGNBQXBCLEFBQWlDLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBcEQsQUFBMEQsT0FBTyxVQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBQXhIO29CQUFBO3NCQVBKLEFBS0UsQUFFRSxBQUVGO0FBRkU7MkJBRUQsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsQUFBQyx3Q0FBTSxNQUFQLEFBQVksU0FBUSxjQUFwQixBQUFpQyxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQXBELEFBQTBELFdBQVcsVUFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBYyxBQUEwQjtBQUFoSTtvQkFBQTtzQkFYSixBQVNFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLEFBQUMseUNBQU8sTUFBUixNQUFhLGVBQWIsQUFBMkIsUUFBTyxTQUFsQztvQkFBQTtzQkFBQTtBQUFBO1NBQ0Esa0NBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBakJOLEFBQ0UsQUFFRSxBQWFFLEFBQ0EsQUFLUDtBQUxPOzs7Ozs7NkdBdENxQixBOzs7OzttQkFDbkI7QSwwQkFBWSxNQUFNLEEsTUFBbEIsQTtrREFFRCxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZjLEEsQUFxRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ld1JlcXVlc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvQ2FtcGFpZ25Db250cmFjdCJ9