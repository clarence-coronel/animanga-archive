import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import Home from './pages/Home/Home'

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(localStorage.getItem("theme")) setTheme(localStorage.getItem("theme"))
  }, [])

  useEffect(() => {
    if(theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Update localStorage after theme change
  }

  return (
    <Router>
      <div>
        <Navigation theme={theme} themeSwitch={handleThemeSwitch} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
