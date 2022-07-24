import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import Footer from './Footer';

function Resume() {
    return (
        <div className='resume  col-xm-12 col-sm-12 col-md-12 main-wrapper'>
            <section className='cta-section theme-bg-light py-5 px-5 resume-download-plate'>
                <div className='container text-center single-col-max-width'>
                    <h2 className='heading mb-3'>
                        Online Resume
                    </h2>
                    <a className='btn btn-primary' href='/files/BariborPaago_resume.pdf' download target={'_blank'}>
                        Download PDF Version
                    </a>
                </div>
            </section>

            <div className=' resume-container px-3 px-lg-5 py-3 py-lg-5'>
                <article className='resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg'>
                    <div className='resume-header'>
                        <div className='row align-items-center'>
                            <div className='resume-title col-12 col-md-6 col-lg-8 col-xl-9'>
                                <h2 className='resume-name mb-0 text-uppercase relative-heading'>
                                    Baribor Paago
                                </h2>
                                <div className='resume-tagline mb-3 mb-md-0'>
                                    Software Engineer
                                </div>
                            </div>

                            <div className='resume-contact col-12 col-md-6 col-lg-4 col-xl-3'>
                                <ul className='list-unstyled mb-0 resume-contact resume-contact-plate'>
                                    <li className='mb-0'>
                                        <a className='resume-link' href='tel:#'>
                                            +2349035401231
                                        </a>
                                    </li>

                                    <li className='mb-0'>
                                        <a className='resume-link' href='mailto:#'>
                                            bariborpaago@gmail.com
                                        </a>
                                    </li>

                                    <li className='mb-0'>
                                        <a className='resume-link' href='/'>
                                            bariborpaago.netlify.app
                                        </a>
                                    </li>

                                    <li className='mb-0'>
                                        Rivers, Nigeria
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='resume-intro py-3'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-md-3 col-xl-2 text-center'>
                                <img className='resume-profile-image mb-3 mb-md-0 me-md-5 ms-md-0 rounded-circle mx-auto'
                                src='./images/profile.jpg' alt='Resume profile' />
                            </div>
                            <div className='col text-start'>
                                <p className='mb-0'>
                                        Software engineer, currently serving as an intern front-end developer 
                                        at FairexxSolutions, I have previously
                                        served as an Data entry personnel and later as front-end intern developer
                                        at
                                        MeshView Limited. I adopt a SCRUM/AGILE approach to software development
                                        and I have been lucky to work with some of the latest technologies in web development, 
                                        I implemented a front-end
                                        development cycle at MeshView that helped speed up software development speed by 30%, 
                                        at Fairexx 
                                        I am automating most of the manual tasks and 
                                        increasing productivity by approx 20%, I 
                                        have knowledge of multiple high-level programming 
                                        languages and can work with modern software development tools and frameworks, I am a fast learner
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='resume-body'>
                        <div className='row'>
                            <div className='resume-main col-12 col-lg-7 col-xl-8 pe-0 pe-lg-5'>
                                <section className='work-section py-3'>
                                    <h3 className='text-uppercase resume-section-heading mb-4 relative-heading'>
                                        Work Experiences
                                    </h3>
                                    <div className='item mb-3'>
                                        <div className='item-heading row align-items-center mb-2'>
                                            <h4 className='item-title col-12  mb-2 mb-md-0'>
                                                Software Developer Intern
                                            </h4>
                                            
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-lg-start '>
                                                Fairexx Solutions
                                            </div>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-end text-lg-end '>
                                                2021-2022
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <ul className='resume-list'>
                                                <li>Responsible for transforming wireframe designs into codes.</li>
                                                <li>Build Interactive and responsive user interfaces.</li>
                                                <li>Work in agile and collaborative environment to deliver 
                                                    tasks that meet projects requirement.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='item mb-3'>
                                        <div className='item-heading row align-items-center mb-2'>
                                            <h4 className='item-title col-12  mb-2 mb-md-0'>
                                                Software Developer Intern
                                            </h4>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-lg-start'>
                                                MeshView Limited
                                            </div>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-end text-lg-end'>
                                                2018-2020
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <ul className='resume-list'>
                                                <li>Implemented front-end technical solutions to meet projects requirement 
                                                    for web pages.</li>
                                                <li>Assist the team in building software products.</li>
                                                
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='item mb-3'>
                                        <div className='item-heading row align-items-center mb-2'>
                                            <h4 className='item-title col-12  mb-2 mb-md-0'>
                                                Data Entry Personnel
                                            </h4>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-lg-start'>
                                                MeshView Limited
                                            </div>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-end text-lg-end'>
                                                2018
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <ul className='resume-list'>
                                                <li>Meet up daily target for client sites.</li>
                                                <li>Pay attention to details while recording data</li>
                                                
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='item mb-3'>
                                        <div className='item-heading row align-items-center mb-2'>
                                            <h4 className='item-title col-12  mb-2 mb-md-0'>
                                                Software Developer Student
                                            </h4>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-lg-start'>
                                                Riv-TechCreek
                                            </div>
                                            <div className='item-meta col-12 col-md-6 col-lg-6 text-muted text-end text-lg-end'>
                                                2018
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <ul className='resume-list'>
                                                <li>Learnt how to build web applications.</li>
                                                <li>Collaborate with a team to complete a timely projects.</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <aside className='resume-aside col-12 col-lg-5 col-xl-4 px-lg-4 pb-lg-4'>
                                <section className='skills-section py-3'>
                                    <h3 className='text-uppercase resume-section-heading mb-4 relative-heading'>
                                        Skills
                                    </h3>
                                    <div className='item'>
                                        <h4 className='item-title'>
                                            Technical
                                        </h4>
                                        <ul className='resume-skills-list'>
                                            <li className='mb-2'>
                                                HTML5
                                            </li>
                                            <li className='mb-2'>
                                                CSS
                                            </li>
                                            <li className='mb-2'>
                                                Bootstrap
                                            </li>
                                            <li className='mb-2'>
                                                Javascript
                                            </li>
                                            <li className='mb-2'>
                                                React
                                            </li>
                                            <li className='mb-0'>
                                                Agile Methodologies
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='item'>
                                        <h4 className='item-title'>
                                            Professional
                                        </h4>
                                        <ul className='resume-skills-list'>
                                            <li className='mb-2'>
                                                Creative
                                            </li>
                                            <li className='mb-2'>
                                                Team Worker
                                            </li>
                                            <li className='mb-2'>
                                                Reliable
                                            </li>
                                            <li className='mb-0'>
                                                Ideation
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </section>
                                <section className='education-section py-3'>
                                    <h3 className='text-uppercase resume-section-heading mb-4 relative-heading'>
                                        Education
                                    </h3>
                                    <p className='resume-degree font-weight-bold m-0'>
                                        Electrical/Electronics Engineering
                                    </p>
                                    <p className='resume-degree-org text-muted m-0'>
                                        Kenule Beeson Polytechnic, Bori
                                    </p>
                                    <p className='resume-degree-time text-muted m-0'>
                                        2016-2020
                                    </p>

                                </section>

                                <section className='skills-section py-3'>
                                    <h3 className='text-uppercase resume-section-heading mb-4 relative-heading'>
                                        Projects
                                    </h3>
                                    <ul className='resume-projects-list'>
                                            <li className='mb-2'>
                                                Portfolio Websites <br />
                                                <a href='www.bariborpaago.netlify.app' target={'_blank'}>
                                                    www.bariborpaago.netlify.app
                                                </a>
                                            </li>
                                            <li className='mb-2'>
                                                Pureearth <br />
                                                <a href='www.pureearth.netlify.app' target={'_blank'}>
                                                    www.pureearth.netlify.app
                                                </a>
                                            </li>
                                            <li className='mb-0'>
                                                myclothLivery <br />
                                                <a href='www.pureearth.netlify' target={'_blank'}>
                                                    www.myclothlivery.netlify.app
                                                </a>
                                            </li>
                                            
                                        </ul> 

                                    
                                </section>
                            </aside>
                        </div>
                    </div>
                    <hr />
                    <div className='resume-footer text-center'>
                        <ul className='resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted'>
                            <li className='list-inline-item mb-lg-0 me-3'>
                                <Link to='/git' className='resume-link' href='https://www.github.com/Jussy562'>
                                <FaGithubSquare className='resume-handles me-2' />
                                www.github.com/Jussy562

                                </Link>
                            </li>
                            <li className='list-inline-item mb-lg-0 me-3'>
                                <Link to='/linkd' className='resume-link' href='https://www.linkedin.com/in/bariborpaago'>
                                <AiFillLinkedin className='resume-handles me-2' />
                                www.linkedin.com/in/bariborpaago

                                </Link>
                            </li>
                            <li className='list-inline-item mb-lg-0 me-3'>
                                <Link to='/twitter' className='resume-link' href='wwww.twitter.com/Justicepago'>
                                <AiFillTwitterSquare className='resume-handles me-2' />
                                @Justicepago

                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </article>
            </div>
            {/* Resume ends here */}
             {/* Footer start here  */}
            <section className='footer-section px-3 py-5 p-md-5'>
                <div className='container footer-plate p-0 m-0'>
                    <hr />
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Resume;
