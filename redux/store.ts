import { configureStore, combineReducers } from '@reduxjs/toolkit';
import feeReducer from './reducers/feeSlice';
import pageReducer from './reducers/pageSlice';
import matrixReducer from './reducers/matrixSlice';

const rootReducer = combineReducers({
  fee: feeReducer,
  page: pageReducer,
  matrix: matrixReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
