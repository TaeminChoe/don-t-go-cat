import Modal from "react-modal";
import { useSelector } from "react-redux";

const ModalContainer = () => {
  const Components = useSelector((state) => state.modalReducer.components);

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      zIndex: 9999,
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      padding: 0,
      border: "none",
    },
  };

  return (
    <>
      {Components.map((item) => {
        const { Component, isOpen, key, content, clickAction } = item;
        return (
          <Modal
            key={key}
            isOpen={isOpen}
            ariaHideApp={false}
            style={modalStyle}
          >
            <Component
              componentKey={key}
              content={content}
              clickAction={clickAction}
            />
          </Modal>
        );
      })}
    </>
  );
};

export default ModalContainer;
