import React from 'react'

function Service() {
  return (
    <div className='service col-xm-12 col-sm-12 col-md-12 main-wrapper'>
        <section className='cta-section theme-bg-light py-5 px-5'>
            <div className='container text-center single-col-max-width'>
                <h2 className='heading'>Services</h2>
                <div className='intro'>
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
            </div>
        </section>
        <section className='service-list py-5 px-5'>
          <div className='container'>
            <div className='Error text-center'>
              <p>OOPS!</p>
              <p>I am working on it</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Service