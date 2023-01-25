import FormPadrao from "../../Components/Form/FormPadrao";
import InputPadrao from "../../Components/Inputs/InputPadrao/InputPadrao";
import TabelaPadrao from "../../Components/Tabela/TabelaPadrao";
import {useState} from "react";

const Historico = () => {
  const [busca, setBusca] = useState("");
  return (
    <FormPadrao>
      <InputPadrao
        id="buscar"
        tipo="text"
        titulo="Buscar:"
        placeholder="Será pesquisado por Título"
        valor={busca}
        aoAlterado={(valor) => setBusca(valor)}
      />
      <TabelaPadrao busca={busca}/>
    </FormPadrao>
  );
};
export default Historico;
