import styles from './FinalizarPedido.module.css'
import React, { useState } from 'react';
import LogoPizzaria from '../../../img/PizzariaLogo.png'
import { Link } from 'react-router-dom';

function FinalizaPedido(){

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleRadioChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    return(

        <div className={styles.container}>

            <div>
                <div className={styles.logo}>
                    <img src={LogoPizzaria}/>
                </div>
            </div>

            <div className={styles.inputs}>
                <label>Nome</label>
                <input type='text' placeholder='Digite seu Nome'/>

                <label>Telefone</label>
                <input type='number' placeholder='(00) 00000-0000'/>

                <div className={styles.enderecos}>

                    <div className={styles.rua}>
                        <label>Endereço</label>
                        <input type='text' placeholder='Digite seu Endereço'/>
                    </div>

                    <div className={styles.referencias}>
                        <label>Ponto de Referência</label>
                        <input type='text' placeholder='Ponto de Referência'/>
                    </div>

                    
                </div>
                <p>Formas de Pagamento</p>
                    <div className={styles.formaPagamento } >
                        
                        <div className={styles.radioInput}>

                            <label className={styles.labelDinheiro}>
                                <input type="radio"  name="payment" value="Dinheiro" checked={selectedPaymentMethod === 'Dinheiro'} onChange={handleRadioChange}/>
                                <h4>Dinheiro</h4>
                            </label>

                            <label  className={styles.labelPix}> 
                                <input type="radio"   name="payment" value="pix" checked={selectedPaymentMethod === 'pix'} onChange={handleRadioChange}/>
                                <h4>Pix</h4>
                            </label>
                        </div>
                        
                        
                        <div className={styles.numeroCasa}>
                            <label>Numero da casa</label>
                            <input type='text' placeholder='Digite Numero da casa'/>
                        </div>
                        
                    </div>

                    <label>Troco</label>
                    <input type='number' placeholder='Digite o Troco'/>

                    <div className={styles.buttonsVoltarConfirmar}>
                        <Link to='/pedido'><button>VOLTAR</button></Link>
                        <Link><button className={styles.buttonConfirma}>COMFIRMA</button></Link>
                    </div>
                    
                </div>
            </div>


    )
}
export default FinalizaPedido;