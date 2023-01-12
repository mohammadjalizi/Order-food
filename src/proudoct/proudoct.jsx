import React from 'react'
import { useState } from 'react'
import './proudoct.css'
function Proudoct({Proudoct}) {
  const[count,setCount]=useState(0)

  const increase=()=>{

    let curunCounte=parseInt(count)
    setCount(curunCounte  + 1)
  }
  
const decrease =()=>{

  let curunCounte=parseInt(count)

  if (curunCounte >0){
    setCount(curunCounte - 1)

  }else{

    alert("you not can")
  }

}



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
<button  onClick=  {decrease}   className=' w-[30px] h-[30px] '>-</button>
<h4 className=' px-[1 rem] '>{count} </h4>
<button onClick=  {increase}  className=' w-[30px] h-[30px] '>+</button>


</div>

    </div>
  )
}

export default Proudoct