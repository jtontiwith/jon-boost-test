import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  
import { appReducer } from './Reducers';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancer(applyMiddleware(thunk)));


//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();