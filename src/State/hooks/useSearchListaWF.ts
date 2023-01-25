import { useRecoilValue } from "recoil";
import { WorkFlowsFiltradosState } from "../Seletores";

const useSearchListaWF = () => {
    return useRecoilValue(WorkFlowsFiltradosState);
}


export default useSearchListaWF;