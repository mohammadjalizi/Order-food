import Mealsitemform from "./Mealitemform";
const Mealsitem=props=>{
    const price=`$${props.price.toFixed(2)}`;
return(
    <li>
<div>
<h3>{props.name}</h3>
<div>{props. descripchion}</div>
<div>{props.price}</div>

</div>
<div className=" text-right"> <Mealsitemform/> </div>
</li>
)


}
export default Mealsitem;