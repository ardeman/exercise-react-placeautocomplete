import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import placesSaga from '../sagas/placesSaga';
import placesReducer from '../reducers/placesReducer';

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: placesReducer,
  middleware: [
    thunkMiddleware, 
    // sagaMiddleware
  ],
});

// sagaMiddleware.run(placesSaga);

export default store;
