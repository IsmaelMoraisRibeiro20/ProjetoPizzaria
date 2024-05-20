import styles from './Pedido.module.css'

import LogoPizzaFrango from '../../../img/pizzafrango.webp'
import LogoPizzaCalabresa from '../../../img/PIZZA-CALABRESA.webp'
import LogoPizzaChocolate from '../../../img/pizza-chocolate.png'
import LogoPizzaPortuguesa from '../../../img/pizza_portuguesa.png'
import LogoPizzaMussarela from '../../../img/pizza-mussarela.png'
import LogoPizzaNapolitano from '../../../img/neapolitan-pizza.png'
import LogoPizzaQuatroQueijo from '../../../img/pizza_quatroQueijo.png'
import LogoPizzaRomeuJulieta from '../../../img/romeu-julieta.png'
import LogoPizzaItaliana from '../../../img/pizza-italianapng.webp'
import LogoPizzaMarguerita from '../../../img/pizza-italianapng.webp'
import { Link } from 'react-router-dom'



function Pedido(){
    return (
        <div className={styles.containerPai}>

            <div className={styles.pizza}>
                <p>PIZZA FRANGO CATUPIRY</p>
                <div className={styles.logopizzaFrango}> 
                    <img src={LogoPizzaFrango} /> 
                </div>

                <div className={styles.buttons}>
                    <select>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <div className={styles.butaoPedido}>
                        <Link to='/finalizarPedido'><button>AVANÇAR</button></Link>
                    </div>
                </div>
                
            </div>
            

            <div className={styles.pizza}>
                <p>PIZZA CALABRESA</p>
                <div className={styles.pizzaCalabresa}> 
                    <img src={LogoPizzaCalabresa} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
                
            </div>


            <div className={styles.pizza}>
                <p>PIZZA DOCE</p>
                <div className={styles.pizzaChocolate}> 
                    <img src={LogoPizzaChocolate} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
            </div>



            <div className={styles.pizza}>
                <p>PIZZA PORTUGUESA</p>
                <div className={styles.logopizzaPortuguesa}> 
                    <img src={LogoPizzaPortuguesa} /> 
                </div>

                <div className={styles.buttons}>
                    <select>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
                
            </div>
            

            <div className={styles.pizza}>
                <p>PIZZA MUSSARELA</p>
                <div className={styles.pizzaMussarela}> 
                    <img src={LogoPizzaMussarela} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
                
            </div>


            <div className={styles.pizza}>
                <p>PIZZA NAPOLITANA</p>
                <div className={styles.pizzaNapolitano}> 
                    <img src={LogoPizzaNapolitano} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
            </div>



            <div className={styles.pizza}>
                <p>PIZZA QUATRO QUEIJO</p>
                <div className={styles.logopizzaquatroQuejo}> 
                    <img src={LogoPizzaQuatroQueijo} /> 
                </div>

                <div className={styles.buttons}>
                    <select>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
                
            </div>
            

            <div className={styles.pizza}>
                <p>PIZZA ROMEU E JULIETA</p>
                <div className={styles.pizzaRomeuJulieta}> 
                    <img src={LogoPizzaRomeuJulieta} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
                
            </div>


            <div className={styles.pizza}>
                <p>PIZZA ITALIANA</p>
                <div className={styles.pizzaItaliana}> 
                    <img src={LogoPizzaItaliana} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
            </div>


            <div className={styles.pizza}>
                <p>PIZZA MARGUERITA</p>
                <div className={styles.pizzaMarguerita}> 
                    <img src={LogoPizzaMarguerita} /> 
                </div>

                <div className={styles.buttons}>
                    <select className={styles.selectTamanhoPizzaCalabresa}>
                        <option>Familia</option>
                        <option>Grande</option>
                        <option>Media</option>
                        <option>Pequena</option>
                    </select>
                    <Link><button >AVANÇAR</button></Link>
                </div>
                
            </div>


           

        </div>
    )
}
export default Pedido;

/*

                
                

                <div className={styles.pizzaFrango}> 
                    
                    <p>PIZZA FRANGO CATUPIRY</p>
                    <img src={LogoPizzaFrango} />
                    
                </div>

                <div className={styles.pizzaFrango}> 
                    
                    <p>PIZZA FRANGO CATUPIRY</p>
                    <img src={LogoPizzaFrango} />
                    
                </div>

                <div className={styles.pizzaFrango}> 
                    
                    <p>PIZZA FRANGO CATUPIRY</p>
                    <img src={LogoPizzaFrango} />
                    
                </div>

                <div className={styles.pizzaFrango}> 
                    
                    <p>PIZZA FRANGO CATUPIRY</p>
                    <img src={LogoPizzaFrango} />
                    
                </div>

                <div className={styles.pizzaFrango}> 
                    
                    <p>PIZZA FRANGO CATUPIRY</p>
                    <img src={LogoPizzaFrango} />
                    
                </div>*/ 