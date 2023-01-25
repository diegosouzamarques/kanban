import { selector } from "recoil";
import { listaWFState, filtroDeWF } from "../atom";

export const WorkFlowsFiltradosState = selector({
  key: "WorkFlowsFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeWF);
    const todosWF = get(listaWFState);

    function testaBusca(title: string) {
      const regex = new RegExp(filtro.search || "", "i");
      return regex.test(title);
    }

    if (filtro.search)
      return todosWF.filter(
        (item) => testaBusca(item.titulo)
      );
    else return todosWF;
  },
});
