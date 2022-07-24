import React, { useEffect } from 'react';

function RedirectFb() {
    useEffect(() => {
        window.location.replace('https://www.facebook.com/justice.pago');
      }, [])
  return (
    <div className='m-auto'>Redirecting...</div>
  )
}

export default RedirectFb