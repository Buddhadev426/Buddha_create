
import React from 'react'
import femaleImage from '../assets/image.png'
import clockImage from '../assets/image (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function FeaturedBlogPost() {
    return (
        <div className="bg-gray-50 min-h-screen pl-20 pr-20">
          {/* Page Title */}
          
          <div className="container mx-auto ">
            <div className='flex justify-between'>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Blog Posts</h2>
            <a href="#" className="text-blue-600 hover:underline font-bold">
           See all &rarr;
           </a>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-50 ">
              {/* Left: Featured Blog */}
              <div className="lg:col-span-2  rounded-lg bg-gray-50">
                <img
                  src={femaleImage}              
                  alt="Featured Blog"
                  className=" w-full h-50 rounded-lg mb-4"
                />
                <div className="flex items-center mb-2">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFWby-88q9M2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692926330433?e=2147483647&v=beta&t=SstSuDOvSCfqZYls_w1I1QUqib9AJ9daejyRxVLIt9I"
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h6 className="text-sm font-medium">Buddhadev Maity | January 16, 2025</h6>
                    
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Why Minimalism is the Key to Modern Design
                </h2>
                <p className=" text-sm font-medium text-gray-600 pt-4">
                  In a cluttered world, less is more. Minimalist design emphasizes
                  clarity, simplicity, and purpose. By stripping away the
                  unnecessary, you allow users to focus on what truly matters.
                  Whether it’s a sleek interface or a clean graphic, minimalism not
                  only looks modern but enhances functionality. Next time you
                  design, ask yourself: “What can I remove to improve this?”
                </p>
              </div>
    
              {/* Right: Blog Cards */}
              <div className='bg-gray-50'>
                
                  <div
                   
                    className="flex items-center bg-white rounded-lg w-full mb-10 bg-gray-50"
                  >
                    <img
                      src={clockImage}
                      alt="Blog Thumbnail"
                      className="w-30 h-24 rounded-lg mr-4 bg-gray-50"
                    />
                    <div className='bg-gray-50'>
                      <div className="flex items-center mb-1">
                        <p className='text-xs'>Soubhik Mridha | December 12, 2024</p>
                        
                      </div>
                      <h3 className="text-md font-bold mb-1">
                        5-Minute Morning Routine to Boost Productivity
                      </h3>
                      <p className="text-gray-600 text-xs">
                        In today’s fast-paced world, staying ahead means constantly
                        learning and adapting.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div
                   
                    className="flex items-center bg-white rounded-lg w-full mb-10 bg-gray-50"
                  >
                    <img
                      src={clockImage}
                      alt="Blog Thumbnail"
                      className="w-30 h-24 rounded-lg mr-4 bg-gray-50"
                    />
                    <div className='bg-gray-50'>
                      <div className="flex items-center mb-1 bg-gray-50">
                        <p className='text-xs'>Soubhik Mridha | December 12, 2024</p>
                        
                      </div>
                      <h3 className="text-md font-bold mb-1">
                        Top 3 Budget-Friendly Travel Hacks.
                      </h3>
                      <p className="text-gray-600 text-xs">
                      In today’s fast-paced world, staying ahead means constantly learning and adapting.In today's fast-paces world, staying ahead means constantly learning and adapting.
                      </p>
                      
                    </div>
                    
                  </div>
                  <div
                   
                   className="flex items-center bg-white rounded-lg w-full mb-10 bg-gray-50"
                 >
                   <img
                     src={clockImage}
                     alt="Blog Thumbnail"
                     className="w-30 h-24 rounded-lg mr-4 bg-gray-50"
                   />
                   <div className='bg-gray-50'>
                     <div className="flex items-center mb-1">
                       <p className='text-xs'>Soubhik Mridha | December 12, 2024</p>
                       
                     </div>
                     <h3 className="text-md font-bold mb-1">
                       5-Minute Morning Routine to Boost Productivity
                     </h3>
                     <p className="text-gray-600 text-xs">
                     In today’s fast-paced world, staying ahead means constantly learning and adapting.In today's fast-paces world.
                     </p>
                     
                   </div>
                   
                 </div>
                <div
                   
                   className="flex items-center bg-white rounded-lg w-full mb-10 bg-gray-50"
                 >
                   <img
                     src={clockImage}
                     alt="Blog Thumbnail"
                     className="w-30 h-24 rounded-lg mr-4 bg-gray-100"
                   />
                   <div className='bg-gray-50'>
                     <div className="flex items-center mb-1">
                       <p className='text-xs'>Soubhik Mridha | December 12, 2024</p>
                       
                     </div>
                     <h3 className="text-md font-bold mb-1">
                       Top 3 Budget-Friendly Travel Hacks.
                     </h3>
                     <p className="text-gray-600 text-xs">
                     In today’s fast-paced world, staying ahead means constantly learning and adapting.In today's fast-paces world, staying ahead means constantly learning and adapting.
                     </p>
                    
                     
                   </div>
                   
                   
                 </div>
                 
                 
              </div>
            </div>
          </div>
          
        </div>
      );
    }
    

