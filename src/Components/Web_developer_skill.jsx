import React from 'react'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

const Web_developer_skill = () => {
  return (
   <>
   <div className='webDeveloperTittle'>
    <h2><span>01.</span> Web Developer</h2>
   </div>
   <div className="webSkillList">
    <div className="HTML webSkillItems">
        <div className="htmlIcon">
        <FaHtml5 className='html' />
        </div>
        <div className="htmlContain">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab est labore molestias, consequatur corrupti!</p>
            <div className='htmlSkillRange'>
                <div className="rangeParent htmlRang">
                <p>82%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="CSS webSkillItems">
        <div className="htmlIcon">
        <FaCss3Alt className='css' />
        </div>
        <div className="htmlContain">
            <h3>CSS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab est labore molestias, consequatur corrupti!</p>
            <div className='htmlSkillRange'>
                <div className="rangeParent cssRang">
                <p>75%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="HTML webSkillItems">
        <div className="htmlIcon">
        <FaHtml5 className='html' />
        </div>
        <div className="htmlContain">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab est labore molestias, consequatur corrupti!</p>
            <div className='htmlSkillRange'>
                <div className="rangeParent">
                <p>82%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="HTML webSkillItems">
        <div className="htmlIcon">
        <FaHtml5 className='html' />
        </div>
        <div className="htmlContain">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab est labore molestias, consequatur corrupti!</p>
            <div className='htmlSkillRange'>
                <div className="rangeParent">
                <p>82%</p>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Web_developer_skill