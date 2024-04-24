import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Define your components for different pages
// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

// const Navigation = () => (
//   <nav className="w-full h-12 bg-white shadow-md flex justify-center items-center">
//     <ul className="flex">
//       <li className="mr-6">
//         <Link to="/">Home</Link>
//       </li>
//       <li className="mr-6">
//         <Link to="/about">About</Link>
//       </li>
//       <li className="mr-6">
//         <Link to="/contact">Contact</Link>
//       </li>
//     </ul>
//   </nav>
// );

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  </Router>
);

export default App;
