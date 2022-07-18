// import { motion } from 'framer-motion';
import React from 'react'

function Myservices({item}) {
  return (
    //   Style the card properly
    
    <div className=' service-card mb-4 col-12'>
    {/* 
    key={item.id}
    initial={{x: '100vh', opacity: 0}}
    animate={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0.3}}}
    > */}
        <div className='col-12 col-sm-4 col-md-5 card-img-holder'>
            <img src={item.image} alt='service' className='service-img'/>
        </div>
        <div className='col-12 col-sm-8 col-md-7  card-body'>
            <h5 className='card-tittle'>{item.name}</h5>
            <p className='card-text'>
                {item.description}
            </p>
        </div>
    </div>
    
  )
}

export default Myservices