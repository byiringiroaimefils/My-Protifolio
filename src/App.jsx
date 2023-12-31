import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'
import Contct from './Components/Contact'

import { FaSun, FaBars } from "react-icons/fa";


function App() {
  const [openLink, SetopenLink] = useState(false);
  const [bgcolor, Setbgcolor] = useState("Light");

  
  useEffect(() => {
    if (bgcolor === "Dark") {
      document.body.classList.add("Dark")
    }
    else {
      document.body.classList.remove("Dark")
    }
  }, [bgcolor]);

  const handlethemeswitch = () => {
    Setbgcolor(bgcolor === "Dark" ? "Light" : "Dark")

  }
  return (
    <div>
      <BrowserRouter>
        <header className="Header sticky top-0" >
          <div className="flex justify-between ml-8 ">
            <div className="logo ml-6 translate-y-4  translate-x-2">
              <h4>aime9088</h4>
            </div>

            <nav className="ml-9  translate-x-2 transition-all duration-300">
              <ul className={openLink ? "open" : ""} >
                <Link className=" hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="/">
                  HOME
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold" to="AboutMe">
                  ABOUTME
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="Project">
                  PROJECT
                </Link>

              </ul>
            </nav>
            <div className="None  flex  mr-20">
              <Link to="Contct">
                <button className='button bg-sky-700 px-0.5 text-sm  rounded-sm font-extrabold dark:text-white dark:hover:text-black'>Contact me</button>
              </Link>
              <div className='translate-y-1 ml-5'>
                <FaSun className='cursor-pointer hover:text-sky-700' onClick={handlethemeswitch}  />
              </div>
            </div>
            <  FaBars className="FaBars lg:hidden  mt-3 ml-6 mr-7 white cursor-pointer" onClick={() => {
              SetopenLink(!openLink);
            }} />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Project" element={<Project />} />
            <Route path="Contct" element={<Contct />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
