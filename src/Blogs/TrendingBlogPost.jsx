import React from 'react'
import femaleImage from '../assets/image.png'
import DangerImage from '../assets/image (2).png'

function TrendingBlogPost() {
  return (
    
        <div className="bg-gray-50 p-8 min-h-screen pl-20 pr-20">
          <section className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Trending Blog Posts</h2>
              <a href="#" className="text-blue-600 font-bold hover:underline">
                See all &rarr;
              </a>
            </div>
    
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50">
              {/* Blog Post 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={femaleImage}
                  alt="Minimalism"
                  className="w-full h-80 object-cover  rounded-lg"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500">Sourav Mridha | December 12, 2024</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-2">
                    Why Minimalism in Modern Design
                  </h3>
                  <p className="mt-2 text-xs text-gray-600">
                    In a cluttered world, less is more. Minimalist design emphasizes clarity,
                    simplicity, and purpose. By stripping away the unnecessary, you allow
                    users to focus on what truly matters.
                  </p>
                </div>
              </div>
    
              {/* Blog Post 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={DangerImage}
                  alt="Danger Quote"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500">Sourav Mridha | December 12, 2024</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-2">
                    Why Minimalism is the Key ?
                  </h3>
                  <p className="mt-2 text-xs text-gray-600">
                    In a cluttered world, less is more. Minimalist design emphasizes clarity,
                    simplicity, and purpose. By stripping away the unnecessary, you allow
                    users to focus on what truly matters.
                  </p>
                </div>
              </div>
    
              {/* Blog Post 3 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={femaleImage}
                  alt="Minimalism"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500">Sourav Mridha | December 12, 2024</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-2">
                    The Key of Modern Design.
                  </h3>
                  <p className="mt-2 text-xs text-gray-600">
                    In a cluttered world, less is more. Minimalist design emphasizes clarity,
                    simplicity, and purpose. By stripping away the unnecessary, you allow
                    users to focus on what truly matters.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    


export default TrendingBlogPost