const backIcon = document.getElementById("backIcon");

/**
 * 뒤로가기 버튼 클릭 이벤트 핸들러
 */
function handleClickBack() {
  history.back();
}

// 뒤로가기 버튼 이벤트 등록
backIcon.addEventListener("click", handleClickBack);
