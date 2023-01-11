import React from 'react'
import Proudoct from './proudoct'
import './proudoct.css'
function Proudocts({proudoctData}) {
   console.log(proudoctData)
  return (
    <div className=' prodoucts1 '>

{

  proudoctData.map(item=><Proudoct key={item.id} Proudoct={item}/>)
}

    </div>
  )
}

export default Proudocts