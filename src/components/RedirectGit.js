import React, { useEffect } from 'react'

function RedirectGit() {
    useEffect(() => {
        window.location.replace('https://www.github.com/Jussy562');
      }, [])
  return (
    <div>Redirecting..</div>
  )
}

export default RedirectGit