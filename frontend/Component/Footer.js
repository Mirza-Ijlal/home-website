import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    
    <footer>
       <div className="myfooter">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="fbox1">

              <img src="./1.png" alt="" />
              <p>CLOSER TO NATURE</p>

              </div>
            </div>
            <div className="col-4">
              <div className="fbox2">

              <p>Contact Us</p>
              <p> <HiOutlineLocationMarker/>  Revanta Homes, Ranipur Road, Gouthana, Betul (Madhya Pradesh)</p>
              <p> <MdCall/>  94256-50333, 94256-60333</p>
              </div>

            </div>
            <div className="col-4">
              <div className="fbox3">

              <p>Our Social Media</p>
              <div className="ficons">

              <h1><ImMail4/></h1>
              <h1><BsInstagram/></h1>
              <h1><AiFillFacebook/></h1>
              </div>
              </div>
            </div>

          </div>
        </div>
       </div>

      </footer>
    
    
    </>
  )
}

export default Footer