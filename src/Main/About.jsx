import React from 'react'
import Card from './Card';
import { div, image, view } from 'framer-motion/client';


function About() {

const people = [
        
       {
        name: "John Doe",
        image: "https://media.istockphoto.com/id/1253877157/photo/african-businessman-sitting-at-workplace-thinking-over-problem-solution.webp?a=1&b=1&s=612x612&w=0&k=20&c=XqAzIxlDWKstVW9vMC4DLNWqzW0bzY2VC-7zbJmMF-8=",
        mutual_friends: 123,
       },
       {
        name: "Hane Lopez",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVabo5uZFVzvhZIK67YraAnXZxwmD9lU6bA&s",
        mutual_friends: 45,
       },
       {
        name: "Bob Smith",
        image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        mutual_friends: 78,
       },
       {
        name: "Young Kim",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61WNyhoeqAmNHOXYlte2EUirf-bcu-G5SHg&s",
        mutual_friends: 190,
       },
       {
        name: "william smith",
        image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtZXJpY2FuJTIwcGVvcGxlfGVufDB8fDB8fHww",
        mutual_friends: 168,
       },
       {
        name: "Buudhadev Maity",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFWby-88q9M2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692926330433?e=2147483647&v=beta&t=SstSuDOvSCfqZYls_w1I1QUqib9AJ9daejyRxVLIt9I",
        mutual_friends: 323,
       },
      
    ];

  return (
    <div >
       {people.map((person, index) => (
        <div key={index}>
            <Card user={person} />
        </div>
      ))}
    </div>
  )
  
}

export default About