import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay,faFacebook, faTwitter,  } from '@fortawesome/free-brands-svg-icons';



function FooterBlog() {
  return (
    <footer className="bg-gray-50 py-10 pl-20 pr-20">
      {/* <div className="flex justify-between items-center mb-8">
            <span>
              <h2 className="text-4xl font-bold text-blue-500 mb-8">Blogs</h2>
            </span>
            <span flex justify-between items-center mb-8>
              <h6 className='text-md font-bold text-blue-500'>Follow Us</h6>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
            </span>
      </div> */}

<div className="flex flex-col items-center justify-between  bg-gray-50">
      {/* Header Section */}
      <header className="w-full py-4 bg-gray-50 ">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-4xl font-bold text-blue-600">Blogs</h1>
          <nav className="flex items-center space-x-6">
            <span className="text-blue-600 font-semibold">Follow Us</span>
            <a href="#" className="text-blue-600 text-xl">
              <i className="fab fa-facebook"></i> {/* Replace with FontAwesomeIcon */}
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </nav>
        </div>
      </header>

     
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12 mt-12">
        {/* Discover Section 1 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">Discover</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Miami</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">New York</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Chicago</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Florida</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Los Angeles</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">San Diego</a></li>
          </ul>
        </div>

        {/* Quick Links Section 1 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ's</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing Plans</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Discover Section 2 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">Discover</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Miami</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">New York</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Chicago</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Florida</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Los Angeles</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">San Diego</a></li>
          </ul>
        </div>

        {/* Quick Links Section 2 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ's</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing Plans</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* App Section */}
        <div className='ml-5'>
          <h3 className="text-lg font-bold text-gray-800 pt-10 pl-12">Get the app</h3>
          <div className="mt-4 space-y-4">
            <a
              href="#"
              className="w-40 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              {/* <span>Download on the Apple Store</span> */}
              <button className='text-left flex gap-2'>
              <div><FontAwesomeIcon icon={faApple} className='text-2xl text-gray-200 p-1' /></div> 
              
              <div><h6 className='text-xs text-gray-200'>Download on the</h6>Apple Store</div> 
              </button>
            </a>
            <a
              href="#"
              className="w-40 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              {/* <span>Get in on Google Play</span> */}
              <button className='text-left flex gap-2'>
                <div><FontAwesomeIcon icon={faGooglePlay} className='text-2xl text-gray-200 pt-2' /></div>
                
                <div><h6 className='text-xs text-gray-200'>Get in on</h6>Google Play</div>
                </button>
            </a>
          </div>
        </div>
      </div>







      {/* Footer Section */}
      <footer className="w-full py-4 bg-gray-50 text-center mt-8">
        <p className="text-sm text-gray-600">© 2025 Blogs. All rights reserved.</p>
      </footer>
    </div>





     
    </footer>
  );
};

export default FooterBlog