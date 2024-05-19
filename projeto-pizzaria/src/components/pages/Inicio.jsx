import styles from './Inicio.module.css'
import { Link } from 'react-router-dom';
import logo from '../../../img/imgPizza.png'
import Footer from '../layout/Footer';
import Button from '../submit/Button';

function Inicio(){
    return(
        <>
            <section  className={styles.container}>
                <div> 
                    <div>
                        <h1>MELHOR PIZZA <br/>DA REGIÃO</h1>
                    </div>
                    <div className={styles.butao}>
                        <Link to="/pedido"><Button text="FAZER PEDIDO" margin="2%  6%" /></Link>
                        
                    </div>
                </div>
                <div>
                    <img src={logo}/>
                </div>

            
            </section>
            <Footer/>
        </>
    )
}
export default Inicio;
