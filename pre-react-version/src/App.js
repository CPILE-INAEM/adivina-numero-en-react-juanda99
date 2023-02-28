import './App.css';
import Aviso from './Aviso.js';
import Header from './Header.js';
import Contador from './Contador.js';

function App() {
  return (
    <div className="App">
      <Header titulo="Esta es la página principal" />
      <p>Párrafo de prueba</p>
      <Contador />
      <Aviso />
    </div>
  );
}

export default App;
