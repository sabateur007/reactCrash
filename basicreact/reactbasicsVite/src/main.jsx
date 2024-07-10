import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div><h2>my app element hai ye rajau </h2></div>
  )
}

const reactElement = {
  type: 'a',
  props: {
      href:'https://www.youtube.com',
      target:'_blank',
  },
  children: "click me to visit youtube"
}

const anotherelement =(
  <a href="https://www.youtube.com" target='_blank'>visitt youthuub</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
anotherelement
)
