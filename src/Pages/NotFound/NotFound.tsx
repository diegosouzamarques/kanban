import { useNavigate } from "react-router-dom";
import BotaoDefault from "../../Components/Botao/BotaoDefault/BotaoDefault";
import style from "./NotFound.module.scss";
const NotFound = () => {
  const navigate = useNavigate();
  const url =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/91525/potofgold.svg";
  return (
    <div className={style.conteiner}>
      

     <div className={style.conteiner__btn}>
        <BotaoDefault
          type="button"
          children={"< Voltar"}
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>


    </div>
  );
};

export default NotFound;
