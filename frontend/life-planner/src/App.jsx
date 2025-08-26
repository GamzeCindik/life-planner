import { useState } from 'react'
import './App.css'
import SideMenu from './components/SideMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideMenu></SideMenu>
    </div>
  )
}

export default App
