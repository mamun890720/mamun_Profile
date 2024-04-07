import React from 'react'
import BannerImag from "../../public/Image/bbb.png"
import CV from '../../public/Image/MamunCV.pdf'
import { MdDownload } from "react-icons/md";
const Banner = () => {
  return (
   <>
    <div className="homeBanner">
        <div className="leftBanner">
          <div className="leftBannerTop">
            <p>
              Hi I am <b>Al Mamun</b>{" "}
            </p>
            <p>A Probational </p>
            <h2>Web Developer</h2>
          </div>
          <div className="leftBannerBottom">
          <div className="cvDownload">
          <a href={CV} download>Download Resume  </a>
          <span><MdDownload /></span>
          </div>
            
           <div className="github">
           <a className="gitHub" href="https://github.com/mamun890720" target='_blank'>
              Gite Hub
            </a>
           </div>
          </div>
        </div>
        <div className="rightBanner">
          <img src={BannerImag} width="700px" />
        </div>
      </div>
   </>
  )
}

export default Banner