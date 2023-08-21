import React from 'react'
import './Tours.css'
// import './bootstrap.min.css'

function Tours() {
  return (

    <div className='tours_main'>
      {/* searchbar start */}
      <div className="container-fluid position-relative p-0">
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">Please Enter the city you want to visit</p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Ahmedabad" />
                  <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: 7 }}>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* searchbar end */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
            <h1 className="mb-5">Packages That We Provide</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="https://i.ibb.co/VHGp0dL/package-1.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Ahmedabad</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>1-4 days</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>1-10 Person</small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">6000/- to 48000/-</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                  <div className="d-flex justify-content-center mb-2">

                    {/* modal start */}

                    {/* <!-- Trigger/Open The Modal --> */}
                    <a id="myBtn" onClick={() => { var modal = document.getElementById("myModal"); modal.style.display = "block"; }} className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30 0 0 30' }}>Open Modal</a>

                    {/* <!-- The Modal --> */}
                    <div id="myModal" className="modal">

                      {/* <!-- Modal content --> */}
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className="close" onClick={() => { var modal = document.getElementById("myModal"); modal.style.display = "none"; }}>&times;</span>
                          <h2>Modal Header</h2>
                        </div>
                        <div className="modal-body">
                          <p>Some text in the Modal Body</p>
                          <p>Some other text...</p>
                        </div>
                        <div className="modal-footer">
                          <h3>Modal Footer</h3>
                        </div>
                      </div>
                    </div>
                    {/* modal end */}

                    <a href="#book" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30 30 0' }}>Book Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="https://i.ibb.co/VHGp0dL/package-1.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Ahmedabad</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>1-4 days</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>1-10 Person</small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">6000/- to 48000/-</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                  <div className="d-flex justify-content-center mb-2">

                    {/* modal start */}

                    {/* <!-- Trigger/Open The Modal --> */}
                    <a id="myBtn" onClick={() => { var modal = document.getElementById("myModal"); modal.style.display = "block"; }} className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30 0 0 30' }}>Open Modal</a>

                    {/* <!-- The Modal --> */}
                    <div id="myModal" className="modal">

                      {/* <!-- Modal content --> */}
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className="close" onClick={() => { var modal = document.getElementById("myModal"); modal.style.display = "none"; }}>&times;</span>
                          <h2>Modal Header</h2>
                        </div>
                        <div className="modal-body">
                          <p>Some text in the Modal Body</p>
                          <p>Some other text...</p>
                        </div>
                        <div className="modal-footer">
                          <h3>Modal Footer</h3>
                        </div>
                      </div>
                    </div>
                    {/* modal end */}

                    <a href="#book" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30 30 0' }}>Book Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="https://i.ibb.co/VHGp0dL/package-1.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Ahmedabad</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>1-4 days</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>1-10 Person</small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">6000/- to 48000/-</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                  <div className="d-flex justify-content-center mb-2">

                    {/* modal start */}
                    <a id="myBtn" onClick={() => { var modal = document.getElementById("myModal"); modal.style.display = "block"; }} className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30 0 0 30' }}>Open Modal</a>

                    {/* <!-- The Modal --> */}
                    <div id="myModal" className="modal">

                      {/* <!-- Modal content --> */}
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className="close" onClick={() => { var modal = document.getElementById("myModal"); modal.style.display = "none"; }}>&times;</span>
                          <h2>Modal Header</h2>
                        </div>
                        <div className="modal-body">
                          <p>Some text in the Modal Body</p>
                          <p>Some other text...</p>
                        </div>
                        <div className="modal-footer">
                          <h3>Modal Footer</h3>
                        </div>
                      </div>
                    </div>
                    {/* modal end */}

                    <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30 30 0' }}>Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Package End --> */}


      {/* <!-- Booking Start --> */}
      <a name='book'></a>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Online Booking</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Book A Tour</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating date" id="date3" data-target-input="nearest">
                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                        <label for="datetime">Date & Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Destination" />
                        <label for="datetime">Destination</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: 100 }}></textarea>
                        <label for="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Booking Start --> */}

      {/* <!-- Process Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
            <h1 className="mb-5">3 Easy Steps To Your Next Vacation</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-globe fa-3x text-white"></i>
                </div>
                <h5 className="mt-4">Choose A Destination</h5>
                <hr className="w-25 mx-auto bg-primary mb-1"></hr>
                <hr className="w-50 mx-auto bg-primary mt-0"></hr>
                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-plane fa-3x text-white"></i>
                </div>
                <h5 className="mt-4">Chose Date And Time</h5>
                <hr className="w-25 mx-auto bg-primary mb-1"></hr>
                <hr className="w-50 mx-auto bg-primary mt-0"></hr>
                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-dollar-sign fa-3x text-white"></i>
                </div>
                <h5 className="mt-4">Pay Online</h5>
                <hr className="w-25 mx-auto bg-primary mb-1"></hr>
                <hr className="w-50 mx-auto bg-primary mt-0"></hr>
                <p className="mb-0"> Sit Back And Let Us Do The Rest. We will also assign a To Do List section</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Process Start --> */}

    </div>

  )
}

export default Tours
