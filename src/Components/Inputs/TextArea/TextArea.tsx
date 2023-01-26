import { useState, useEffect } from "react";
import styles from "./TextArea.module.scss";
import classNames from "classnames";

interface ITextArea {
  aoAlterado: (valor: string) => void;
  valor: string;
  id: string;
  titulo: string;
  placeholder: string;
  maxCaracter?: number;
  msgError?: string;
  required?: boolean | undefined;
}

const TextArea = ({ ...props }: ITextArea) => {
  const [valido, setValido] = useState(true);
  const [caracteres, setCaracteres] = useState(0);

  useEffect(()=>{
    setCaracteres(props.valor.length);
  },[props.valor]);

  const aoDigitado = (evento: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.aoAlterado(evento.target.value);
    setCaracteres(evento.target.value.length);
  };

  const onInvalid = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValido(event.currentTarget.validity.valid);
  };

  const onInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValido(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValido(event.currentTarget.validity.valid);
  };

  return (
    <div className={styles.container_area}>
      <label className={styles.container_area__label}>{props.titulo}</label>
      <textarea
        className={classNames({
          [styles.container_area__textarea]: true,
          [styles.container_area__possui_erro_validacao]: !valido,
        })}
        id={props.id}
        placeholder={props.placeholder}
        maxLength={props.maxCaracter}
        value={props.valor}
        onChange={aoDigitado}
        required={props.required}
        onInvalid={onInvalid}
        onInput={onInput}
        onBlur={onBlur}
        autoComplete="off"
      ></textarea>
      <span
        className={classNames({
          [styles.container_area__contador__visible]:
            (props.maxCaracter || 0) <= 0,
        })}
      >{`${caracteres} de ${props.maxCaracter} caracteres`}</span>
      <span
        className={classNames({
          [styles.container_area__error__visible]: valido,
          [styles.container_area__erro_validacao]: !valido,
        })}
      >
        {props.msgError}
      </span>
    </div>
  );
};

export default TextArea;
