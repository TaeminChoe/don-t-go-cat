/**
 * 아이템 클릭 이벤트 핸들러
 */
function handleClickItem() {
  location.href = "detail.html";
}

// 아이템 클릭 이벤트 등록
const items = document.querySelectorAll(".container .item");
items.forEach((item) => {
  item.addEventListener("click", handleClickItem);
});
