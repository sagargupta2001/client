import React from 'react';
import ReactDOM from 'react-dom';
import './App/layout/styles.css';
import App from './App/layout/App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import {Provider} from "react-redux";
import { store } from './App/store/ConfigureStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
          <Provider store={store}>
              <App />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
