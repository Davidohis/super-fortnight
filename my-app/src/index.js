import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { searchReducer } from './components/redux/reducer';

const store = createStore(searchReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
         <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

