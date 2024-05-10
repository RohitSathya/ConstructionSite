import React from 'react'
import './footer.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function footer({aboutFormRef}) {
  return (
    <>
       <footer className='footer' ref={aboutFormRef}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h3 className="text-white">Sri Balaji Builders</h3>
            <p className="text-white">Mylapore, Chennai 600002</p>
          </div>
          <div className='col-md-4'>
            <h5 className="text-white">About Us</h5>
            <p className="text-white">
              Sri Balaji Builders is a leading construction company committed to delivering high-quality residential and commercial projects.
            </p>
          </div>
          <div className='col-md-4'>
            <h5 className="text-white">Contact Us</h5>
            <ul className='list-unstyled'>
              <li className="text-white">Phone: +91 1234567890</li>
              <li className="text-white">Email: info@sribalajibuilders.com</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <hr className="text-white" />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <p className="text-white">&copy; {new Date().getFullYear()} Sri Balaji Builders. All rights reserved.</p>
          </div>
          <div className='col-md-6'>
            <ul className='list-inline text-right'>
              <li className='list-inline-item'><a href='#' className="text-white">Privacy Policy</a></li>
              <li className='list-inline-item'><a href='#' className="text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
