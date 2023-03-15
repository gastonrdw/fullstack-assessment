import {createStore, applyMiddleware} from 'redux';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { rootReducer } from './combineReducers';
import { RootState } from './combineReducers';
import thunk from 'redux-thunk';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default function generateStore(){
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  return store;
};
