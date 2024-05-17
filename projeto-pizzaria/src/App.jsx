import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import NavBar from "./components/layout/NavBar"

import Contato from './components/pages/Contato';
import Pedido from './components/pages/Pedido';
import Localizacao from './components/pages/Localizacao';
import Cardapio from './components/pages/Cardapio';


import Section from './components/layout/Section';


function App() {
  

  return (
    <Router>
      <NavBar/>
      
      <Section/>
      
      
      <Routes>
        <Route path='/' exact Component={Contato}/>
        <Route path='/pedido' Component={Pedido}/>
        <Route path='/localizacao' Component={Localizacao}/>
        <Route path='/cardapio' Component={Cardapio}/>
       
      </Routes>

      
    </Router>

   
  )
}

export default App
