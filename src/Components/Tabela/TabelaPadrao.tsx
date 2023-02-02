import styles from "./TabelaPadrao.module.scss";
import { useEffect, useState } from "react";
import useSearchListaWF from "../../State/hooks/useSearchListaWF";
import { IFiltroDeWF } from "../../Interface/IFiltroDeWF";
import { filtroDeWF } from "../../State/atom";
import { useSetRecoilState } from "recoil";
import ShowWFModal from "../Modal/ShowWFModal/ShowWFModal";
import { useModal } from "../Modal/Modal";
import { IWorkFlow } from "../../Interface/IWorkFlow";
import BotaoDefault from "../Botao/BotaoDefault/BotaoDefault";
import { FaseStep } from "../../Enum/FaseStep";
import DeleteWFModal from "../Modal/DeleteWFModal/DeleteWFModal";
import classNames from "classnames";
interface IPropsTabela {
  busca: string;
}

const TabelaPadrao = ({ busca }: IPropsTabela) => {
  const setFiltroDeWF = useSetRecoilState<IFiltroDeWF>(filtroDeWF);
  const listWf = useSearchListaWF();
  const { isShowing, toggle } = useModal();
  const [delShow, setDelShow] = useState(false);
  const [detail, setDetail] = useState(-1);

  const workflow: IWorkFlow = {
    id: undefined,
    titulo: "",
    descricao: "",
    dataEntrega: new Date(),
    arquivo: "",
    step: FaseStep.todo,
  };

  const [workFlow, setWorkFlow] = useState<IWorkFlow>(workflow);

  useEffect(() => {
    const filtro: IFiltroDeWF = {};

    if (busca) filtro.search = busca;
    else filtro.search = "";

    setFiltroDeWF(filtro);
  }, [busca]);

  const onShowButton = (index: number) => {
    if (detail !== index) setDetail(index);
    else setDetail(-1);
  };
  return (
    <>
      <ShowWFModal
        isShowing={isShowing && !delShow}
        toggle={toggle}
        workFlow={workFlow}
      />
      <DeleteWFModal
        isShowing={isShowing && delShow}
        toggle={toggle}
        workFlow={workFlow}
      />
      <table className={styles.styled_table}>
        <thead>
          <tr>
            <th className={styles.styled_table__title}>Titulo</th>
            <th>Data</th>
            <th>Fase</th>
            <th className={styles.styled_table__mobile}></th>
            <th className={styles.styled_table__desktop}></th>
            <th className={styles.styled_table__desktop}></th>
          </tr>
        </thead>
        <tbody>
          {listWf.map((item, index) => (
            <>
              <tr key={index}>
                <td>
                  <p className={styles.styled_table__descritivo}>
                    {item.titulo}
                  </p>
                </td>
                <td>{item.dataEntrega.toLocaleDateString()}</td>
                <td>{item.step}</td>
                <td className={styles.styled_table__mobile}>
                  <div
                    className={classNames({
                      [styles.styled_table__botao]: true,
                    })}
                  >
                    <i
                      onClick={() => onShowButton(index)}
                      className={styles.styled_table__icon_threedot}
                    ></i>
                  </div>
                </td>
                <td className={styles.styled_table__desktop}>
                  <div className={styles.styled_table__botao}>
                    <BotaoDefault
                      type="button"
                      onClick={() => {
                        setWorkFlow(item);
                        setDelShow(false);
                        !isShowing && toggle();
                      }}
                    >
                      <i className={styles.styled_table__icon_details}></i>
                    </BotaoDefault>
                  </div>
                </td>
                <td className={styles.styled_table__desktop}>
                  <div className={styles.styled_table__botao}>
                    <BotaoDefault
                      type="button"
                      nipple="danger"
                      onClick={() => {
                        setWorkFlow(item);
                        setDelShow(true);
                        !isShowing && toggle();
                      }}
                    >
                      <i className={styles.styled_table__icon_delete}></i>
                    </BotaoDefault>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.styled_table__td_span} colSpan={6}>
                  <div
                    className={classNames({                     
                      [styles.styled_table__tooltip]: true,
                      [styles.styled_table__tooltip_not_visible]: detail !== index,
                      [styles.styled_table__tooltip_visible]: detail === index,
                    })}
                  >
                    <div className={styles.styled_table__botao}>
                      <BotaoDefault
                        type="button"
                        onClick={() => {
                          setWorkFlow(item);
                          setDelShow(false);
                          !isShowing && toggle();
                        }}
                      >
                        <i className={styles.styled_table__icon_details}></i>
                      </BotaoDefault>
                    </div>

                    <div className={styles.styled_table__botao}>
                      <BotaoDefault
                        type="button"
                        nipple="danger"
                        onClick={() => {
                          setWorkFlow(item);
                          setDelShow(true);
                          !isShowing && toggle();
                        }}
                      >
                        <i className={styles.styled_table__icon_delete}></i>
                      </BotaoDefault>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TabelaPadrao;
