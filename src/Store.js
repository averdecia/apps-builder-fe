import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import Reducers from './Reducers'; //Import the reducer
 
// Connect our store to the reducers
export default createStore(Reducers, applyMiddleware(thunk));