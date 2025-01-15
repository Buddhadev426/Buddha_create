import React from 'react'

function PrivetRout({children}) {

const loggedIn = true
if(loggedIn){
    return children
}
else{
    return <h1 className='text-red-500 text-5xl'>Not authrized</h1>
}



  return (
    <div>PrivetRout</div>
  )
}

export default PrivetRout