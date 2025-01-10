import React from 'react'
import { useDataFlowContext } from '../Context/Dataflow'

function Contact() {

  const {firstName} = useDataFlowContext();


  return (
    <div className='text-2xl font-bold text-blue-500'>
    Contact
    </div>
  )
}

export default Contact