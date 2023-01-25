import { useSetRecoilState } from "recoil";
import { IWorkFlow } from "../../Interface/IWorkFlow";
import { listaWFState } from "../atom";
import { v4 as uuidv4 } from "uuid";
import {workflowBussines} from "../bussines/workflowbussines";
import { FaseStep } from "../../Enum/FaseStep";

const useAdicionarWF = () => {
  const setListaWF = useSetRecoilState<IWorkFlow[]>(listaWFState);
  return (wf: IWorkFlow) => {
    workflowBussines(wf);
    wf.id = uuidv4();
    wf.step = FaseStep.todo;
    return setListaWF((listaOld) => [...listaOld, wf]);
  };
};

export default useAdicionarWF;
