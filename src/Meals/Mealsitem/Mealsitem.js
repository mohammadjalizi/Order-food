import Mealsitemform from "./Mealitemform";
const Mealsitem=props=>{
    const price=`$${props.price.toFixed(2)}`;
return(
    <li>

<div><h3>{props.id}</h3></div>
<div><h1>{props.name}</h1></div>
<div>{props. descripchion}</div>
<div>{price}</div>
<div className=" text-right"> <Mealsitemform/> </div>
</li>
)


}
export default Mealsitem;