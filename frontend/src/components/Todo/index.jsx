import Botao from '../Botao/';
import styles from './Todo.module.css';

const Todo = ({ item }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.content}>
        <p className={styles.texto}>{item.text}</p>
        <p className={styles.categoria}>({item.category})</p>
      </div>
      <div className={styles.acoes}>
        <Botao texto="Completar" complete/>
        <Botao texto="X" pequeno remove />        
      </div>
    </div>
  );
};

export default Todo;
