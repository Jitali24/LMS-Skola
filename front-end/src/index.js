import React from 'react'
import ReactDOM from 'react-dom'
// import App from "./App";
import Layout from './Layout'

// redux store set-up
import store from './store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
