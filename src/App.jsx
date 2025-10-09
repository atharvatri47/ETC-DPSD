import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Team from './pages/Team';
import Legacy from './pages/Legacy';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/legacy" element={<Layout><Legacy /></Layout>} />
        <Route path="/showcase" element={<Layout><Showcase /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;