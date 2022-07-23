import React from 'react';
import Projects from '../project';
import ProjectPortfolio from './projectPortfolio';
import {FaPaperPlane} from 'react-icons/fa';

function Portfolio() {

    return (
        <div className='Portfolio col-xm-12 col-sm-12 col-md-12 main-wrapper'>
            <section className='cta-section theme-bg-light py-5 px-0'>
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
                            to='/contact'
                            href='/contact' target='_blank'>
                                <FaPaperPlane className='me-2' />
                                Hire Me
                    </a>
                </div>
            </section>
            <section className=' projects-list px-3 py-5 p-md-5'>
                <div className='container p-0'>
                    <div className='project-cards row isotope p-0'>
                        {
                                Projects.map((item) => (
                                    <ProjectPortfolio key={item.id} item={item}  /> 
                                ))
                        }     
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;
