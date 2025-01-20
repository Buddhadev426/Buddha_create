import React from 'react'

function FooterBlog() {
  return (
    <footer className="bg-gray-50 py-10 pl-20 pr-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
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
        <div>
          <h3 className="text-lg font-bold text-gray-800 pt-10 text-right">Get the app</h3>
          <div className="mt-4 space-y-4">
            <a
              href="#"
              className="w-50 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              {/* <span>Download on the Apple Store</span> */}
              <button className='text-left '><h6 className='text-xs text-gray-200'>Download on the</h6>Apple Store</button>
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              {/* <span>Get in on Google Play</span> */}
              <button className='text-left'><h6 className='text-xs text-gray-200'>Get in on</h6>Google Play</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlog