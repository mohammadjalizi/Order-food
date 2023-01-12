import React from 'react'
import { useState } from 'react'
import './proudoct.css'
function Proudoct({Proudoct}) {
  const[count,setCount]=useState(0)
  return (
    <div className='proudoct m-2 h-auto '>

<div className=' img'>

<img className='  photo' src={Proudoct.img}/>
</div>
<div className=' price  bg-orange-600 '>   
<span> nmae: {Proudoct.name}  </span>
<span>  price: {Proudoct.price}  </span>

</div>
<div className=' flex justify-center items-center '>
<button className=' w-[30px] h-[30px] '>-</button>
<h4 className=' px-[1rem] '>{count} </h4>
<button className=' w-[30px] h-[30px] '>+</button>


</div>

    </div>
  )
}

export default Proudoct