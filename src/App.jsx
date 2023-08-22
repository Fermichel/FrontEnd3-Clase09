
import './App.css'
import Pizza from "./Pizza"

function App() {
 
  return (
    <div className="App">
     <h1>¡Bienvenido a la Pizzería!</h1>
      <Pizza tipoPizza="Napolitana"/>
      <Pizza tipoPizza="Peperoni"/>
    </div>
  );
}

export default App
