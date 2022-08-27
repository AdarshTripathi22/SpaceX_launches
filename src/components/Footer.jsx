import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <footer className="py-5">
        <div className="row">
          <div className="col-2">
            <h5>SPaceX</h5>
            <ul className="nav flex-column">
              {/* <li className="nav-item mb-2"><img className = "Logo" src="https://toppng.com/uploads/preview/spacex-logo-11609377542pzdtc3f0hg.png" alt=""/></li> */}
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Falcon</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">StarLink</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQ</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Human SpaceLift</a></li>
              {/* <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li> */}
            </ul>
          </div>

          <div className="col-2">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our Specialists</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact Us</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Careers</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>@ 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
            <li className="ms-3"><a className="link-dark" href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
            <li className="ms-3"><a className="link-dark" href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
          </ul>
        </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer