import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Specification = () => {
  return (
    <>
    <section>
        <div className="specification">
          <div className="container">
            <div className="row">
              <div className="col-md-3 contectparent">
                <div className="content">
                  <h1>Specification</h1>
                  <p>
                    We assure you that you'll get our best, as that's what we
                    expect of ourselves.
                  </p>
                  <div className="myfont">
                    <h1>
                      <FaChevronLeft />
                    </h1>
                    <h1>
                      <FaChevronRight />
                    </h1>
                  </div>

                  <p>01/03</p>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card mycard" style={{ width: "17rem" }}>
                  <img src="./c1.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1>Structure</h1>
                    <p className="card-text">
                      Earthquake Resistant Structure with attractive elevation
                      as per Architecture's Design.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card mycard" style={{ width: "17rem" }}>
                  <img src="./c2.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1>Wall Finish</h1>
                    <p className="card-text">
                      Inside Wall Plaster with Double Coat Putty Finish. Double
                      Coat Plaster with Texture and Acrylic
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card mycard3" style={{ width: "17rem" }}>
                  <img src="./c3.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1>Doors & Windows</h1>
                    <p className="card-text">
                      Main Door Designer Flush Door with Wooden Frame & Natural
                      Veneer
                    </p>
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

export default Specification