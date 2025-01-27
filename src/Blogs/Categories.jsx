import React from 'react'
import techImage from '../assets/image (3).png'
import designImage from '../assets/image (4).png'
import lifestyleImage from '../assets/image (5).png'
import businessImage from '../assets/image (6).png'
import travelImage from '../assets/image (7).png'
import educationImage from '../assets/image (8).png'


function Categories() {
  return (
    <div className="bg-gray-50 p-8 min-h-screen pl-20 pr-20">
      <section className="max-w-7xl mx-auto space-y-16">
        {/* Header for Categories */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Categories</h2>
          <a href="#" className="text-blue-600 font-bold hover:underline">
            See all &rarr;
          </a>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-lg font-bold text-gray-800">

          {[
            {
              image: techImage,
              title: "Technology & Innovation",
              
            },
            {
              image: designImage,
              title: "Design & Creativity",
            },
            {
              image: lifestyleImage,
              title: "Lifestyle & Wellness",
            },
            {
              image: businessImage,
              title: "Business & Finance",
            },
            {
              image: travelImage,
              title: "Travel & Adventure",
            },
            {
              image: educationImage,
              title: "Education & Learning",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-40 h-40 object-cover rounded-full"
              />
              <h2 className="text-lg font-bold text-gray-800">
                {category.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 grounded-lg  flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Newsletter Reminder</h2>
            <p className="text-sm text-gray-600 mt-2">
              Subscribe today and get exclusive access to premium content!
            </p>
          </div>
          <div className="relative w-full max-w-lg">
                    <input
                      type="email"
                      placeholder="Enter your E-mail to subscribe"
                      className=" bg-gray-50 w-full px-4 py-4 pr-28 border-2 border-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      style={{ paddingRight: '4rem' }} // ensure input text is not under the button
                    />
                    <button
                      className="absolute top-0 right-0 m-1 py-3 px-10 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition text-md"
                      
                    >
                      Subscribe
                    </button>
                  </div>
                  
        </div>
      </section>
      <div className="ml-10 mr-10 mx-auto w-90 border-t border-blue-300 mt-12 mb-10"></div>
    </div>
  );
}

export default Categories