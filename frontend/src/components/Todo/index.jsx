import Botao from '../Botao/';
import styles from './Todo.module.css';

const Todo = ({ item }) => {
  return (
    <div className={styles.todo}>
      <div className="content">
        <p>{item.text}</p>
        <p>({item.category})</p>
      </div>
      <div className="acoes">
        <Botao texto="Completar" complete/>
        <Botao texto="X" pequeno remove />        
      </div>
    </div>
  );
};

export default Todo;
