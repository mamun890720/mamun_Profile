import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import WebImage1 from "../../public/Image/Web Image.png"


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
                <p>84%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="HTML webSkillItems">
        <div className="htmlIcon">
        <IoLogoJavascript className='JavaScript' />
        </div>
        <div className="htmlContain">
            <h3>JavaScript</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab est labore molestias, consequatur corrupti!</p>
            <div className='htmlSkillRange'>
                <div className="rangeParent javaRang">
                <p>75%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="HTML webSkillItems">
        <div className="htmlIcon">
        <FaReact className='react' />
        </div>
        <div className="htmlContain">
            <h3>React</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab est labore molestias, consequatur corrupti!</p>
            <div className='htmlSkillRange'>
                <div className="rangeParent reactRang">
                <p>76%</p>
                </div>
            </div>
        </div>
    </div>
   </div>
   <div className="webProject">
    <div className="webProjectTitle">
        <h2>Web Development Projects</h2>
    </div>
    <div className="webProjectList">
        <div className="webListItems">
        <a href="#"><img src={WebImage1} alt="" width="550px" /></a>
        </div>
        <div className="webListItems">
        <a href="#"><img src={WebImage1} alt="" width="550px" /></a>
        </div>
        <div className="webListItems">
        <a href="#"><img src={WebImage1} alt="" width="550px" /></a>
        </div>
        <div className="webListItems">
        <a href="#"><img src={WebImage1} alt="" width="550px" /></a>
        </div>
    </div>
   </div>
    <div className="webDevFullPage">
        <a href="#">See More</a>
    </div>
   </>
  )
}

export default Web_developer_skill