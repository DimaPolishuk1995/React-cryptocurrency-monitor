import { MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

injectTapEventPlugin();
const store = configureStore();

const app = (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
registerServiceWorker();
