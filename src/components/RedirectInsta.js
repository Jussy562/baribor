import React, { useEffect } from 'react';

function RedirectInsta() {
    useEffect(() => {
        window.location.replace('https://www.instagram.com/justicepaago');
      }, [])
  return (
    <div className='m-auto'>Redirecting...</div>
  )
}

export default RedirectInsta;