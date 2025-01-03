import React from 'react'
import Card from './Card';
import { div } from 'framer-motion/client';


function About() {

const people = [
        { name: "Alice",
          designation: "Product Manager",
          image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
       {
        name: "Bob",
        designation: "React.js Developer",
        image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
       },
       {
        name: "Jane",
        designation: "Data Scientist",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
       },
       {
        name: "Emily",
        designation: "UX Designer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
       },
    ];

  return (
    <div>
       {people.map((person, index) => (
        <div key={index}>
            <Card user={person} />
        </div>
      ))}
    </div>
  )
  
}

export default About