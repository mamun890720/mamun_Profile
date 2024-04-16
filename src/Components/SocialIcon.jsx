import React from 'react'
import { FaFacebook, FaSquareXTwitter, FaLinkedin} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <>
    <div className="socialIcon">
        <ul>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaInstagramSquare /></a></li>
            <li><a href="#"><FaSquareXTwitter /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
        </ul>
    </div>
    </>
  )
}

export default SocialIcon