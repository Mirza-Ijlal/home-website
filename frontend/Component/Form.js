import React, { useEffect, useState } from "react";



const Form = () => {
  const [Details,setDetails]=useState({

  })
  const handleUsersDetail=(e)=>{
    e.preventDefault()
    const {name,value}=e.target;

    setDetails(
      {
        ...Details,
       [name]:value
      }
    )
  }

  const showUsersdata=async(e)=>{
    e.preventDefault()
    console.log(Details)
    try {
      const res=await fetch('http://localhost:3005/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(Details)
   
   
    })
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <>
      <section>
        <div className="formI">
          <div className="container myform">
            <div className="formtext">
              <h1>Get in touch</h1>
              <p>
                Please kindly fill out the form below, we will get back to you soon.
              </p>
            </div>

            <div className="form-box">
              <form method="POST" >
                <div className="mb-3">
                  <input
                    type="text"
                    className="inputname"
                    placeholder="Name"
                   onChange={handleUsersDetail}
                   name='name'
                  />

                  <input
                    type="email"
                    className="inputemail"
                    placeholder="Email"
                    onChange={handleUsersDetail}
                    name='email'
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="inputnumber"
                    placeholder="Phone Number"
                    onChange={handleUsersDetail}
                    name='number'
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree that my submitted data is being collected and stored.
                  </label>
                </div>
                <button type="submit" className="mysubmitbtn" onClick={showUsersdata}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
