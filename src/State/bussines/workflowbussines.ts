import { FaseStep } from "../../Enum/FaseStep";
import { IWorkFlow } from "../../Interface/IWorkFlow";

export const workflowBussines = (wf: IWorkFlow) => {
  if (wf.titulo.trim().length <= 0) throw new Error("Título em branco.");

  if (wf.descricao.trim().length <= 0) throw new Error("Descrição em branco.");

  const agora = new Date();
  if (!(wf.dataEntrega instanceof Date && !isNaN(wf.dataEntrega.valueOf()))) {
    throw new Error("Data escolhida inválida.");
  }
  if (new Date(wf.dataEntrega.toDateString()).valueOf()
       < new Date(agora.toDateString()).valueOf()) {
    throw new Error(
      "Workflow não pode ser cadastrado com data menor do que atual."
    );
  }
};

export const workflowBussinesStep = (newStep: FaseStep, oldStep: FaseStep) => {
  return (Object.values(FaseStep).indexOf(oldStep) <  Object.values(FaseStep).indexOf(newStep));
};