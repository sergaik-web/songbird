import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './Components/App/App';
import ErrorBoundary from "./Components/ErrorBoundary";
import Store from "./Store";
import Context from "./Context";
import Service from "./Service";
import './index.css';

const service = new Service();

ReactDOM.render(
  <Provider store = {Store}>
    <ErrorBoundary>
      <Context.Provider value={service}>
        <App />
      </Context.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

