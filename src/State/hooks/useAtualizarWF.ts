import { useSetRecoilState } from "recoil";
import { IWorkFlow } from "../../Interface/IWorkFlow";
import { listaWFState } from "../atom";
import { workflowBussines } from "../bussines/workflowbussines";

const useAtualizarWf = () => {
  const setListaWF = useSetRecoilState<IWorkFlow[]>(listaWFState);
  return (wf: IWorkFlow) => {
    workflowBussines(wf);
    return setListaWF((listaOld) => {
      const indice = listaOld.findIndex((evt) => evt.id === wf.id);
      return [
        ...listaOld.slice(0, indice),
        wf,
        ...listaOld.slice(indice + 1, listaOld.length),
      ];
    });
  };
};
export default useAtualizarWf;
