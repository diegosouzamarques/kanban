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

interface IPropsTabela {
  busca: string;
}

const TabelaPadrao = ({ busca }: IPropsTabela) => {
  const setFiltroDeWF = useSetRecoilState<IFiltroDeWF>(filtroDeWF);
  const listWf = useSearchListaWF();
  const { isShowing, toggle } = useModal();

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

  return (
    <>
      <ShowWFModal isShowing={isShowing} toggle={toggle} workFlow={workFlow} />
      <table className={styles.styled_table}>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Data</th>
            <th>Fase</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listWf.map((item, index) => (
            <tr key={index}>
              <td>{item.titulo}</td>
              <td>{item.dataEntrega.toLocaleDateString()}</td>
              <td>{item.step}</td>
              <td>
                <div className={styles.styled_table__botao}>
                  <BotaoDefault type="button" onClick={() => { setWorkFlow(item); !isShowing && toggle();}}>
                    <i className={styles.styled_table__icon}></i>
                  </BotaoDefault>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TabelaPadrao;
