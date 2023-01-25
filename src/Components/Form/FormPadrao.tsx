import styles from "./FormPadrao.module.scss";

interface IProps  {
    children?: React.ReactNode;
    onSubmit?:() => void;
  };

const FormPadrao = ({...props}:IProps) => {

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (props.onSubmit)
       props.onSubmit();
}

    return(
        <form onSubmit={aoSalvar} className={styles.formPadrao}>
          {props.children}
        </form>
    );

}

export default FormPadrao;