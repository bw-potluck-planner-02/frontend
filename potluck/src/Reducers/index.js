// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';

//Well eventually need new login or uerReducer and eventsReducer
// import { eventsReducer } from './eventsReducer';
// import { userReducer } from './userReducer';
import { Reducer } from './Reducer'

export const rootReducer = combineReducers({
//   eventsReducer,
//   userReducer,
  Reducer
});
