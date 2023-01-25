import style from "./Card.module.scss";
import classNames from "classnames";
import { useModal } from "../Modal/Modal";
import ShowWFModal from "../Modal/ShowWFModal/ShowWFModal";
import { IWorkFlow } from "../../Interface/IWorkFlow";

interface carProp {
  workFlow: IWorkFlow;
}

const Card = ({ workFlow }: carProp) => {
  const { isShowing, toggle } = useModal();
  const drag = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.dataTransfer.setData("text", workFlow.id||'');
  };

  return (
    <div
      onClick={() => {
        !isShowing && toggle();
      }}
      className={classNames(style.card, style.card__prioridade_baixa_cabecalho, style.card__prioridade_baixa_conteudo)}
      draggable={true}
      onDragStart={drag}
    >
      <ShowWFModal isShowing={isShowing} toggle={toggle} workFlow={workFlow} />
      <label className={style.card__titulo}>{workFlow.titulo}</label>
      <p
        className={classNames(
          style.card__descritivo
        )}
      > 
        {workFlow.descricao}
      </p>
    </div>
  );
};

export default Card;
