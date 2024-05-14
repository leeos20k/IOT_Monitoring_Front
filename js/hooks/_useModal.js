import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  .modalBg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const useModal = () => {
  /** modal opened state */
  const [modalOpened, setModalOpened] = React.useState(false);

  /** modal control func */
  const openModal = () => {
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };

  const ModalPortal = ({ children }) => {
    const ref = React.useRef();
    const [mounted, setMounted] = React.useState(false); // <-- mounted?

    React.useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <ModalWrapper>
          <div className="modalBg" role="presentation" onClick={closeModal} />
          {children}
        </ModalWrapper>,
        ref.current
      );
    }
    return null;
  };
  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};
export { useModal };
