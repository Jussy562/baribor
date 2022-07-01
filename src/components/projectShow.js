import React from 'react';



function ProjectShow({item}) {
    // const [showdiv, setShowdiv] = useState(true);
    // const toggleShowDiv =() => {
    //     setShowdiv(!showdiv);
    //     // console.log(4);
    // };
    // const offDiv =() => {
    //     setShowdiv(!showdiv);
    //     // console.log(4);
    // };
  return (
    
            
    
        <div className='col-md-6 mb-5'>
            
            <>
                <div className='card project-card'>
                    <div className='row no-gutters'>
                        <div className='col-12 col-xl-5 card-img-holder'>
                            <img src={item.image} alt='project1' className='card-img'/>
                        </div>
                        <div className='col-12 col-xl-7'>
                            <div className='card-body'>
                                <h5 className='card-tittle'>{item.name}</h5>
                                <p className='card-text'>
                                {item.description}
                                </p>
                                <div className='viewDemo'>
                                    <a className='btn btn-primary me-2 mb-3'
                                        href={item.link} target="_blank" rel='noopener noreferrer'>
                                
                                        <span className='d-none d-md-inline'>View </span>
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        
        </div>
               

           
                    
  )
}

export default ProjectShow