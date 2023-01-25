import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  isShowing: boolean;
  toggle?: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isShowing, toggle, children }: ModalProps) => {
  useEffect(() => {
    const listner = function (e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        if (toggle)
          isShowing && toggle();
      }
    };

    window.addEventListener("keyup", listner);

    return () => {
      window.removeEventListener("keyup", listner);
    };
  }, [isShowing, toggle]);

  return isShowing
    ? createPortal(
        <div className={styles.modal_overlay}>
          <div className={styles.modal_wrapper}>
            <div className={styles.modal}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

interface ModalHeaderProps {
  toggle: () => void;
  children?: React.ReactNode;
}

export const ModalHeader = ({ toggle, children }: ModalHeaderProps) => {
  return (
    <div className={styles.modal_header}>
      {children || "Title"}
      <button
        className={styles.modal_button_close}
        data-dismiss="modal"
        aria-label="Close"
        onClick={toggle}
      >
        &times;
      </button>
    </div>
  );
};

interface ModalBodyProps {
  children?: React.ReactNode;
}

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className={styles.modal_body}>{children}</div>;
};

interface ModalFooterProps {
    children?: React.ReactNode;
  }

export const ModalFooter = ({children}:ModalFooterProps) =>{
    return(
        <div className={styles.modal_footer}>
		{children}
  </div>
    );
}

export const useModal = () => {
    const [isShowing, setIsShowing]=useState(false);

    function toggle(){
        setIsShowing(!isShowing);
    }

    return{
        isShowing,
        toggle
    }
}

export default Modal;
