import React from 'react'

function ProjectPortfolio({item}) {
  return (
    <div className='isotope-item col-md-6 mb-5'>
        <div className='card project-card'>
            <div className='row'>
                <div className='col-12 col-xl-5 card-img-holder'>
                    <img src={item.image} className='card-img' alt='project' />
                </div>
                <div className='col-12 col-xl-7'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <a href='google.com' className='theme-link'>
                                {item.name}
                            </a>
                        </h5>
                        <p className='card-text'>
                            {item.description}
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
  )
}

export default ProjectPortfolio