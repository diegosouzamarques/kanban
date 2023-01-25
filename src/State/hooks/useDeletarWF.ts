import { useSetRecoilState } from "recoil";
import { IWorkFlow } from "../../Interface/IWorkFlow";
import { listaWFState } from "../atom";

const useDeletarWF = () =>{
    const setListaWF = useSetRecoilState<IWorkFlow[]>(listaWFState);
    return (wf: IWorkFlow) => {
        setListaWF((listaOld)=>[ ...listaOld.filter(evt => wf.id !== evt.id)]);
    }
}

export default useDeletarWF;