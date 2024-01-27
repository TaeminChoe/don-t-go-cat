import axios from "axios";
import { useSetRecoilState } from "recoil";
import { closeModal } from "system/recoil/modal";

const ConfirmModal = ({ componentKey, content, clickAction }) => {
  const hideModal = useSetRecoilState(closeModal);
  const confirmAction = () => {
    axios.interceptors.response.use(
      (response) => {
        console.log("Response: OnFulfilled");
        return response;
      },
      (error) => {
        console.log("Response: OnRejected");
      }
    );
    if (clickAction) clickAction();
    hideModal(componentKey);
  };

  return (
    <div id="modalContainer" className="modal-container">
      <div className="background"></div>
      <div className="paper-container">
        <div className="paper">
          <div className="popup-header">알림</div>

          <div className="popup-content">
            <div className="content">
              <div className="description">{content}</div>
            </div>
          </div>

          <div className="button-container">
            <button id="modal-submit-btn" onClick={confirmAction}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
