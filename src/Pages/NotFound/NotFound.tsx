import { useNavigate } from "react-router-dom";
import BotaoDefault from "../../Components/Botao/BotaoDefault/BotaoDefault";
import style from "./NotFound.module.scss";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.svgContent}>
        <BotaoDefault type="button" children={"< Voltar"} onClick={() => {
            navigate(-1);
          }} />
      </div>
    </div>
  );
};

export default NotFound;
