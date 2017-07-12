import hypernova from 'hypernova';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import root from 'window-or-global'

root.ReactDOMServer = ReactDOMServer;

const renderString = (name, configureStore) => {
  return hypernova({
    server: () => props => configureStore.server(props),
    client: () => {},
  });
}

export default renderString.renderString = renderString.default = renderString;
