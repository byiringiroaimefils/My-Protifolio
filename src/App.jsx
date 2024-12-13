import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './assets/logoipsum-245.png';
import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Project from './Components/Project';
import Achievement from './Components/Achivement';
import Contact from './Components/Contact';

import { Analytics } from '@vercel/analytics/react';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [openLink, setOpenLink] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <BrowserRouter>
        {/* Header Section */}
        <header className="Header translate-y-96-96 sticky top-0 z-50">
          <div className="flex justify-between items-center px-8">
            {/* Logo Section */}
            <div className="logo flex items-center">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="Logo" className={`${openLink?'h-8 w-8 mr-2 translate-y-[-329%]':'h-8 w-8 mr-2'} `} />
                <h4 className="hidden md:block text-lg font-bold translate-y-0.5">BYIRINGIRO.</h4>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className={`${openLink ? 'block  translate-y-[-20%] translate-x-10' : 'hidden'} md:flex space-x-6 transition-all duration-300`}>
              <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <Link className="hover:text-sky-700 transition-colors duration-300 text-sm font-semibold" to="/">
                  Home
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-sm font-semibold" to="/AboutMe">
                  About me
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-sm font-semibold" to="/Project">
                  Project
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-sm font-semibold" to="/Achievement">
                  Achievement
                </Link>
              </ul>
            </nav>

            {/* Contact Button and Theme Switch */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/Contact">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  Reach Me Out
                </button>
              </Link>
            </div>

            <div className="md:hidden  ">
              <button onClick={() => setOpenLink(!openLink)} className="text-2xl">
                {openLink ? <FaTimes className='translate-y-[-440%] ' /> : <FaBars />}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Project" element={<Project />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Achievement" element={<Achievement />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;