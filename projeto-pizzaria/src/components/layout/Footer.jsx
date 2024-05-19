import styles from './Footer.module.css'
import LogoWhatsapp from '../../../img/whatsapp.png'
import LogoInstragram from '../../../img/instagram .png'
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer className={styles.footer}>

            <div className={styles.imagem}>
                <div>
                   <Link><img src={LogoWhatsapp}/> </Link>
                </div>
                <div>
                    <Link><img src={LogoInstragram}/></Link> 
                </div>
            </div>
            <div>
                <p>Pizza é a nossa paixão, e fazer você voltar é a nossa missão</p>
            </div>

            <div className={styles.w20}></div>
        </footer>
    )
}

export default Footer;