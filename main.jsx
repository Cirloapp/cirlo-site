import React from 'react'
import ReactDOM from 'react-dom/client'
import LegalPages from './LegalPages.jsx'
import CirloSite from './CirloSite.jsx'
import NewCirloLanding from './NewCirloLanding.jsx'

const legal = ['/privacy-policy','/terms-of-service','/eula','/accessibility','/subscription-terms','/delete-account','/support']
const App = window.location.pathname === '/download' ? CirloSite : legal.includes(window.location.pathname) ? LegalPages : NewCirloLanding

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>,
)