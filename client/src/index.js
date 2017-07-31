import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from './routes';
import configureStore from './stores/store';
import colors from 'styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    color: colors.primary,
  },
  drawer: {
    color: colors.fourth,
  },
  svgIcon: {
    color: colors.white,
  }
});
console.log(muiTheme);

const initialState = fromJS({});
const store = configureStore(initialState);

function renderApp(Component) {
  render(
    <AppContainer>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Component />
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderApp(Router);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    const NewApp = require('./index.js').default;
    renderApp(NewApp);
  });
}
