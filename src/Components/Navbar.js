import React from 'react'
import '../Components/Styles/Navbar.css'

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">profile</a>
            <a href="#">contact</a>
        </div>
        <div>
            <h1 className='text-3xl font-bold underline text-blue-500'>Yess</h1>
        </div>
    </> 
  )
}

export default Navbar