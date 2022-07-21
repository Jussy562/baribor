import {motion, AnimatePresence} from 'framer-motion';
import React from 'react';
import ServiceFile from '../serviceapi';
import Myservices from './Myservices';
import Projects from '../project';
import ProjectShow from './projectShow';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
// import { useState } from 'react';

function About() {
    
    
    return (
        <div className='about  col-xm-12 col-sm-12 col-md-12 main-wrapper'>
            <section className='about-me-section p-3 p-lg-5  about-plate'>
                <div className='container'>
                    <div className='about-profile-teaser row'>
                        <div className='col'>
                            <h2 className='name font-weight-bold mb-1'>
                                Baribor Paago
                            </h2>

                            <div className='tagline mb-3'>
                                Software Engineer
                            </div>
                            <div className='bio mb-4'>
                                <p className='m-0 p-0'>
                                    I'm a software engineer with frontend development 
                                    skills for scalable web applications. I write about software and tech
                                    on <a className='text-link' href='google.com'>
                                        my blog
                                    </a>. Check out my project <a className='text-link' href='Portfolio.js'>
                                        portfolio
                                    </a> and my <a className='text-link' href='/Resume.js'>
                                        online rsume
                                    </a>.<br/>
                                    I have previously
                                    served as an Data entry personnel and later as front-end intern developer
                                    at
                                    MeshView Limited. I adopt a SCRUM/AGILE approach to software development
                                    and I have been lucky to work with some of the latest technologies in web development, 
                                    I implemented a front-end
                                    development cycle at MeshView that helped speed up software development speed by 30%, 
                                    at Fairexx 
                                    I am automating most of the manual tasks and 
                                    increasing productivity by approx 20%, I 
                                    haveknowledge of multiple high-level programming 
                                    languages and can work withmodern software development tools and frameworks, I am a fast learner.
                                </p>
                            </div>

                            <div className='mb-4'>
                                <a className='btn btn-primary me-2 mb-3'
                                href='google.com'>
                                    < BsArrowRightCircleFill className='me-2'/>
                                    <span className='d-none d-md-inline'>View </span>
                                    Portfolio
                                </a>

                                <a className='btn btn-secondary me-2 mb-3'
                                href='google.com'>
                                    < HiDocumentText className='me-2' />
                                    <span className='d-none d-md-inline'>View </span>
                                    Resume
                                </a>
                            </div>

                        </div>
                        <div className='col-md-5 col-lg-5'>
                            <img className='about-profile-image img-fluid mb-3 mb-lg-0
                            me-md-0 ' src='./images/profile.jpg' alt='image0' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='overview-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title fon-weight-bold mb-3'>
                        
                        What I do
                    </h2>

                    <div className='section-intro mb-5'>
                        <p className='m-0 p-0'>
                            I build scalabe applications for clients all over the 
                            world. Below is a quick overview of my main technical 
                            skill sets. If you want to find out more about my experience, check out my 
                            <span> <a className='text-link' to='resume' href='/resume'>
                                online resume 
                            </a> </span>  
                            and <span><a className='text-link' to='/portfolio' href='/portfolio'>
                                project portfolio
                            </a></span>.
                        </p>
                    </div>
                    <div className='serviceDiv row mb-5'>
                        {/* {
                            ServiceFile.map((item) => (
                                <Myservices key={item.id} item={item}  /> 
                            ))
                        } */}
                        <AnimatePresence>
                            
                            {
                                ServiceFile.map((item) => (
                                    <motion.div
                                    key={item.id}
                                    initial={{x: '100vw', opacity: 0}}
                                    animate={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0.3, delay: 0.5}}}
                                    
                                    exit={{x:'100vw', opacity: 0}}
                                    >
                                        <Myservices key={item.id} item={item}  /> 
                                    </motion.div>
                                ))
                            }
                            
                            
                        </AnimatePresence>
                    </div>
                    <div className='row'>
                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                    <SiJavascript className='js-icon'/>
                                </div>
                                <h3 className='item-title'>
                                    
                                    JavaScript
                                </h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                    <FaReact className='reactIcon'/>
                                </div>
                                <h3 className='item-title'>React</h3>
                                <div className='item-desc'>
                                    <p>React is a JavaScript open-source library for building user interfaces. 
                                    It allows you to write JavaScript inside HTML</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                   <SiBootstrap className='bsIcon'/> 
                                </div>
                                <h3 className='item-title'>Bootstrap</h3>
                                <div className='item-desc'>
                                    <p>Bootstrap is a CSS framework. 
                                    This frameworks makes it easier to create responsive designs and save time to write custom CSS</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                    <SiCss3 className='cssIcon'/>
                                </div>
                                <h3 className='item-title'>CSS</h3>
                                <div className='item-desc'>
                                    <p>I used CSS to style my web pages/element. 
                                        It is important to known how to write CSS 
                                        even if you have frameworks to make develop easier.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                    <SiHtml5 className='htmlIcon'/>
                                </div>
                                <h3 className='item-title'>HTML</h3>
                                <div className='item-desc'>
                                    <p>HTML allows me to place element on the web page</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                    <FaNodeJs className='nodeIcon'/>
                                </div>
                                <h3 className='item-title'>Node.js</h3>
                                <div className='item-desc'>
                                    <p>Node.js is used to develop the backend of applications in JavaScript.
                                         Applications built with node,js are scalable and faster.</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>
                                    <CgFigma className='figmaIcon'/>
                                </div>
                                <h3 className='item-title'>Figma</h3>
                                <div className='item-desc'>
                                    <p>Figma is one of the tool used to design web Applications.</p>
                                </div>
                            </div>
                        </div>





                    </div>

                    <div className='text-center py-3'>
                        <a to='/Service' href='/Service' className='btn btn-primary'>
                            Services
                        </a>
                    </div>
                </div>
            </section>
            <div className='container'>
                <hr />
            </div>

            {/* <section className='testimonials-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title font-weight-bold mb-5'>
                        ::before
                        Testimonials
                    </h2>
                    <div className='testimonial-carousel-container'>
                        <div className='tns-outer' id='tns1-ow'>
                            <div className='tns-livergion tns-visually-hidden'
                            aria-live='polite' aria-atomic='true'>
                                slide
                                <span className='current'>11 to 12</span>
                                of 6
                            </div>
                            <div id='tns1-mw' className='tns-ovh'>
                                <div className='tns-inner' id='tns1-iw'>
                                    <div className='testimonial-carousel
                                    tiny-slider tns-slider tns-carousel tns-subpixel
                                    tns-calc tns-horizontal' id='tns1'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='featured-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title font-weight-bold mb-5'>
                        
                    What I have done
                    </h2>
                    <div className='row'>
                        {
                            Projects.slice(0, 4).map((item) => (
                                <ProjectShow key={item.id} item={item}  /> 
                            ))
                        }
                    </div>
                    
                    {/* <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    </div> */}
                    <div className='text-center py-3'>
                        <a to='/portfolio' href='/portfolio' className='btn btn-primary'>
                            View Portfolio
                        </a>

                    </div>
                </div>
            </section>
            {/* <div className='container'>
                <hr />
            </div> */}

            {/* <section className='blog-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title font-weight-bold mb-5'>
                        
                        Latest Blog Posts
                    </h2>

                    <div className='row'>
                        <div className='col-md-4 mb-5'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                src='./images/profile.jpg' alt='imageblogpost' />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <a className='theme-link'
                                        href='google.com'>
                                            Top 3 JavaScript Frameworks
                                        </a>
                                    </h5>
                                    <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et 
                                    magnis dis parturient...
                                    </p>
                                    <p className='mb-0'>
                                        <a className='text-link' href='google.com'>
                                            Read more
                                        </a>
                                    </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-5'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                src='./images/profile.jpg' alt='imageblog' />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <a className='theme-link'
                                        href='google.com'>
                                            Top 3 JavaScript Frameworks
                                        </a>
                                    </h5>
                                    <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et 
                                    magnis dis parturient...
                                    </p>
                                    <p className='mb-0'>
                                        <a className='text-link' href='google.com'>
                                            Read more
                                        </a>
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                src='./images/profile.jpg' alt='blogimage'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <a className='theme-link'
                                        href='google.com'>
                                            Top 3 JavaScript Frameworks
                                        </a>
                                    </h5>
                                    <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et 
                                    magnis dis parturient...
                                    </p>
                                    <p className='mb-0'>
                                        <a className='text-link' href='google.com'>
                                            Read more
                                        </a>
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-3'>
                        <a href='google.com' className='btn btn-primary'>
                            View Blog
                        </a>
                    </div>
                </div>
                
            </section> */}
            <section className='contact-section px-3 py-5 p-md-5'>
                <div className='container'>
                    <form id='contact-form' className='contact-form col-lg-8 mx-lg-auto' method='post' action>
                    <h3 className='text-center mb-3'>
                        Get In Touch
                    </h3>
                    <div className='row g-3'>
                        <div className='col-12 col-xlg-6'>
                        <label className='sr-only' for='cname'>Name</label>
                        <input type='text' className='form-control allContact-input' id='cname' name='name' placeholder='Name' minLength={2} required aria-required='true' />
                        </div>

                        <div className='col-12 col-xlg-6'>
                        <label className='sr-only' for='cemail'>Email</label>
                        <input type='email' className='form-control allContact-input' placeholder='Email' required aria-required='true'/>
                        </div>
                        <div className='col-12'>
                        <label className='sr-only' for='cmessage'>Your message</label>
                        <textarea className='form-control allContact-input' id='cmessage' name='message' placeholder='Enter your message...'
                        rows='10' required aria-required='true'></textarea>
                        </div>
                        <div className='form-group col-12'>
                        <button type='submit' className='btn btn-block btn-primary py-2'>Send Now</button>
                        </div>
                    </div>
                    </form>
                    
                </div>
            </section>
            
        </div>
    )
}

export default About
