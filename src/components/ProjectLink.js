import React from 'react'

function ProjectLink({item}){
  return (
        <div className='card project-card' >
                        
            <div className='row no-gutters'>
                <div className='col-12 col-xl-5 card-img-holder link-over'>
                    {/* <img src={item.image} alt='project1' className='card-img'/> */}
                    <a className='btn btn-primary me-2 mb-3'
                            href='google.com'>
                    
                            <span className='d-none d-md-inline'>View </span>
                            Demo
                    </a>
                    {/* <a className='btn btn-primary me-2 mb-3'
                            href='google.com'>
                    
                            <span className='d-none d-md-inline'>View </span>
                            
                    </a> */}
                </div>
                <div className='col-12 col-xl-7'>
                    <div className='card-body '>
                        {/* <a className='btn btn-primary me-2 mb-3'
                            href='google.com'>
                    
                            <span className='d-none d-md-inline'>View </span>
                            Portfolio
                        </a> */}
                        
                        <h5 className='card-tittle'>{item.name}</h5>
                        <p className='card-text'>
                        {item.description}
                        </p>
                    </div>
                </div>
                
            </div>
                
                    
            
        </div>
            
    )
}

export default ProjectLink