import { FaseStep } from "../../Enum/FaseStep";
import useListaWF from "./useListaWF";

interface IStep {
    step: FaseStep 
}

const useStepListaWF = ({step}:IStep)=>{
    const wfs = useListaWF();
    const onlyStep = wfs.filter(wf => {
        return wf.step === step;
    });
    return onlyStep;
}
export default useStepListaWF;