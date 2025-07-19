import styles from './BotaoDel.module.css'

const BotaoDel = (props) =>{
    return(
        <button className={styles.botaodel}>
            {props.texto}
        </button>
    )
}
export default BotaoDel