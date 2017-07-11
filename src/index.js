import hypernova from 'hypernova';

const renderString = renderStringByProps => hypernova({
  server() {
    return props => renderStringByProps(props);
  },
});

export default renderString.renderString = renderString.default = renderString;
