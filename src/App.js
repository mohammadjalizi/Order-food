import Meals from './Meals/Meals';
import './App.css';
import Header from './LAYOUT/Header';
import Cart from './Cart/Cart';
function App() {
  return (
    <div className="App">
<Header/>
<Cart/>

<main>
<Meals/>
  
</main>
    </div>
  );
}

export default App;
