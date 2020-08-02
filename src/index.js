import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Store from "./Store";
import {Provider} from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import Context from "./Context";
import Service from "./Service";

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

