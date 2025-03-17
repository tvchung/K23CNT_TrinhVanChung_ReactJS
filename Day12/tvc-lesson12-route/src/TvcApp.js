import React, { Suspense, lazy } from 'react';
import {Link, Route, Routes, BrowserRouter  as Router, Navigate} from 'react-router-dom'
import TvcHome from './components/TvcHome'
import TvcAbout from './components/TvcAbout'
import TvcContact from './components/TvcContact'
const TvcDashboard = lazy(() => import('./components/TvcDashboard'));
const isAuthenticated = false;  // Giả sử người dùng chưa đăng nhập
const ProtectedRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/about" />;
};
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
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
            <Suspense fallback={<div>Loading...</div>}> 
            <div className='alert alert-danger'>
              <Routes>
                  <Route path="/" element={<TvcHome />} />
                  <Route path="/about" element={<TvcAbout />} />
                  <Route path="/contact" element={<TvcContact />} />
                  <Route path="/dashboard" element={<ProtectedRoute element={<TvcDashboard />} />} />

              </Routes>
            </div>
            </Suspense>
          </div>
        </Router>
    </div>
  )
}
