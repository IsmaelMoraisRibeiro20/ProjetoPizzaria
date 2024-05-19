import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

function NavBar(){
   
    return(
        
        <header>
            <div className={styles.w50}>
                <h1>PIZZARIA</h1>
            </div>

            <div className={styles.w50}>
                <ul>

                    <li>
                        <Link to='/inicio' >INICIO</Link>
                    </li>
                    <li>
                        <Link to='/'>CONTATO</Link>
                    </li>
                    
                    <li>
                        <Link to='/cardapio'>CARDAPIO</Link>
                    </li>
                    <li>
                        <Link to='/localizacao'>LOCALIZAÇÃO</Link>
                    </li>
                </ul>
            </div>
            
        </header>
        
    )
}
export default NavBar;