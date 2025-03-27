import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider }  from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(

  <Provider store={store} >
  <UserContext>
     {/*Keep it in mind Here  App.jsx is children   of UserContext Because it is wrapped inside the UserContext in main.jsx*/}
    <App />
    </UserContext>
    </Provider>
)
