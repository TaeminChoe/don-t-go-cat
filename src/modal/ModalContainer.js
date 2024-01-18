import ModalPortal from "./ModalPortal";
import { hideModal } from "system/common";
const ModalContainer = ({ content }) => {
  return (
    <ModalPortal>
      <div id="modalContainer" className="modal-container">
        <div className="background"></div>
        <div className="paper-container">
          <div className="paper">
            <div className="popup-header">알림</div>

            <div className="popup-content">
              <div className="content">
                <div className="description">
                  {content || "오류가 발생했습니다."}
                </div>
              </div>
            </div>

            <div className="button-container">
              <button id="modal-submit-btn" onClick={hideModal}>
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
export default ModalContainer;
