import module from "./Modal";

const Cart=props=>{
    const cartitem=[{id:'c1',name:'sushi',amounth:2,price:12.29}].map((item)=><li>{item.name}</li>)
return(
<module>
<div className=" bg-lime-300 relative bottom-14 w-2/4  left-96 p-6"> 
<div className=" text-left list-none"> 
{cartitem}
</div>
<div className=" flex justify-between"> 
<span>totalamounth</span>
<span  className=" p-1">35.6</span>
</div>
<button className=" bg-white text-red border float-right" >close</button>
</div>
</module>
)


}
export default Cart;