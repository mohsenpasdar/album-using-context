import { createStore, combineReducers } from 'redux';
import albumsReducer from '../reducers/albums'


export default () => {
  const store = createStore(
    combineReducers({
      albums: albumsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
