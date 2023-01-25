import { useRecoilValue } from "recoil";
import { listaWFState } from "../atom";

const useListaWF = ()=>{
    return useRecoilValue(listaWFState);
}
export default useListaWF;