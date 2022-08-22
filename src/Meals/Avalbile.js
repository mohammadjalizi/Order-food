import Card from "../Cart/Card"

const DUmmy=[
{
id:'m1',
name:'sushi',
descripchion:'fineshedprice',
price:22.29,

},
{
    id:'m2',
    name:'sushi',
    descripchion:'fineshedprice',
    price:22.29,
    
    },
    {
        id:'m3',
        name:'sushi',
        descripchion:'fineshedprice',
        price:22.29,
        
        },
            

]

const Avalbile=props=>{
const mealis=DUmmy.map(meal=><li>{meal.name}</li>)
return(
    <Card>  

<ul className=" text-left ml-7 ">
{mealis}

</ul>
</Card>

)

}
export default Avalbile;