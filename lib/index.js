Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hypernova = require('hypernova');

var _hypernova2 = _interopRequireDefault(_hypernova);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _windowOrGlobal = require('window-or-global');

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_windowOrGlobal2['default'].ReactDOMServer = _server2['default'];

var renderString = function renderString(name, configureStore) {
  return (0, _hypernova2['default'])({
    server: function () {
      function server(props) {
        return configureStore.server(props);
      }

      return server;
    }(),
    client: function () {
      function client() {}

      return client;
    }()
  });
};

exports['default'] = renderString.renderString = renderString['default'] = renderString;