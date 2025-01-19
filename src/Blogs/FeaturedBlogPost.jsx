
import React from 'react'
import femaleImage from '../assets/image.png'
import clockImage from '../assets/image (1).png'




function FeaturedBlogPost() {
    return (
        <div className="bg-white min-h-screen">
          {/* Page Title */}
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Featured Blog Posts</h1>
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left: Featured Blog */}
              <div className="lg:col-span-2 bg-white rounded-lg  p-4">
                <img
                  src={femaleImage}              
                  alt="Featured Blog"
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center mb-2">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFWby-88q9M2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692926330433?e=2147483647&v=beta&t=SstSuDOvSCfqZYls_w1I1QUqib9AJ9daejyRxVLIt9I"
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">Buddhadev Maity</p>
                    <p className="text-sm text-gray-500">January 16, 2025</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  Why Minimalism is the Key to Modern Design
                </h2>
                <p className="text-gray-600">
                  In a cluttered world, less is more. Minimalist design emphasizes
                  clarity, simplicity, and purpose. By stripping away the
                  unnecessary, you allow users to focus on what truly matters.
                  Whether it’s a sleek interface or a clean graphic, minimalism not
                  only looks modern but enhances functionality. Next time you
                  design, ask yourself: “What can I remove to improve this?”
                </p>
              </div>
    
              {/* Right: Blog Cards */}
              <div className="space-y-4">
                
                  <div
                   
                    className="flex items-center bg-white rounded-lg  p-4"
                  >
                    <img
                      src={clockImage}
                      alt="Blog Thumbnail"
                      className="w-24 h-24 rounded-lg mr-4"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <p className="text-sm font-medium mr-2">Soubhik Mridha</p>
                        <p className="text-sm text-gray-500">December 12, 2024</p>
                      </div>
                      <h3 className="text-md font-bold mb-1">
                        5-Minute Morning Routine to Boost Productivity
                      </h3>
                      <p className="text-gray-600 text-sm">
                        In today’s fast-paced world, staying ahead means constantly
                        learning and adapting.
                      </p>
                      <p className="text-gray-600 text-sm">
                        In today’s fast-paced world, staying ahead means constantly
                        learning and 
                      </p>
                      <p className="text-gray-600 text-sm">
                        In today’s fast-paced world, staying ahead means constantly
                        
                      </p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default FeaturedBlogPost