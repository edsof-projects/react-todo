import styles from './Botao.module.css';

const Botao = (props) => {
  const classes = `${styles.botao} ${props.pequeno ? styles.pequeno : ''}`;

  return (
    <button className={classes}>
      {props.texto}
    </button>
  );
};

export default Botao;
