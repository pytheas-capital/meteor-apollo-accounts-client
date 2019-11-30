'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    mutation loginWithLinkedIn($code: String! $redirectUri: String!) {\n      loginWithLinkedIn(code: $code redirectUri: $redirectUri) {\n        id\n        token\n        tokenExpires\n      }\n    }\n    '], ['\n    mutation loginWithLinkedIn($code: String! $redirectUri: String!) {\n      loginWithLinkedIn(code: $code redirectUri: $redirectUri) {\n        id\n        token\n        tokenExpires\n      }\n    }\n    ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the accessToken
 * It's recommended to use https://github.com/keppelen/react-facebook-login
 */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, apollo) {
    var code = _ref2.code,
        redirectUri = _ref2.redirectUri;

    var result, _result$data$loginWit, id, token, tokenExpires;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return apollo.mutate({
              mutation: (0, _graphqlTag2.default)(_templateObject),
              variables: { code: code, redirectUri: redirectUri }
            });

          case 2:
            result = _context.sent;
            _result$data$loginWit = result.data.loginWithLinkedIn, id = _result$data$loginWit.id, token = _result$data$loginWit.token, tokenExpires = _result$data$loginWit.tokenExpires;
            _context.next = 6;
            return (0, _store.storeLoginToken)(id, token, new Date(tokenExpires));

          case 6:
            return _context.abrupt('return', id);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();