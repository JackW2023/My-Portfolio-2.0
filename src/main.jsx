// In order to use JSX syntax, we need to import React from 'React'

// .jsx files are components that have JSX code
// .jsx code is react component code
// .jsx file are just regular JS files

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
