import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger'

import { searchReducer, fetchReducer } from './components/redux/reducer';

const rootReducer = combineReducers({ searchReducer, fetchReducer })

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <React.StrictMode> 
     <Provider store={store}>
         <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

