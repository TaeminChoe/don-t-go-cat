import { useSetRecoilState } from "recoil";
import { closeModal } from "system/recoil/modal";

const ConfirmModal = ({ componentKey, content, clickAction }) => {
  const hideModal = useSetRecoilState(closeModal);

  const confirmAction = () => {
    // API 호출이 완료되면 clickAction 실행 및 모달 닫기
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
