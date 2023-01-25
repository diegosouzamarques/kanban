import Lottie from "lottie-react";
import success from "../../../assets/lottie/success.json";

import Modal, { ModalBody, useModal } from "../Modal";
import { useEffect } from "react";

interface abrirProp {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}

const ShowSucessoCadastro = ({ ...props }: abrirProp) => {
  const { isShowing, toggle } = useModal();
  const openModal = () => { !isShowing && toggle() }
  const complete = () => {
    toggle();
    props.setShow(false);
  };

  useEffect(()=>{
    props.show && openModal();
  },[props.show]);

  const style = {
    height: 300,
  };

  return (
    <Modal {...{ isShowing, toggle }}>
      <ModalBody>
        <Lottie
          animationData={success}
          style={style}
          loop={true}
          onLoopComplete={complete}
        />
      </ModalBody>
    </Modal>
  );
};
export default ShowSucessoCadastro;
