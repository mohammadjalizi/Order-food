import { useState } from "react";
import Header from "./Header";
import Compennet4 from "./Compennet4";


const App=()=> {
const[name,setname]=useState("sokanakadim");

  return (
   <>
<Header/>
<Compennet4 nameprop={name} />
   </>

  );
}

export default App;
