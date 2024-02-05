import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Amenities = () => {
  return (
    <>
    <section>
        <div className="amenities">
          <img
            src="/f1.png"
            className="amentiesimg"
            height={600}
            width={700}
          />

          <div className="boxamen">
            <div className="container">
              <div className="row amenitiesbox">
                <div className="col-4 contentamenparent ">
                  <div className="content">
                    <h1>Amenities</h1>
                    <p>
                      We consider every aspect of aesthetic appeal and
                      functionality, while designing and constructing the
                      buildings.
                    </p>
                    <div className="myfont">
                      <h1>
                        <FaChevronLeft />
                      </h1>
                      <h1>
                        <FaChevronRight />
                      </h1>
                    </div>

                    <p>01/02</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="playarea">
                    <img className="myicons" src="./Icon1.jpg" alt="" />
                    <p>Children Play Area</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon2.png" alt="" />
                    <p>Indoor & Outdoor Games</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon3.png" alt="" />
                    <p>Gymnasium</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon4.png" alt="" />
                    <p>CBadminton Court </p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon5.png" alt="" />
                    <p>Community Space</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="playarea">
                    <img className="myicons" src="./Icon6.png" alt="" />
                    <p>Landscaped Garden</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon7.png" alt="" />
                    <p>24x7 Security</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon8.png" alt="" />
                    <p>Security Guard</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon9.png" alt="" />
                    <p>Rainwater Haversting</p>
                  </div>

                  <div className="playarea">
                    <img className="myicons" src="./Icon10.png" alt="" />
                    <p>Underground Drainage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
    </>
  )
}

export default Amenities