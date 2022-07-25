import {motion} from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,} from 'react-bootstrap';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaHamburger } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BsLaptop } from 'react-icons/bs';
import { MdHomeRepairService } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { GrContactInfo } from 'react-icons/gr';
//The future plan is to incoorperate a blog in my portfolio. for now, I have to coment the blog page
// import { FaBlog } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
// import { FaAdjust } from 'react-icons/fa';

function Header() {
    const handleChange = (e) => {
        e.preventDevault();
    }
    return (
       <header className='Header'>
           
            <div className="force-overflow text-center ">
                
                <Navbar bg="dark" expand="lg" className='flex-column mynav'>
                    <div className='navview'>
                        <h1 className='blog-name pt-lg-4 mb-0 mx-auto'>BARIBOR PAAGO</h1>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span>
                                <FaHamburger className='menuIcon' />
                            </span>
                        </Navbar.Toggle>
                    </div>
                    
                    
                    <Navbar.Collapse id="basic-navbar-nav" className='flex-column'>
                        <div className='profile-section pt-3 pt-lg-0'>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                            >
                                <img className='profile-image mb-3 mt-4 rounded-circle mx-auto' src='/images/profile-2.png' alt='profile' />
                            </motion.div>
                            <div className='bio mb-3'>
                                Hi, my name is Baribor Paago and I'm a software engineer.
                                Welcome to my personal website!
                            </div>
                            {/* exrternal link is not working */}
                            <ul className='social-list list-inline py-2 mx-auto'>
                                <li className='list-inline-item'>
                                    <Link to='/twitter' href='https://www.twitter.com/Justicepago' target="_blank" rel='noopener noreferrer'>
                                        <AiFillTwitterSquare className='myhandles' />
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to='/linkd' href='https://www.linkedin.com/in/bariborpaago' target={'_blank'} rel='noopener noreferrer'>
                                        <AiFillLinkedin className='myhandles' />
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to='/git' href='https://www.github.com/Jussy562'  target={'_blank'}>
                                        <FaGithubSquare className='myhandles' />
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to='/facebook' href='https://www.facebook.com/justice.pago'  target="_blank" rel='noopener noreferrer'>
                                        <FaFacebookSquare className='myhandles' />
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to='instagram' href='https://www.instagram.com/justicepaago' target="_blank" rel='noopener noreferrer'>
                                        <FaInstagramSquare className='myhandles' />
                                    </Link>
                                </li>
                            </ul>

                            <hr />

                        </div>
                    <Nav className="flex-column text-start">
                        <Nav.Link to='/' href="/" className=" menu active" onClick={handleChange}>
                            <FaUserAlt className='me-2'/>
                            About Me
                        </Nav.Link>
                        <Nav.Link to='/portfolio' href="/portfolio" className='menu' onClick={handleChange}>
                            <BsLaptop className='me-2' />
                            Portfolio
                        </Nav.Link>
                        <Nav.Link to='/resume' href="/resume" className='menu' onClick={handleChange}>
                            <HiDocumentText className='me-2' />
                            Resume
                        </Nav.Link>
                        <Nav.Link to='/services' href="/service" className='menu'onClick={handleChange}>
                            <MdHomeRepairService className='me-2' />
                            Services
                        </Nav.Link>
                        <Nav.Link to='/contact' href="/contact" className='menu' onClick={handleChange}>
                            <GrContactInfo className='me-2'/>
                            Contact
                        </Nav.Link>
                        {/* <Nav.Link to='/blog' href="/blog" className='menu'>
                            <FaBlog className='me-2'/>
                            Blog
                        </Nav.Link> */}
                    
                    </Nav>

                    <div className='my-2'>
                            <a className='btn btn-primary' to='/contact'
                            href='/contact'>
                                <FaPaperPlane className='me-2' />
                                Hire Me
                            </a>
                    </div>
                    </Navbar.Collapse>
                </Navbar>
            
            </div>
            

            
            
       </header>
        
    )
}

export default Header;
