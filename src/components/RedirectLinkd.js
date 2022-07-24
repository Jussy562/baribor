import React, { useEffect } from 'react'

function RedirectLinkd() {
    useEffect(() => {
        window.location.replace('https://www.linkedin.com/in/bariborpaago');
      }, [])
  return (
    <div className='m-auto'>Redirecting...</div>
  )
}

export default RedirectLinkd