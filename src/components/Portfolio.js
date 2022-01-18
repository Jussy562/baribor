import React from 'react';
import {FaPaperPlane} from 'react-icons/fa';

function Portfolio() {
    return (
        <div className='Portfolio col-xm-12 col-sm-12 col-md-12 main-wrapper'>
            <section className='cta-section theme-bg-light py-5'>
                <div className='container text-center single-col-max-width'>
                    <h2 className='heading'>
                        Portfolio
                    </h2>
                    <div className='intro'>
                        <p>
                            Welcome to my online portfolio. You can take a look at my 
                            projects. I am ready to join your team.
                        </p>
                    </div>
                    <a className='btn btn-primary'
                            href='google.com' target='_blank'>
                                <FaPaperPlane className='me-2' />
                                Hire Me
                    </a>
                </div>
            </section>
            <section className=' projects-list px-3 py-5 p-md-5'>
                <div className='container'>
                    <div className='project-cards row isotope'>
                        <div className='isotope-item col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' className='card-img' alt='project' />
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <a href='google.com' className='theme-link'>
                                                    Project Heading
                                                </a>
                                            </h5>
                                            <p className='card-text'>
                                                Project intro lorem ipsum dolor sit amet,
                                                onsectetuer adipiscing elit. Cum sociis 
                                                natoque penatibus et magnis dis parturient 
                                                montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='link-mask'>
                                    <a className='link-mask-link' href='google.com'>
                                        
                                    </a>
                                    <div className='link-mask-text'>
                                        <a className='btn btn-secondary' href='google.com'>
                                            {/* Place eye icon here *
                                            View Case Study
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='isotope-item col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' className='card-img' alt='project' />
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <a href='google.com' className='theme-link'>
                                                    Project Heading
                                                </a>
                                            </h5>
                                            <p className='card-text'>
                                                Project intro lorem ipsum dolor sit amet,
                                                onsectetuer adipiscing elit. Cum sociis 
                                                natoque penatibus et magnis dis parturient 
                                                montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='link-mask'>
                                    <a className='link-mask-link' href='google.com'>
                                        
                                    </a>
                                    <div className='link-mask-text'>
                                        <a className='btn btn-secondary' href='google.com'>
                                            {/* Place eye icon here *
                                            View Case Study
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='isotope-item col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' className='card-img' alt='project' />
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <a href='google.com' className='theme-link'>
                                                    Project Heading
                                                </a>
                                            </h5>
                                            <p className='card-text'>
                                                Project intro lorem ipsum dolor sit amet,
                                                onsectetuer adipiscing elit. Cum sociis 
                                                natoque penatibus et magnis dis parturient 
                                                montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='link-mask'>
                                    <a className='link-mask-link' href='google.com'>
                                        
                                    </a>
                                    <div className='link-mask-text'>
                                        <a className='btn btn-secondary' href='google.com'>
                                            {/* Place eye icon here *
                                            View Case Study
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='isotope-item col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' className='card-img' alt='project' />
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <a href='google.com' className='theme-link'>
                                                    Project Heading
                                                </a>
                                            </h5>
                                            <p className='card-text'>
                                                Project intro lorem ipsum dolor sit amet,
                                                onsectetuer adipiscing elit. Cum sociis 
                                                natoque penatibus et magnis dis parturient 
                                                montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='link-mask'>
                                    <a className='link-mask-link' href='google.com'>
                                        
                                    </a>
                                    <div className='link-mask-text'>
                                        <a className='btn btn-secondary' href='google.com'>
                                            {/* Place eye icon here *
                                            View Case Study
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='isotope-item col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' className='card-img' alt='project' />
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <a href='google.com' className='theme-link'>
                                                    Project Heading
                                                </a>
                                            </h5>
                                            <p className='card-text'>
                                                Project intro lorem ipsum dolor sit amet,
                                                onsectetuer adipiscing elit. Cum sociis 
                                                natoque penatibus et magnis dis parturient 
                                                montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='link-mask'>
                                    <a className='link-mask-link' href='google.com'>
                                        
                                    </a>
                                    <div className='link-mask-text'>
                                        <a className='btn btn-secondary' href='google.com'>
                                            {/* Place eye icon here 
                                            View Case Study
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='isotope-item col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' className='card-img' alt='project' />
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <a href='google.com' className='theme-link'>
                                                    Project Heading
                                                </a>
                                            </h5>
                                            <p className='card-text'>
                                                Project intro lorem ipsum dolor sit amet,
                                                onsectetuer adipiscing elit. Cum sociis 
                                                natoque penatibus et magnis dis parturient 
                                                montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='link-mask'>
                                    <a className='link-mask-link' href='google.com'>
                                        
                                    </a>
                                    <div className='link-mask-text'>
                                        <a className='btn btn-secondary' href='google.com'>
                                            {/* Place eye icon here 
                                            View Case Study
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;
