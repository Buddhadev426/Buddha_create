import React from 'react'
import { useDataFlowContext } from '../Context/Dataflow'

function Weather() {

    const {firstName} = useDataFlowContext();
    
  return (
    <div>{firstName}</div>
  )
}

export default Weather