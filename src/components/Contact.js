import React from 'react';
import { AiFillTwitterSquare }  from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import  { FaGithubSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <div className='contact  col-xm-12 col-sm-12 col-md-12 main-wrapper'>
        <section className='about-me-section theme-bg-light py-5'>
            <div className='container text-center single-col-max-width'>
                <h2 className='heading'>Contact</h2>
                <p>Interested in hiring me for your project or employ me for a frontend developer role in your company? 
                  You can fill the contact form below or send an email to
                  <span><a className='text-link' href='mailto:#'>
                          bariborpaago@gmail.com
                        </a>
                  </span>
                </p>
                <p>Want to get connected? Follow me on the social handles below.</p>
                <ul className='list-inline mb-0'>
                  <li className='list-inline-item mb-3'>
                    <a href='www.twitter.com/Justicepago'>
                      <AiFillTwitterSquare className='myhandles' />
                    </a>
                  </li>

                  <li className='list-inline-item mb-3'>
                      <a href='www.linkedin/in/bariborpaago' target={'_blank'}>
                          <AiFillLinkedin className='myhandles' />
                      </a>
                  </li>

                  <li className='list-inline-item'>
                    <a href='www.github.com/Jussy562' target={'_blank'}>
                        <FaGithubSquare className='myhandles' />
                    </a>
                  </li>

                  <li className='list-inline-item mb-3'>
                    <a href='www.twitter.com/Justicepago'>
                        <FaFacebookSquare className='myhandles' />
                    </a>
                  </li>

                  <li className='list-inline-item mb-3'>
                      <a href='www.twitter.com/Justicepago'>
                          <FaInstagramSquare className='myhandles' />
                      </a>
                  </li>
                </ul>
                {/* End of social handles */}

                <p>For instant response</p>
                <div className='col-12 '>
                  <a className='btn btn-primary mx-auto'
                    href='google.com' target='_blank'>
                      WhatsApp Me
                      <FaPaperPlane className='me-2' />
                        
                  </a>
                </div>

            </div>
        </section>
        <section className='contact-section px-3 py-5 p-md-5'>
          <div className='container'>
            <form id='contact-form' className='contact-form col-lg-8 mx-lg-auto' method='post' action>
              <h3 className='text-center mb-3'>
                Get In Touch
              </h3>
              <div className='row g-3'>
                <div className='col-12 col-md-6'>
                  <label className='sr-only' for='cname'>Name</label>
                  <input type='text' className='form-control' id='cname' name='name' placeholder='Name' minLength={2} required aria-required='true' />
                </div>

                <div className='col-12 col-md-6'>
                  <label className='sr-only' for='cemail'>Email</label>
                  <input type='email' className='form-control' placeholder='Email' required aria-required='true'/>
                </div>
                <div className='col-12'>
                  <label className='sr-only' for='cmessage'>Your message</label>
                  <textarea className='form-control' id='cmessage' name='message' placeholder='Enter your message...'
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

export default Contact