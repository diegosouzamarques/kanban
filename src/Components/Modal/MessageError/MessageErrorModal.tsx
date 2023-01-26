import BotaoDefault from "../../Botao/BotaoDefault/BotaoDefault";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";
import styles from "./MessageErrorModal.module.scss";

interface propError{
  isShowing: boolean;
  toggle: () => void;
  message:string;
}

const MessageErrorModal = ({ isShowing, toggle, message }: propError) => {

    return(
        <Modal {...{ isShowing, toggle }}>
        <ModalHeader {...{ toggle }}><span className={styles.headerModal}>Atenção</span></ModalHeader>
        <ModalBody>
          <div className={styles.bodyModal}>
            <label>Erro:</label>
            <p>{message}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <BotaoDefault type="button" nipple="danger" onClick={toggle}>
            Fechar
          </BotaoDefault>
        </ModalFooter>
      </Modal>
    );

}
export default MessageErrorModal;