import React from 'react'
import './proudoct.css'
function Proudoct({Proudoct}) {
  return (
    <div className='proudoct m-2 h-auto '>

<div className=' img'>

<img className='  photo' src={Proudoct.img}/>

<div className=' price  bg-orange-600 '>   
<span> nmae: {Proudoct.name}  </span>
<span>  price: {Proudoct.price}  </span>

</div>

</div>
    </div>
  )
}

export default Proudoct