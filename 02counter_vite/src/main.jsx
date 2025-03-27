import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App5 from './useReducer.jsx'
import ContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
     
            <App5 />

     </>
  </StrictMode>,
)
