import { useState } from 'react'
import './App.css'
import data from "./data/data.json"
import Top50 from "./pages/Top50.jsx"
import Personal from "./pages/Personal.jsx"
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 const [popularSong, setpopularSong] = useState(0)

  return (
    <>
    <Top50></Top50>
    </>
  )
}

export default App
