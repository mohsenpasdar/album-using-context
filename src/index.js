import React, {useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AlbumsContext from './context/albums-context'
import albumsReducer from './reducers/album'


const Jsx = () => {
  const [contextState, dispatch] = useReducer(albumsReducer, {albumId: 15})

  return (
    <AlbumsContext.Provider value={{contextState, dispatch}}>
      <AppRouter />
    </AlbumsContext.Provider>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Jsx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
