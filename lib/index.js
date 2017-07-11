Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hypernova = require('hypernova');

var _hypernova2 = _interopRequireDefault(_hypernova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var renderString = function renderString(renderStringByProps) {
  return (0, _hypernova2['default'])({
    server: function () {
      function server() {
        return function (props) {
          return renderStringByProps(props);
        };
      }

      return server;
    }()
  });
};

exports['default'] = renderString.renderString = renderString['default'] = renderString;