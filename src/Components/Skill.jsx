import React from 'react'
import "../Components/Skill.css"
import Web_developer_skill from './Web_developer_skill'
Web_developer_skill
const Skill = () => {
  return (
    <>
    <div className="skillTittle">
      <h2>My SKills</h2>
      <div className="skillsMe">
        <p>I am showing my best skill with details in bellow  </p>
      </div>
    </div>
    <Web_developer_skill/>
    </>
  )
}

export default Skill