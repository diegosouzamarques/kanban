import { useState } from "react";
import FormPadrao from "../../Components/Form/FormPadrao";
import InputPadrao from "../../Components/Inputs/InputPadrao/InputPadrao";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import useAdicionarWF from "../../State/hooks/useAdicionarWF";
import style from "./Cadastro.module.scss";
import BotaoDefault from "../../Components/Botao/BotaoDefault/BotaoDefault";
import ShowSucessoCadastro from "../../Components/Modal/ShowSucessoCadastro/ShowSucessoCadastro";
import { useParams } from "react-router-dom";
import useListaWF from "../../State/hooks/useListaWF";
import { useEffect } from "react";
import useAtualizarWf from "../../State/hooks/useAtualizarWF";
import { IWorkFlow } from "../../Interface/IWorkFlow";
import { FaseStep } from "../../Enum/FaseStep";
import MessageErrorModal from "../../Components/Modal/MessageError/MessageErrorModal";
import { useModal } from "../../Components/Modal/Modal";


const Cadastro = () => {
  const adicionarWF = useAdicionarWF();
  const atualizarWF = useAtualizarWf();
  const { isShowing, toggle } = useModal();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dtentrega, setDtentrega] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const { id } = useParams();
  const listaWF = useListaWF();
  const wf = listaWF.find((item) => item.id === id);

  const formataDataString = (data: Date) => {
    let year = data.getFullYear();
    let month = (data.getMonth() + 1).toString().padStart(2, "0");
    let day = data.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formataStringData = (data: string) => {
    let dataString = data.split("-");
    let year = dataString[0];
    let month = dataString[1];
    let day = dataString[2];
    let m = Number(month) === 0 ? Number(month) : Number(month) - 1;
    return new Date(Number(year), m, Number(day));
  };

  useEffect(() => {
    if (wf) {
      setTitulo(wf.titulo);
      setDescricao(wf.descricao);
      setDtentrega(formataDataString(wf.dataEntrega));
      setArquivo(wf.arquivo);
    }
    if (message.length > 0) !isShowing && toggle();
  }, [message]);

  const submeterForm = () => {
    try {
      const workflow: IWorkFlow = {
        id: wf?.id || undefined,
        titulo,
        descricao,
        dataEntrega: formataStringData(dtentrega),
        arquivo,
        step: wf?.step || FaseStep.todo,
      };

      if (!wf) {
        adicionarWF(workflow);
      } else {
        atualizarWF(workflow);
      }

      setShow(true);

      setTitulo("");
      setDescricao("");
      setDtentrega("");
      setArquivo("");
    } catch (error) {
      let e = error  as Error;
      setMessage(e.message);
    }
  };

  return (
    <FormPadrao onSubmit={submeterForm}>
      <InputPadrao
        id="titulo"
        tipo="text"
        placeholder="Digite um título"
        titulo="Título"
        valor={titulo}
        maxCaracter={55}
        aoAlterado={(valor) => setTitulo(valor)}
        required
        msgError="Por favor preencha o título."
      />

      <TextArea
        id="descricao"
        titulo="Descrição"
        placeholder="Por favor digite a descrição."
        valor={descricao}
        aoAlterado={(valor) => setDescricao(valor)}
        required
        msgError="Por favor descreva o workflow."
        maxCaracter={750}
      />

      <InputPadrao
        id="dtentrega"
        tipo="date"
        titulo="Data entrega"
        valor={dtentrega}
        aoAlterado={(valor) => setDtentrega(valor)}
        required
        msgError="Por favor escolha uma data futura."
      />

      <InputPadrao
        id="arquivo"
        tipo="file"
        titulo="Anexo"
        valor={arquivo}
        aoAlterado={(valor) => setArquivo(valor)}
      />
      <div className={style.btn_salvar}>
        <BotaoDefault type="submit" nipple="success">
          Salvar
        </BotaoDefault>
      </div>

      <ShowSucessoCadastro show={show} setShow={setShow} />
      <MessageErrorModal
        isShowing={isShowing}
        toggle={toggle}
        message={message}
      />
    </FormPadrao>
  );
};

export default Cadastro;
