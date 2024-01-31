export const changeFormatToKR = (price) => {
  // 숫자를 세 자리 단위로 ","를 추가한 문자열로 변환
  const formattedNumber = `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber + "원";
};
