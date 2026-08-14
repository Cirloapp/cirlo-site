import React from 'react'
import ReactDOM from 'react-dom/client'
import CirloSite from './CirloSite.jsx'
import NewCirloLanding from './NewCirloLanding.jsx'

const legal = ['/privacy-policy','/terms-of-service','/eula','/accessibility','/download']
const App = legal.includes(window.location.pathname) ? CirloSite : NewCirloLanding

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>,
)