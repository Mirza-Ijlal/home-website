import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineDownload } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";










const Header = () => {
  return (
    <>
      <div className="mynavbar">  
        
        <div className="navi">
          <Link className="logo" href="/Logo">

            
            <Image src='/1.png' width={98} height={92} />
          
          </Link>

          <Link className="" href="/Home">
            Home
          </Link>
          <Link className="" href="/About">
            About Us
          </Link>
        </div>

        <div className="rightsidenav">
          <button className="brobtn">  <AiOutlineDownload className="downfont"/> download Brochure</button>

          <div className="dropdown">
          <button className="btn dropdown-toggle drbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         <BiWorld className="bifont"/> English
          </button>
          <a href="/api/auth/login">Login</a>

        
         <ul className="dropdown-menu">
          <li><Link className="dropdown-item engnav" href="#">spanish</Link></li>
          <li><Link className="dropdown-item" href="#">urdu</Link></li>
          <li><Link className="dropdown-item" href="#">turkish</Link></li>
         </ul>
         </div>
        </div>
    </div>
    </>
  );
};

export default Header;
