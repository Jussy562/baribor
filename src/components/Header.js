import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BsLaptop } from 'react-icons/bs';
import { MdHomeRepairService } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { GrContactInfo } from 'react-icons/gr';
import { FaBlog } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
// import { FaAdjust } from 'react-icons/fa';

function Header() {
    return (
       <header className='Header'>
           
            <div className="force-overflow text-center ">
                
                <Navbar bg="dark" expand="lg" className='flex-column mynav'>
                    <div className='navview'>
                        <h1 className='blog-name pt-lg-4 mb-0 mx-auto'>BARIBOR PAAGO</h1>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    
                    
                    <Navbar.Collapse id="basic-navbar-nav" className='flex-column'>
                    <div className='profile-section pt-3 pt-lg-0'>
                            <img className='profile-image mb-3 mt-4 rounded-circle mx-auto' src='/images/profile-pic.png' alt='profile' />
                            <div className='bio mb-3'>
                                Hi, my name is Baribor Paago and I'm a software engineer.
                                Welcome to my personal website!
                            </div>
                            <ul className='social-list list-inline py-2 mx-auto'>
                                <li className='list-inline-item'>
                                    <a href='www.twitter.com/Justicepago'>
                                        <AiFillTwitterSquare className='myhandles' />
                                    </a>
                                </li>

                                <li className='list-inline-item'>
                                    <a href='www.linkedin/in/bariborpaago' target={'_blank'}>
                                        <AiFillLinkedin className='myhandles' />
                                    </a>
                                </li>

                                <li className='list-inline-item'>
                                    <a href='www.github.com/Jussy562' target={'_blank'}>
                                        <FaGithubSquare className='myhandles' />
                                    </a>
                                </li>

                                <li className='list-inline-item'>
                                    <a href='www.twitter.com/Justicepago'>
                                        <FaFacebookSquare className='myhandles' />
                                    </a>
                                </li>

                                <li className='list-inline-item'>
                                    <a href='www.twitter.com/Justicepago'>
                                        <FaInstagramSquare className='myhandles' />
                                    </a>
                                </li>
                            </ul>

                            <hr />

                        </div>
                    <Nav className="flex-column text-start">
                        <Nav.Link to='/' href="/" className=" menu active">
                            <FaUserAlt className='me-2'/>
                            About Me
                        </Nav.Link>
                        <Nav.Link to='/portfolio' href="/portfolio" className='menu'>
                            <BsLaptop className='me-2' />
                            Portfolio
                        </Nav.Link>
                        <Nav.Link to='/resume' href="/resume" className='menu'>
                            <HiDocumentText className='me-2' />
                            Resume
                        </Nav.Link>
                        <Nav.Link to='/services' href="/service" className='menu'>
                            <MdHomeRepairService className='me-2' />
                            Services
                        </Nav.Link>
                        <Nav.Link to='/contact' href="/contact" className='menu'>
                            <GrContactInfo className='me-2'/>
                            Contact
                        </Nav.Link>
                        <Nav.Link to='/blog' href="/blog" className='menu'>
                            <FaBlog className='me-2'/>
                            Blog
                        </Nav.Link>
                    
                    </Nav>

                    <div className='my-2'>
                            <a className='btn btn-primary'
                            href='google.com' target='_blank'>
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
