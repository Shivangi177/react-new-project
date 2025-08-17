import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement="chai or code";

const reactElement=React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  "Click me",
  anotherElement
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    reactElement
    <App />
  </StrictMode>,
)
