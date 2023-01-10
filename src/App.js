import { useState } from "react";
import Header from "./Header";
import Compennet4 from "./Compennet4";
import Data from "./Data";
import Loading from "./Loading";

const App=()=> {
const[loading,setloading]=useState(true);

  return (
   <>
<Header/>


<button onClick={()=>setloading (!loading)} >chanhloading</button>
<hr/>
{
loading ? <loading/>  :  <Data/>

}
   </>

  );
}

export default App;
