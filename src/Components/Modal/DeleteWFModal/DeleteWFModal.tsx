import { abrirProp } from "../../../Interface/IAbrirProp";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";
import styles from "./DeleteWFModal.module.scss";
import BotaoDefault from "../../Botao/BotaoDefault/BotaoDefault";
import useDeletarWF from "../../../State/hooks/useDeletarWF";
import ShowSucessoCadastro from "../ShowSucessoCadastro/ShowSucessoCadastro";
import {useState} from "react"

const DeleteWFModal = ({ isShowing, toggle, workFlow }: abrirProp) => {
  const [show, setShow] = useState(false);
  const deletarWF = useDeletarWF();
  const deleteWF = () => {
    deletarWF(workFlow);
    setShow(true);
    toggle();
  };
  return (
    <>
      <ShowSucessoCadastro show={show} setShow={setShow} />
      <Modal {...{ isShowing, toggle }}>
        <ModalHeader {...{ toggle }}>
          <span className={styles.headerModal}>Atenção</span>
        </ModalHeader>
        <ModalBody>
          <div className={styles.bodyModal}>
            <label>Realmente deseja apagar o workFlow?</label>
            <p>{workFlow.titulo}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <BotaoDefault type="button" onClick={deleteWF}>
            Apagar
          </BotaoDefault>
          <BotaoDefault type="button" nipple="danger" onClick={toggle}>
            Fechar
          </BotaoDefault>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default DeleteWFModal;
