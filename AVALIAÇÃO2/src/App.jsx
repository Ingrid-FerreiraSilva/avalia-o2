
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './componentes/Inicio';
import Criar from './componentes/Criar';
import Editar from './componentes/Editar';
import Ler from './componentes/Ler';
import Apagar from './componentes/Apagar';
//import 'bootstrap/dist/css/bootstrap.min.css';

/*function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/criar' element={<Criar />} />
                <Route path='/editar/:id' element={<Editar />} />
                <Route path='/ler/:id' element={<Ler />} />
                <Route path='/apagar/:id' element={<Apagar />} />
            </Routes>
        </BrowserRouter>
    );
}
    
ou-----
COPILOT

export default function App() {
  return (
    <Router>
      <header>
        <h1>CATÁLOGO DE FILMES</h1>
        <nav>
          <Link to="/">INÍCIO</Link>{" | "}
          <Link to="/criar">CRIAR</Link>{" | "}
          <Link to="/editar">EDITAR</Link>{" | "}
          <Link to="/apagar">APAGAR</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/criar" element={<Criar />} />
          <Route path="/ler/:id" element={<Ler />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/apagar" element={<Apagar />} />
        </Routes>
      </main>
    </Router>
  );
}

*/


export default App;
