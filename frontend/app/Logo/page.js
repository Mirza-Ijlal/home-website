"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../../Component/Footer";
import Form from "../../Component/Form";
import Strategic from "../../Component/Strategic";
import Amenities from "../../Component/Amenities";
import Specification from "../../Component/Specification";
import Explorehome from "../../Component/Explorehome";



const Logo = () => {

const [Name, setName] = useState("")
const [Email, setEmail] = useState("")
const [Number, setNumber] = useState("")



  const imgs = [
    { id: 0, value: "/BG1.jpg" },
    { id: 1, value: "/BG2.jpg" },
    { id: 2, value: "/f2.png" },
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);
  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <>
      <div className="thumbnail"></div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="hero">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h1>Our Home Defines Us</h1>
                  <p>
                    Revanta Homes is a project by Rishabhdeo Builders &
                    Developers. They build homes with timeless designs. Thet
                    build homes which are beyond your dreams.
                  </p>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>

          <div className="carousel-item active">
            <img src="/BG1.jpg" className="d-block  SLIDE" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/BG2.jpg" className="d-block  SLIDE" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/BG3.jpg" className="d-block  SLIDE " alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section>
        <div className="facilities">
          <div className="imagef">
            <img              src="/f1.png"
              className="ifacilities"
              height={650}
              width={700}
            />
            <div className="container TEXTP">
              <div className="row">
                <div className="col-5 box1 ">
                  <div className="textf">
                    <h1>Complete Facilities</h1>
                    <p>
                      These homes contain all basic amenities and are of latest
                      technology. Our home plans are original and are designed
                      as per a resident's view. We build all our homes like our
                      own. We aim to create homes that give a living experience
                      that you deserve.
                    </p>
                    <button> See More</button>
                  </div>
                </div>
                <div className="col-7 box2">
                  <img
                    className="mainimg"
                    src={sliderData.value}
                    height={300}
                    width={500}
                    alt=""
                  />

                  {imgs.map((data, i) => (
                    <img
                      key={data.id}
                      src={data.value}
                      onClick={() => handleClick(i)}
                      height={70}
                      width={100}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

     
      <Explorehome/>
      <Specification/>

      <Amenities/>
      <Strategic/>
      <Form/>
      
                    <Footer/>
      
    </>
  );
};

export default Logo;
