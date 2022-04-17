import React from 'react';
import './App.css';
import './Header.css';
import './Resume.css';
import './About.css';
import './Contact.css';
import './bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume';
import Contact from "./components/Contact";
import Blog from "./components/Blog";
function App() {
  return (
    <div className="App">
      <Router>
          <Header className='col-sm-12 col-md-12'/>
          
          <Routes>
            
            <Route path='/' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            
          </Routes>
          
      </Router>
          
      
      
        
        
        
        
        
      
      
    </div>
  );
}

export default App;
