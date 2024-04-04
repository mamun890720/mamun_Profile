import React from 'react'

import { Outlet, Link } from "react-router-dom";

const navbar = () => {
  return (
   <>
   <div className="mainHead">
    <div className="logo">
        <h2>Al Mamun</h2>
    </div>
    <div className="menus">
    <ul>
        <li> <a href={`/`}>Home</a></li>
        <li> <a href={`/Project`}>Project</a></li>
        <li> <a href={`/About`}>About</a></li>
        <li> <a href={`/Contact`}>Contact</a></li>
    </ul>
    </div>
   </div>
   </>
  )
}

export default navbar