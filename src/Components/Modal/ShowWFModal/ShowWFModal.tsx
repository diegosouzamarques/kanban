import { Link } from "react-router-dom";
import { abrirProp } from "../../../Interface/IAbrirProp";
import BotaoDefault from "../../Botao/BotaoDefault/BotaoDefault";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";
import styles from "./ShowWFModal.module.scss";

const ShowWFModal = ({ isShowing, toggle, workFlow }: abrirProp) => {
  return (
    <Modal {...{ isShowing, toggle }}>
      <ModalHeader {...{ toggle }}>
        <span className={styles.headerModal}>{workFlow.titulo}</span>
      </ModalHeader>
      <ModalBody>
        <div className={styles.bodyModal}>
          <label>Descrição:</label>
          <p className={styles.descricao_wf}>{workFlow.descricao}</p>
          <label>Data Entrega:</label>
          <p>{workFlow.dataEntrega.toLocaleDateString()}</p>
          <label>Anexo: </label>
          <p>{workFlow.arquivo}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className={styles.botaoLink}>
          <Link to={`/cadastro/${workFlow.id}`}>
            <BotaoDefault type="button">Atualizar</BotaoDefault>
          </Link>
        </div>
        <div className={styles.botaoLink}>
          <BotaoDefault  type="button" nipple="danger" onClick={toggle}>
            Fechar
          </BotaoDefault>
        </div>
      </ModalFooter>
    </Modal>
  );
};
export default ShowWFModal;
