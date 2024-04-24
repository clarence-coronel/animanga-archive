import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './pages/Home/Home'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
