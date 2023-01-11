
 import Navbar from "./navbar/Navbar";
import Proudocts from "./proudoct/Proudocts";
import Footer from "./footer/Footer";
import Proudocts1 from "./Data/proudocts1";
const App=()=> {

  return (
   <>
<Navbar/>
<Proudocts proudoctData={Proudocts1}/>
<Footer/>
   </>

  );
}

export default App;
