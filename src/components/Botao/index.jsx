import styles from './Botao.module.css'

const Botao = (props) =>{
    return(
        <button className={styles.botao}>
            {props.texto}
        </button>
    )
}
export default Botao