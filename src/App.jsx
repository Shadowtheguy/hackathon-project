import { useState } from 'react'
import './App.css'
import data from "./data/data.json"
import opinion from "./data/opinion.json"
import Top50 from "./pages/Top50.jsx"
import Personal from "./pages/Personal.jsx"
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  //* Use State Setup
  const [currentPage, setCurrentPage] = useState('Home')

  //* Misc Variables
  let pageContent = <Home />

  //* On Events

  // Page Switching
  function switchPageHome () {
    setCurrentPage('Home')
  }

  function switchPageTop50 () {
    setCurrentPage('Top50')
  }

  function switchPagePersonal () {
    setCurrentPage('Personal')
  }

  //* Page Selection
  if (currentPage === 'Home') {
    pageContent = <Home />
  } else if (currentPage === 'Top50') {
    pageContent = <Top50 />
  } else if (currentPage === 'Personal') {
    pageContent = <Personal />
  }

  //* Actual Page
  return (
    <>
      <section className="container">
        <h1 className="text-center">Music Rankings!</h1>
      </section>
        <section className="container">
          <nav className="navbar navborders">
            <button className="mx-auto navbuttons" onClick={switchPageHome}>Home</button>
            <button className="mx-auto navbuttons" onClick={switchPageTop50}>Top 50</button>
            <button className="mx-auto navbuttons" onClick={switchPagePersonal}>Personal List</button>
          </nav>
      </section>
      {pageContent}
    </>
  )
}

export default App