//     <div className="bg-gray-50 p-8 min-h-screen pl-20 pr-20">
//       <section className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">Featured Blog Posts</h2>
//           <a href="#" className="text-blue-500 font-semibold hover:underline">
//             See all &rarr;
//           </a>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 ">
//           {/* Left Image Section */}
//           <div className="relative md:col-span-2">
//             <img
//               src={femaleImage}
//               alt="Minimalism"
//               className="w-50 h-50 object-cover rounded-lg"
//             />
//              <div className="flex items-center mb-2">
//                   <img
//                     src="https://media.licdn.com/dms/image/v2/D4D03AQFWby-88q9M2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692926330433?e=2147483647&v=beta&t=SstSuDOvSCfqZYls_w1I1QUqib9AJ9daejyRxVLIt9I"
//                     alt="Author"
//                     className="w-10 h-10 rounded-full mr-3"
//                   />
//                   <div className='pt-4'>
//                     <p className="text-sm font-medium">Buddhadev Maity</p>
//                     <p className="text-sm text-gray-500">January 16, 2025</p>
//                   </div>
//                 </div>
//                 <h2 className="text-xl font-bold mb-2">
//                  Why Minimalism is the Key to Modern Design
//                 </h2>
//                 <p className="text-gray-600">
//                   In a cluttered world, less is more. Minimalist design emphasizes
//                   clarity, simplicity, and purpose. By stripping away the
//                   unnecessary, you allow users to focus on what truly matters.
//                  Whether it’s a sleek interface or a clean graphic, minimalism not
//                   only looks modern but enhances functionality. Next time you
//                  design, ask yourself: “What can I remove to improve this?”
//                </p>

//           </div>
            
            
          

//           {/* Right Blog List */}
//           <div className="space-y-6">
//             {/* Blog Post 1 */}
//             <div className="flex items-start gap-4 bg-white shadow rounded-lg p-4">
//               <img
//                 src={clockImage}
//                 alt="Post Image"
//                 className="w-24 h-20 object-cover rounded"
//               />
//               <div>
//               <p className="text-sm text-gray-500">Soubhik Mridha | December 12, 2024</p>
//                 <h4 className="text-lg font-bold text-gray-800">
//                   5-Minute Morning Routine to Boost Productivity
//                 </h4>
                
//                 <p className="mt-2 text-sm text-gray-600">
//                   In today’s fast-paced world, staying ahead means constantly learning and
//                   adapting.
//                 </p>
//               </div>
//             </div>

//             {/* Blog Post 2 */}
//             <div className="flex items-start gap-4 bg-white shadow rounded-lg p-4 w-full">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Post Image"
//                 className="w-30 h-30 object-cover rounded"
//               />
//               <div>
//                 <h4 className="text-lg font-bold text-gray-800">
//                   Top 3 Budget-Friendly Travel Hacks
//                 </h4>
//                 <p className="text-sm text-gray-500">Soubhik Mridha | December 12, 2024</p>
//                 <p className="mt-2 text-sm text-gray-600">
//                   In today’s fast-paced world, staying ahead means constantly learning and
//                   adapting.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


export default FeaturedBlogPost