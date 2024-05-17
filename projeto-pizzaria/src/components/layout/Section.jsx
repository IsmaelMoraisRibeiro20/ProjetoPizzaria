import styles from './Section.module.css'
import logo from '../../../img/imgPizza.png'

function Section(){
    return(
        <section  className={styles.container}>
            <div > 
                <h1>MELHOR PIZZA DA REGIÃO</h1>
                <div>
                    <button className={styles.btnPedido}>FAZER PEDIDO</button>
                    <button className={styles.btnMenu}>NOSSO MENU</button>
                </div>
            </div>
            <div>
                <img src={logo}/>
            </div>
        </section>
    )
}
export default Section;