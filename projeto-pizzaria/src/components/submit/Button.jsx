import styles from './Button.module.css'

function Button({text, cor, width, margin,p}){
    return(
        <div>
            <button className={styles.butao} style={{backgroundColor:cor, width:width, margin:margin, p:p}}  >{text}</button>
        </div>
    )
}
export default Button;