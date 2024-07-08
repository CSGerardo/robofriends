import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import "./index.css";
import App from "./Containers/App";
import reportWebVitals from "./reportWebVitals";
import { searchRobots, requestRobots } from "./reducers.js";
import "tachyons";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const logger=createLogger();

const rootReducer=combineReducers({ searchRobots, requestRobots });
const store=createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/> 
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
