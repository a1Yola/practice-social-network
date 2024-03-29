import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'

import store from './redux/reduxStore'

import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
   <BrowserRouter>
      <Switch>
         <Provider store={store}>
            <App />
         </Provider>
      </Switch>
   </BrowserRouter>
)
