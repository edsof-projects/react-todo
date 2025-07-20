import Botao from '../Botao/';
import './Todo.module.css';

const Todo = ({ item }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{item.text}</p>
        <p>({item.category})</p>
      </div>
      <div className="acoes">
        <Botao texto="Completar" />
        <Botao texto="X" pequeno/>        
      </div>
    </div>
  );
};

export default Todo;
