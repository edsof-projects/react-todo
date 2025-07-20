import Botao from '../Botao/';
import BotaoDel from '../BotaoDel';
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
        <BotaoDel texto="X" />
      </div>
    </div>
  );
};

export default Todo;
