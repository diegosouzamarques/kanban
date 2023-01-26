import styles from "./InputPadrao.module.scss";
import classNames from "classnames";
import { useState } from "react";

interface IInputPadrao {
  aoAlterado?: (valor: string) => void;
  valor?: string;
  id: string;
  tipo: "text" | "date" | "file";
  titulo: string;
  maxCaracter?: number;
  placeholder?: string | undefined;
  msgError?: string;
  required?: boolean | undefined;
}

const InputPadrao = ({ ...props }: IInputPadrao) => {
  const [valido, setValido] = useState(true);

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    if (props.aoAlterado) props.aoAlterado(evento.target.value);
  };

  const onInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValido(event.currentTarget.validity.valid);
  };

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValido(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValido(event.currentTarget.validity.valid);
  };

  const nameFile = (str:string) => {
     let reverso = str?.split("").reverse().join("");
     let index = reverso.indexOf('\\');
     return reverso.slice(0, index).split("").reverse().join("");
  };
  return (
    <div className={styles.container_input}>
      <label className={styles.container_input__label}>{props.titulo}</label>
      {props.tipo !== "file" && (
        <input
          className={classNames({
            [styles.container_input__input]: true,
            [styles.container_input__possui_erro_validacao]: !valido,
          })}
          value={props.valor}
          onChange={aoDigitado}
          type={props.tipo}
          id={props.id}
          placeholder={props.placeholder}
          maxLength={props.maxCaracter}
          required={props.required}
          onInvalid={onInvalid}
          onInput={onInput}
          onBlur={onBlur}
          autoComplete="off"
        />
      )}

      {props.tipo === "file" && (
     
          <label data-lblfile  htmlFor="selecao-arquivo"
            className={classNames({
              [styles.container_input__input]: true,
              [styles.container_input__possui_erro_validacao]: !valido,
            })}
          >
           <span>{nameFile(props.valor||"")  || `Escolha uma arquivo`}</span> <i data-iconfile></i>
            <input
              id="selecao-arquivo"
              className={classNames({
                [styles.container_input__visible]: true,
                [styles.container_input__input]: true,
                [styles.container_input__possui_erro_validacao]: !valido,
              })}          
              onChange={aoDigitado}
              type={props.tipo}
              placeholder={props.placeholder}
              required={props.required}
              onInvalid={onInvalid}
              onInput={onInput}
              onBlur={onBlur}
              autoComplete="off"
            />
          </label>

      )}

      <span
        className={classNames({
          [styles.container_input__error__visible]: valido,
          [styles.container_input__erro_validacao]: !valido,
        })}
      >
        {props.msgError}
      </span>
    </div>
  );
};

export default InputPadrao;
