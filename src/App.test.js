import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddJob from './components/AddJob'; // Adjust the path as needed
import Home from './components/Home'; // Your home component

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/add-job" className="text-lg font-semibold">Add Jobs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </Router>
  );
}

export default App;
