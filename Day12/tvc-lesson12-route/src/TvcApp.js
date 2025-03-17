import React from 'react'
import {Link, Route, Routes, BrowserRouter  as Router} from 'react-router-dom'
import TvcHome from './components/TvcHome'
import TvcAbout from './components/TvcAbout'
import TvcContact from './components/TvcContact'

export default function TvcApp() {
  return (
    <div className='container border my-3'>
        <h1>React Router Demo</h1>
        <hr />
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className='alert alert-danger'>
              <Routes>
                  <Route path="/" element={<TvcHome />} />
                  <Route path="/about" element={<TvcAbout />} />
                  <Route path="/contact" element={<TvcContact />} />
              </Routes>
            </div>
          </div>
        </Router>
    </div>
  )
}
