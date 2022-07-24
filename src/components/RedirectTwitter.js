import React, { useEffect } from 'react';


function RedirectTwitter() {
    useEffect(() => {
        window.location.replace('https://www.twitter.com/Justicepago');
      }, [])
  return (
    <div className='m-auto'>Redirecting...</div>
  )
}

export default RedirectTwitter;