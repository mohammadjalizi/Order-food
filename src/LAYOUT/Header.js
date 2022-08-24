import { Fragment } from "react";
import img  from  "../Meals/img1.webp"
import Headercartbutton from "./Headercartbutton";
const Header=()=>{

return(
    <Fragment>  
    <header className=" flex justify-between bg-red-300 m-0">
    <h1>ReactMeals</h1>
    <Headercartbutton/>
        </header>
        <div> 
    <img src={img} className=" h-48 border -left-44 mt-2 bg-cover bg-center w-full"></img>
            
        </div>
        </Fragment>
)

}
export default Header;