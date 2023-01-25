import { useSetRecoilState } from "recoil";
import { FaseStep } from "../../Enum/FaseStep";
import { IWorkFlow } from "../../Interface/IWorkFlow";
import { listaWFState } from "../atom";
import { workflowBussinesStep } from "../bussines/workflowbussines";

const useAtualizarStepWF = () => {
  const setListaWF = useSetRecoilState<IWorkFlow[]>(listaWFState);
  return (id:string, newStep:FaseStep) => {
    return setListaWF((listaOld) => {
      const indice = listaOld.findIndex((evt) => evt.id === id);
      const old = listaOld.find((evt) => evt.id === id);

      const wfAtualizado: IWorkFlow = {
        id: old?.id,
        titulo: old?.titulo||"",
        descricao: old?.descricao||"",
        dataEntrega: old?.dataEntrega||new Date(),
        arquivo: old?.arquivo||"",
        step: old?.step || FaseStep.todo,
      };

      if (workflowBussinesStep(newStep, old?.step||FaseStep.todo)){
        wfAtualizado.step = newStep
        return [
          ...listaOld.slice(0, indice),
          wfAtualizado,
          ...listaOld.slice(indice + 1, listaOld.length),
        ]
      } else return [...listaOld];
    });
  };
};
export default useAtualizarStepWF;
