import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/store.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './reducers';

const store = createStore(combineReducers);

console.log(store.getState());


createRoot(document.getElementById('root')).render(
  /*<AuthContextProvider>
    <App/>
  </AuthContextProvider> */
  <Provider store={store}>
    <App/>
  </Provider>
    ,
)
