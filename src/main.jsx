import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './Store/context'
import { Provider } from 'react-redux'
import combineReducers from './reducers';
import { createStore } from 'redux'
const store = createStore(combineReducers);
console.log(store.getState());


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
