import {motion, AnimatePresence} from 'framer-motion';
import React from 'react';
import ServiceFile from '../serviceapi';
import Myservices from './Myservices';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';

function Service() {
    //Add some animation to the service card text. Do it to all cards in the application 
  return (
    <div className='service col-xm-12 col-sm-12 col-md-12 main-wrapper'>
        <section className='service-header theme-bg-light p-3 p-lg-5'>
            <div className='container text-center single-col-max-width'>
                <h2 className='heading'>Services</h2>
                <div className='intro text-start'>
                  <p className='m-0 p-0'>
                             I build scalabe applications for clients all over the 
                            world. Below is a quick overview of my services and main technical 
                            skill sets. If you want to find out more about my experience, check out my 
                            <span> <a className='text-link' to='resume' href='/resume'>
                                online resume 
                            </a> </span>  
                            and <span><a className='text-link' to='/portfolio' href='/portfolio'>
                                project portfolio
                            </a></span>.
                  </p>
                </div>
            </div>
        </section>
        <section className='service-list p-3 p-lg-5'>
          <div className='serviceDiv row mb-5 p-0'>
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
                        initial={{x: '100vw', opacity: 0.5}}
                        animate={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0.3, delay: 0.5, duration:1, ease: 'easeOut'}}}
                        
                        exit={{x:'100vw', opacity: 0, 
                            transition:{duration: 1, ease: 'easeIn'}}}
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
                      <h3 className='item-title'>JavaScript</h3>
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
        </section>
    </div>
  )
}

export default Service