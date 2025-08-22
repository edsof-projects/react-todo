import styles from './Botao.module.css';

const Botao = (props) => {
  const classes = `
  ${styles.botao}
  ${props.pequeno ? styles.pequeno : ''}
  ${props.complete ? styles.complete : ''}
  ${props.remove ? styles.remove : ''}
`;

  return (
    <button className={classes} onClick={props.onClick}>
      {props.texto}
    </button>
  );
};

export default Botao;
