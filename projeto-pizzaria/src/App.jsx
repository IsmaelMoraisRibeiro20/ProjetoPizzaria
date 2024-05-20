import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import NavBar from "./components/layout/NavBar"

import Contato from './components/pages/Contato';
import Inicio from './components/pages/Inicio';
import Localizacao from './components/pages/Localizacao';
import Cardapio from './components/pages/Cardapio';
import Pedido from './components/pages/Pedido';

import FinalizaPedido from './components/pagamento/FinalizaPedido'

function App() {
  

  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path='/' exact Component={Contato}/>
        <Route path='/inicio' Component={Inicio}/>
        <Route path='/localizacao' Component={Localizacao}/>
        <Route path='/cardapio' Component={Cardapio}/>
        <Route path='/pedido' Component={Pedido}/>

        <Route path='/finalizarPedido' Component={FinalizaPedido}/>
       
      </Routes>

      
    </Router>

   
  )
}

export default App
