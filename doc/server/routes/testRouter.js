/**
 * test 관련 API
 */

const express = require("express");
const { createHash } = require("../utils");
const router = express.Router();

class Parent {
  constructor() {
    this.name = "parent";
  }
  getName() {
    return this.name;
  }

  testName() {
    console.log("testName!!");
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "child";
  }

  getgetName() {
    return super.getName();
  }
}

router.get("/", (req, res) => {
  const parent = new Parent();
  const child = new Child();
  //   console.log(parent.getName());
  console.log(child.getgetName());
  res.json({ msg: "test 성공" });
});

/**
 * hash 관련 Test API
 */
router.get("/crypto", (req, res) => {
  // const { pw } = req.query;
  // const hash = createHash(pw);
  const newData = data.map((item) => {
    const pass1 = createHash(item.password);
    const pass2 = createHash(item.nickname + pass1);
    const newPassword = pass2;
    return {
      ...item,
      _password: newPassword,
    };
  });

  console.log(data);
  res.json({ msg: newData });
});

/**
 * 데이터 생성
 */
router.get("/data/create", (req, res) => {
  const product = require("../db/Product.json");
  for (let i = 0; i < newData.length; i++) {
    const target = i + 44;
    if (!product[target]) break;

    product[target] = {
      ...product[target],
      ...newData[i],
    };
  }

  res.json({ msg: product });
});

module.exports = router;

const data = [
  {
    id: 1,
    nickname: "seller1",
    password: "1234",
    score: 36.5,
    profileImage: "",
    token: "asdjsdiofjiasdfaqwetoken_seller1_yang",
  },
  {
    id: 2,
    nickname: "seller2",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "ewf32rerfsdfgtoken_seller2_yang",
  },
  {
    id: 3,
    nickname: "seller3",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "234wsdfsftoken_seller3_yang",
  },
  {
    id: 4,
    nickname: "seller4",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "234234awerwaertoken_seller4_yang",
  },
  {
    id: 5,
    nickname: "seller5",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "taadfxzvoken_seller5_yang",
  },
  {
    id: 6,
    nickname: "seller6",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "tokedfdasfgdfgn_selwre234ler6_yang",
  },
  {
    id: 7,
    nickname: "seller7",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "token_sellewr345r34gdgr7_yang456456456",
  },
  {
    id: 8,
    nickname: "seller8",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "token_sel345345ler8_y456456a465645353453ng",
  },
  {
    id: 9,
    nickname: "seller9",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "toke435435n_seller943534534_y5345645645345ang",
  },
  {
    id: 10,
    nickname: "seller10",
    password: "1234",
    score: 36.0,
    profileImage: "",
    token: "tdsfgsfdgsrdg45456oken_sel435345345ler10_yafsgfsfgang",
  },
];

const newData = [
  {
    title: "책상",
    description:
      "가로 183 세로 61 높이 74\n택배다이로 사용하던거라서 \n테이프자국과 오염있어요\n다리가 철재라서 무거운거 올려도 튼튼해요\n용호2동 시장쪽 직접 가지러 오셔야되요",
    price: 20000,
  },
  {
    title: "일룸 클로버 책상",
    description: "일룸 클로버책상입니다\n깨끗하게 사용했어요",
    price: 50000,
  },
  {
    title: "일룸땅콩책상 팝니다",
    description:
      "일룸땅콩책상팝니다\n아이둘이라 땅콩처럼 구부러진모양 아닌 사각형타입으로 했고 윙키즈의자 두개 놔집니다 높이는 조절가능하고 높이조절봉 같이드려요\n깨끗하게 사용한편이나 앞에 연필안빠지게 된 부분이 고무라 펜자국은 어쩔수없이 남네요 그외에는 큰기스없이 깨끗한편입니다\n가지러오셔야하고 아이들때문에 가능하면 비대면거래 원합니다",
    price: 18000,
  },
  {
    title: "책상나눔합니다.",
    description:
      "당근에서 구매한 물품인데요. 저희 공간에 맞지 않아 그대로 내놓습니다. 책상상판은 분리가 가능합니다. 직접 가지려 오시면 됩니다. ",
    price: 0,
  },
  {
    title: "이룸 컴퓨터 책상",
    description: "스크래치 없고 깨끗합니다.  주말에 보실수 있습니다.",
    price: 30000,
  },
  {
    title: "의자 책상 서랍장셋트",
    description:
      "책상120.60 입니다\n셋트가격입니다\n다리 분리되요\n승용차 가능",
    price: 30000,
  },
  {
    title: "한샘 유아 책상, 의자2",
    description:
      "사용감은 당연히 있지만 깨끗하게 사용했습니다 \n매직블럭으로 지우면 거의 다 지워져서 관리하기 편했어요!  그래도 아이들이 사용했던 물건이라 예민하신 분은 피해주세요🙂\n\n스툴 열어서 아이들 장난감이나 물티슈 보관할 수 있습니다. \n\n직접 가지러 오셔야 해요(양정1동)",
    price: 32000,
  },
  {
    title: "유아책상",
    description:
      "작은 흠집 몇군데 잇는데 \n깨끗한 편인것 같아요\n\n와서 편하게 보세요\n교환 환불 불가",
    price: 20000,
  },
  {
    title: "책상(1200*600) + 의자",
    description:
      "깔끔한 스타일의 책상과 의자입니다\n사이즈는 1200*600 이구요\n깨끗한 편이구,\n마지막 사진과 같은 긁힘이 살짝 있어요\n\n문의 주세요! :)\n\n미남역 인근입니다",
    price: 30000,
  },
  {
    title: "초등 책상의자",
    description:
      "사용감있읍니다\n약간찍어져있습니다\n버리기에는 너무 아까워서 \n혹시라도  잠시라도 사용하실분 있나 올려봅니다..",
    price: 1000,
  },
  {
    title: "철재 책상",
    description:
      "가로 151 세로폭 60 놏이 72 인데 높이 조절가능해요 철재라 튼튼하고\n택배다이로 쓰던 책상이라 테이프자국\n오염은 감안하셔야되요\n의자는 그냥 드릴게요\n\n용호 2동 시장쪽 가지러오셔야되요",
    price: 20000,
  },
  {
    title: "소프시스 접이식 책상 863",
    description:
      "2년정도 깨끗하게 사용했고\n조립 필요없이 접었다 펴서 바로 사용 가능합니다\n생각보다 넓어서 공부,작업하기도 좋습니다\n위치는 부전역 인근 오피스텔입니다",
    price: 20000,
  },
  {
    title: "일룸 컴퓨터 책상",
    description:
      "일룸 컴퓨터  책상입니다.\n가로 75  세로53\n높이  67,77 입니다.\n낮은 책상은  키보드 얹는  공간입니다.\n\n지금은 단종된  상품으로 좁은  공간에서  활용하기  좋습니다.\n하단에 프린터  수납도  가능합니다.\n바퀴가  달려있어  이동도  편리합니다.\n하단 선반은  이동이  가능해서  높이조절이  가능합니다.\n지금은   해당 나사가  없어서  고정은  안되어  있습니다.\n\n관심있으신 분 연락주세요.\n",
    price: 50000,
  },
  {
    title: "리바트 뚜뚜 책상의자세트",
    description:
      "리바트  뚜뚜 책상의자세트 입니다.\n깨끗이 사용했지만 의자는 사용감이 좀 있네요 \n높이조절 나사?와 설명서도 함께드려요\n예민맘은 피해주세요~ \n필요하신분 연락주세요^^\n\n\n환불 x",
    price: 45000,
  },
  {
    title: "유아책상",
    description:
      "서랍도있고 아이들 앉기에 사이즈좋아요\n단.아이가 낙서해놓은게 있습니다~\n천으로 덮어주고 사용해도 좋을듯해요~",
    price: 0,
  },
  {
    title: "책상/의자",
    description:
      "1200×60 ×74\n 약간의사용감은 있으나 깨끗한편입니다.\n\n빨리가져가실 수 있는 분 먼저나눔드리고 싶어요.\n\n위치는 정관동일1차구요.\n\n비대면으로 (현관앞내놓을테니) 가져가시면 됩니다.",
    price: 0,
  },
  {
    title: "한샘 각도조절 책상 팝니다",
    description:
      "한샘 각도 조절 책상 팝니다.\n\n취업 성공 후 이사하게 되어, 책상 판매합니다.\n\n수석 졸업, 조기 취업 하게 해준 1등공신 책상 입니다. 좋은 기운 받아가세요!!\n\n구매는 22. 03. 30일에 367,000원 주고 구입 했습니다.\n직접 가져가셔야하며, 운반 하실 때 주차장까지 최대한 도와드리겠습니다.\n\n뽜이팅!!",
    price: 150000,
  },
  {
    title: "선반형 책상",
    description:
      "가로60 세로40\n\n작년에 39500에 사서 다른 테이블이 있어 반값에 올립니다.\n책상에 아주 작은점 있는거 외에는 깨끗합니다.\n바퀴가 있어 이동이 편하고 쇼파나 침대옆에 두고 쓰기 좋아요.높이 조절도 자유롭게 할수 있습니다.",
    price: 20000,
  },
  {
    title: "토리 아동용 원목 초등학생 책상 8-10세 정사각",
    description:
      "토리 아동용 원목 초등학생 책상 8-10세 정사각\n\n사용감 적습니다 \n맞춤 투명 매트도 드릴께요 \n\n의자 2만원 \n내츄럴 2개 연두2개 있어요 개별가격",
    price: 40000,
  },
  {
    title: "책상 1200  6000  팝니다",
    description:
      "사무용책상  팝니다.\n같은사이즈로 흰다리 1개,검은다리 1개 총2개팝니다. 각각 1.5만원입니다. 두개일괄구입시 2만원입니다.\n부산시청 직거래합니다.",
    price: 15000,
  },
  {
    title: "책상,의자",
    description: "부동산 사무실 사용중\n세로120*가로80",
    price: 10000,
  },
  {
    title: "일룸책상 나눔합니다",
    description:
      "책상은  일룸꺼 첫번째 사진이랑 똑같은 상품이구요~\n책꽂이 없이 몸통만 있어요.\n사용감은 많이 있으나  부서진데  없고  아직 쓸만해서  나눔하려 합니다.",
    price: 0,
  },
  {
    title: "나눔 ㅡ 책상",
    description:
      "리바트 아동 책상이고 찍힘없이 깨끗합니다.  명륜아이파크1차입니다. 오셔서 직접 가져가실분 계시면 좋겠습니다. 초등부터 고등까지 사용가능요^^  ",
    price: 0,
  },
  {
    title: "책상의자",
    description:
      "치수입니다\n높이(올렸을때) 115\n높이(낮춰서) 107\n깊이(?)60\n폭 60\n너무 편안한 의자인데~\n집이 좁아서 ~불편합니다\n작은의자와 교환도 가능합니다\n    ",
    price: 20000,
  },
  {
    title: "원목 테이블 책상 서재",
    description:
      "구매한지는 7년정도 되었구요,\n컴퓨터만 올려놓고 거의 사용안해서 상태 양호하나\n동그란 자국이 있어요..\n\n명지 오션시티\n가지러 와주셔야해요\n(교환,환불 불가)",
    price: 45000,
  },
  {
    title: "일룸 책상",
    description: "유리포함\n비교적 깨끗합니다",
    price: 25000,
  },
  {
    title: "일룸 땅콩책상 의자셋트",
    description:
      "높낮이 조절 가능한 땅콩책상입니다. \n너무 깨끗하게 사용했고\n윗판에 찍힘 한군데 있는거 같아요. \n벗겨짐 이런거 전혀 없구요\n의자도 높낮이 조절 가능합니다. \n가지러 와주세요",
    price: 50000,
  },
  {
    title: "책상 의자 독서대 판매합니다",
    description:
      "사용감 있으나 집 안에서만 사용했습니다\n독서대는 2단 독서대 입니다 \n아이패드 등 사용하며 책 두고 공부할 수 있습니다 \n가격제안받습니다 !",
    price: 50000,
  },
  {
    title: "데스크 책상 일룸(iloom) 급처분",
    description:
      "데스크 책상 일룸(iloom) 급처분\n\n이사 관계로 싸게 처분하려 합니다!\n\n직접 오셔서 가져 가셔야 하며,\n\n엘리베이터 있으니 편하게 연락주세요👍🏻\n\n언제든 가져가실 수 있습니다🙏",
    price: 49000,
  },
  {
    title: "책상의자세트 책상2 + 의자4개+투명매트",
    description:
      "책상의자세트 책상2 + 의자4개\n책상 60*120  높이 64 \n두개 120*240 \n사이즈 \n유아 초등학생까지 쓰시기 좋아요 \n생활 기스 감안하시구요 \n그래도 깨끗하게 사용한편이에요 \n비닐 위에 깔고 사용했습니다 \n위에 비닐 맞춰서 쓰실렴 같이드리구요 ~ \n닦아쓰세요~ \n\n직거래 ㅡ일광신도시",
    price: 350000,
  },
  {
    title: "컴퓨터 책상",
    description:
      "하자 없고 반년전 구매하였습니다 직접 문 앞에 오셔서 가져가셔야 합니다",
    price: 40000,
  },
  {
    title: "2인용 책상",
    description:
      "저는 컴퓨터책상으로 넓게 잘 사용하였습니다~~\n사용감은 조금 있지만 깨끗하게 사용하였습니다^^\n디자인도 이쁘고 서랍도 2개라서 수납도 좋습니다^^ ",
    price: 20000,
  },
  {
    title: "책상 팝니다",
    description:
      "깨끗하게 사용했습니다 세 달 썼어요 찍힘 등의 하자 없어요! 엄청 가벼운데 튼튼합니다 혼자 들고 돌아다닐 수 있을 정도의 무게라고 생각해요 싸게 가져가세욤 파스텔 색상입니다",
    price: 10000,
  },
  {
    title: "스탠딩 책상 (거의 새것) 높이조절 책상 4만원->2만원",
    description:
      "자취방에서 서서 공부하려고 \n4만원 넘는 가격으로 구매했는데 \n도서관에서 공부해서 거의 사용 안했어요\n\n검정색 미끄럼 방지는 탈부착입니다\n\n눈에 보이는 하자 하나 없고 아주 깨끗해요\n\n고정도 탄탄하게 잘됩니다\n\n장전역 근처로 가지러오셔야해요\n\n분해 가능합니다\n\n‼️제가 이번주 목요일까지 부산에 있을 예정이라 그 전에 거래 가능해서 싸게 올려요",
    price: 20000,
  },
  {
    title: "곧은나무 책상 각도조절기 2개 일괄판매",
    description:
      "각 만원씩해서 일괄판매 2만원에 팝니다. \n원목으로 된 각도조절 책상이고요, 일반책상에 놓고 쓰시면 됩니다. 5단 조절 가능합니다. \n가로세로 80cm*49cm 입니다\n\n나무자체는 깨끗하고 곰팡이나 파임 등은 없습니다. \n생활감은 조금 있는데 두 가지가 있습니다\n1. 밑바닥 실리콘받침의 접착부분이 녹고 떨어져 떼고 마스킹테이프로 조치를 취해놓았습니다. 가져가시면 실리콘받침을 사서 새거를 붙여놓으시길 권장드립니다. \n2. 두 가지 중 하나가 고무덮개가 없어서 세워놓으면 미끄러집니다. 테이블매트나 덮개 별도로 구매하셔서 쓰시면 쾌적하게 쓰실 수 있을 것 같습니다. ㅎㅎ\n\n거래장소는 저희집까지 오셨으면 합니다. \n\n지금까지 제 사용후기를 토대로 말씀드리면 \n중고등학생들에게 아주 좋을 것 같습니다. 허리디스크나 거북목을 방지해주고 아주 높이 세우면 간단하게 보면대로도 활용 가능합니다. 또한 책상에 올려져있는 각종 공부방해 요소를 가리는데 탁월하여 집중에 도움이 됩니다.",
    price: 20000,
  },
  {
    title: "침대용 이동식 테이블 간이책상",
    description:
      "배송비 만원 포함해서 7만원에 구입\n\n이동식 높낮이 폭 조절 가능\n\n그적게 배송받음\n생각보다 안 써질 거 같아서 판매합니다.\n",
    price: 30000,
  },
  {
    title: "컴퓨터책상",
    description:
      "110×50×60(높이)\n사무실에서 사용하다 새책상구매해서 내놓습니다\n사용흔적있지만\n떨어진곳 없어요\n필요하신분 연락 주세요\n\n\n여고북로172번지",
    price: 0,
  },
  {
    title: "컴퓨터 1인책상",
    description: "가꼬가이소 깔끔합니더~\n\n\n2/3일 토욜만 가져가실수 있어요~",
    price: 20000,
  },
  {
    title: "학원 책상과 하이팩의자 팝니다",
    description:
      "학원 2인용 책상 하나 + 하이팩 의자 2개 = 20,000\n\n사실분만 연락주세요! 총 15개 셋트 있습니다.\n5셋트 팔림 / 10셋트 남음\n\n배송불가\n가질러오는게 가능하신분만 연락주세요!",
    price: 20000,
  },
  {
    title: "사무용 책상 2개",
    description:
      "가로세로높이 119cm*70cm*73cm\n사무용 책상으로 컴퓨터 두 대씩 놓을 수 있는 책상입니다. 컨디션 아주 좋고 굉장히 튼튼합니다. \n다만 저희 집에 오셔서 직접 들고 가셔야 할 것 같습니다. \n사진에는 한 개만 찍었지만 두 개 일괄 판매이므로 둘 다 가져가시면 되겠습니다. 나머지 하나도 사진과 동일한 제품이고 동일한 상태입니다. \n책상 위는 물티슈로 한 번씩 다 닦아서 드립니다. \n사진에 보이는 멀티탭은 포함상품이 아닙니다",
    price: 0,
  },
  {
    title: "데스커 책상",
    description: "크기 1400 600입니다 \n깨끗합니다",
    price: 40000,
  },
  {
    title: "책장 겸 책상 나눔합니다~",
    description:
      "책장 겸 책상이구 필요하신 부분만 가져가셔도 괜찮습니다!!\n\n사용한지 3년가량 되었기에 사진처럼 사용감 있는 부분들이 있어요\n\n제품이 크기때문에 용달이 필요할거같습니다\n\n지하주차장과 엘레베이터가 연결되어있어 집에서 엘레베이터까지만 들고 이동하시면 되어용",
    price: 0,
  },
  {
    title: "이케아 책상 120x60",
    description:
      "상품명 : 이케아 LAGKAPTEN 120x60\n구매처 : 오늘의집\n사용감 : 1년 사용, 생활기스 거의없음\n기타 : 다리 분리해드립니다^^\n\n사무실, 원룸, 오피스텔 등에 활용하시기 딱 좋은 사이즈에요 ㅎㅎ 애기가 생겨서 안타깝지만 판매합니다~ㅎㅎ\n\n대연동 거주하구요! 대연자이 인근에서 직접 가져가실분 희망합니다^^",
    price: 50000,
  },
  {
    title: "이케아맘무트 유아책상세트",
    description:
      "일괄가격입니다\n의자 두개포함 책상세트입니다\n스티커자국2개 제외하곤 상태 너무 좋습니다",
    price: 40000,
  },
  {
    title: "컴퓨터책상",
    description:
      "110×50×60(높이)\n사무실에서 사용하다 새책상구매해서 내놓습니다\n사용흔적있지만\n떨어진곳 없어요\n필요하신분 연락 주세요\n\n\n여고북로172번지",
    price: 0,
  },
  {
    title: "컴퓨터 1인책상",
    description: "가꼬가이소 깔끔합니더~\n\n\n2/3일 토욜만 가져가실수 있어요~",
    price: 20000,
  },
  {
    title: "학원 책상과 하이팩의자 팝니다",
    description:
      "학원 2인용 책상 하나 + 하이팩 의자 2개 = 20,000\n\n사실분만 연락주세요! 총 15개 셋트 있습니다.\n5셋트 팔림 / 10셋트 남음\n\n배송불가\n가질러오는게 가능하신분만 연락주세요!",
    price: 20000,
  },
  {
    title: "사무용 책상 2개",
    description:
      "가로세로높이 119cm*70cm*73cm\n사무용 책상으로 컴퓨터 두 대씩 놓을 수 있는 책상입니다. 컨디션 아주 좋고 굉장히 튼튼합니다. \n다만 저희 집에 오셔서 직접 들고 가셔야 할 것 같습니다. \n사진에는 한 개만 찍었지만 두 개 일괄 판매이므로 둘 다 가져가시면 되겠습니다. 나머지 하나도 사진과 동일한 제품이고 동일한 상태입니다. \n책상 위는 물티슈로 한 번씩 다 닦아서 드립니다. \n사진에 보이는 멀티탭은 포함상품이 아닙니다",
    price: 0,
  },
  {
    title: "일룸 사무용 컴퓨터 책상",
    description:
      "전체적으로 손상하나 없고 낙서 없이\n아주 깨끗하게 썼어요\n많이안썼어요\n의자 서랍포함입니다\n가져가셔야 합니다",
    price: 65000,
  },
  {
    title: "책상 판매합니다.",
    description: "조립식입니다.\n상태 깨끗해요",
    price: 10000,
  },
  {
    title: "1200 ㄱ자 책상 코넬책상",
    description:
      "구매 후 두달정도 쓰고 판매해욤!!\n하자없고 혼자서 두번 왔다갔다하면 들고 갈 수 있고 둘이하면 더 빨라욤!!",
    price: 100000,
  },
  {
    title: "책상판매",
    description: "자취방에서 사용했습니다. 직접 가지러 오셔야합니다.",
    price: 10000,
  },
  {
    title: "데스커 모션데스크 1600, 조명 판매해요",
    description:
      "데스커 모션데스크1600이고 조명까지포함해서드려요\n하자없이 깔끔하고\n받침대 필요하면 같이드려요 이건 사용감있음\n도와주신다면 배송까지 도와드려요\n",
    price: 300000,
  },
  {
    title: "라자가구 3 step 모션데스크 (1600mm) 판매합니다.",
    description:
      "라자가구 3 step 모션데스크 (1600mm) 판매합니다. \n2년 전 구매 후 사용하다가 더이상 사용하지 않아 판매합니다. \n정상작동합니다.\n구매 후 변심으로 인한 반품 불가능 합니다.\n-------------------------------------------------------------------\n제품 재고 상황 입니다.\n-------------------------------------------------------------------\n1. 라자가구 모션데스크 1600 (재고 : 2개)\n= 크기 (1600mm x 730mm x 3step(630~1270mm))\n= 옵션 : 전선 홀, 본체 거치대\n= 당시 구매 가 : 364,000원\n= 중고 판매 가 : 180,000원\n\n2. 라자가구 모션데스크 1600 (재고 : 1개)\n= 크기 (1600mm x 730mm x 3step(630~1270mm))\n= 옵션 : 전선 홀\n= 당시 구매 가 : 364,000원\n= 중고 판매 가 : 170,000원\n\n일부 제품 상판 긁힘 현상이 있습니다.\n현장에서 상태 보시고 금액 협의 가능합니다.\n\n------------------------------------------------------------------\n직접 5층에서 가지고 가셔야 되며, 엘리베이터 있습니다. \n무게가 꽤 있습니다.",
    price: 170000,
  },
  {
    title: "무료배송 중역 책상 가로 세로 높이 121 60 75 연산역부근",
    description:
      "중역 책상 가로 세로 높이 121 60 75\n연산역부근 \n가까운 거리 무료로 배송해 드립니다 \n월드컵대로99번길37\n연산오피스텔",
    price: 30000,
  },
  {
    title: "일룸 아코 디즈니 미니 의자 책상 세트",
    description:
      "선물 받아서 잘 썼습니다.\n물건을 조심히 쓰는편이라 깨끗하지만 그래도 사용감은 있습니다.\n이제 작아져서 정리하려고합니다.\n\n책상 밑에는 원래 처음부터 저렇게 되어있었고\n의자 경우 저 부분이 사용감이 두드러지네용^^\n\n양정2동입니다:)",
    price: 80000,
  },
  {
    title: "한샘 책상1200 책상의자 팝니다",
    description:
      "구입한지 3년밖에 안된 책상 의자입니다\n책상 다리 분해가능\n거의새거 \n의자따로산건데 의자도 거의새거에요\n비대면거래합니다\n",
    price: 85000,
  },
  {
    title:
      "종 핸드벨 손잡이종 데스크 호출 콜벨 앤틱 앤티크 인테리어소품 빈티지 두부종",
    description:
      "지름 4.2x 세로 14.3cm\n\n핸드벨 손잡이종 입키다 \n데스크 호출벨로 썻던 종입니다 \n전포역 6번출구쪽에서 거래 가능하세요",
    price: 15000,
  },
  {
    title: "책상",
    description:
      "사용감있음\n하부쪽 시트지가 벗겨짐\n리폼하면 충분히 사용가능함\n부서진곳은 없음\n책상유리 사용감있음\n",
    price: 0,
  },
  {
    title: "바네스데코책상.의자",
    description:
      "구입한지 삼년 되었고 사용은 그의하지 않았습니다\n원목이라 너무 튼튼하고 디자인도 심플해서 이쁩니다\n의자도 바네스데코에서 구입햇고 원목 회전의자입니다\n의자도 십만원 좀 더 준거 같습니다\n\n\n",
    price: 190000,
  },
  {
    title: "세이지폴 책상",
    description:
      "좌식도 괜찮고 낮은 소파 두고 쓰기 좋습니다. 보시다시피 연필꽂이 사용감 많고 상판은 괜찮은 듯 합니다. ",
    price: 0,
  },
  {
    title: "좌식책상 80×48",
    description: "좌식 책상 입니다.^^",
    price: 0,
  },
  {
    title: "코멧 멀티 책상",
    description:
      "쿠팡을 추천합니다!\n코멧 멀티 책상 1260\nhttps://link.coupang.com/a/boFTM2\n\n1년도 안써 상태 최상이에요, 분리해놨어요.\n직거래는 장전역 인근입니다.",
    price: 15000,
  },
  {
    title: "어린이책상 나눠요",
    description:
      "가로 76, 세로 65 높이 130\n\n낙서를 못하게 덮개로 덮었는데.. 빈곳을.. 색칠해서 나눔합니다 진짜 튼튼하구요 사용감은 있어요 해체 다 됩니다",
    price: 0,
  },
  {
    title: "일룸책상세트(배송포함)",
    description: "이사관계로 급처분합니다.\n일룸 의자 2개포함",
    price: 200000,
  },
  {
    title: "무료배송 중역 책상 가로 세로 높이 160 80 72",
    description:
      "중역 책상 가로 세로 높이 160 80 72\n상판유리는 필요하시면 드립니다 \n연산역부근 \n가까운 거리 무료로 배송해 드립니다 \n월드컵대로99번길37\n연산오피스텔",
    price: 50000,
  },
  {
    title: "책상 나눔",
    description:
      "2월 7일 이사 앞두고, 나눔합니다.(책상만 나눔)\n\n구입하고 1년 6개월쯤 썼고,\n\n공부하고 잘 썼지만 나무책상에 비해 약합니다.\n\n지우개로 쎄게 지우면, 책상이 흔들흔들해요.\n\n또 책상 상판 깨끗하지 않아요(사진 참고)\n\n가로 120, 세로 60, 높이 73 입니다.\n\n나눔이니 만큼, 신중하게 생각하시고 반품 안됩니다.",
    price: 0,
  },
  {
    title: "이케아 맘무트 유아책상1의자2",
    description:
      "이케아 유아책상의자\n인기있는 맘무트라인이에요.\n\n장난감올려놓는 용도로 써서\n큰사용감은 없어요.\n그래도 생활기스나 낙서있을수있어요.\n\n시청근처 문앞비대면거래원해요.",
    price: 35000,
  },
  {
    title: "일룸 책상 + 서랍",
    description:
      "이사가게되면서 일룸 책상 + 서랍 판매합니다\n구매의향 있으신 분들 챗 주시면 사진 보여드리겠습니다.",
    price: 100000,
  },
  {
    title: "책상 팝니다~ 사진이랑 같은 제품",
    description:
      "상태 매우 좋습니다~ 필요시 사진 찍어 보내드리며 직접 갖고 가셔야 합니다",
    price: 30000,
  },
  {
    title: "책상판매합니다",
    description:
      "모서리쪽에 생활흔적은 약간있긴한데 많이 표시 안납니다.\n\n싸이즈 가로 1200*세로600*높이720\n",
    price: 10000,
  },
  {
    title: "큰책상",
    description: "크고튼튼해요",
    price: 30000,
  },
  {
    title: "클레이책상",
    description: "사용감 있습니다~^^",
    price: 0,
  },
  {
    title: "바퀴달린 책상의자 팝니다!!",
    description:
      "안녕하세요!!\n사용한지 약 1년정도된 바퀴형 책상의자 판매합니다!!\n사용감조금 있습니다(좌판 메쉬눌림 현상, 등판 메쉬찢어짐 없음!!)\n\n직접 가져가셔야 합니다!!\n위치는 수영역 14번출구 근처 입니당",
    price: 20000,
  },
  {
    title: "에몬스 친환경 책상 27만원 거의 새상품 ✨",
    description:
      "거의 쓰질 않아서 새상품과 상태는 비슷합니다\n가지러오셔야하며 사이즈나 사진 꼼꼼히 확인 후 연락 부탁드립니다〰️",
    price: 220000,
  },
  {
    title: "컴퓨터 책상 의자",
    description:
      "의자는 높낮이 조절됩니다 \n구매 시 현관문 앞에 놓아두겠습니다",
    price: 15000,
  },
  {
    title: "이케아 책상+의자(조립완성 완제품)",
    description:
      "이케아 책상+의자(조립완성 완제품) \n서랍1개있음\n\n가로73 세로50 높이 75\n\n코로나때 줌 하려고 샀다가\n자리차지해서 처분하려고 합니다\n거의 새 것 같이 깨끗합니다☺️\n\n비대면 문고리 거래 환영합니다😊\n(집 앞에 둘께요)\n\n중고 특성상 교환, 환불✖️\n당근페이 / 이체 / 현금 다 가능합니다⭕️",
    price: 50000,
  },
  {
    title: "접이식테이블, 책상",
    description:
      "구매한지는 2년정도 됐고 빔프로젝트 얹어놓는용 으로 사용했습니다 혼자들수있어요!\n색이 어둡다고 생각하시면 위에 테이블보같은거 깔고사용해도 이쁘고 튼튼합니다!\n직접 가지러오셔야합니다\n거래는 광안리 동갑부부카페 앞에서만 가능합니다!",
    price: 18000,
  },
  {
    title: "책상 컴퓨터 책상 1600",
    description:
      "책상입니다 \n컴퓨터 놓고도 넉넉할 정도로 공간이 커요 \n가로 1600 세로 60 높이 120 좀 넘어요!\n분리 됩니다",
    price: 150000,
  },
  {
    title: "컴퓨터책상, 의자셋트",
    description:
      "좌식컴 책상, 의자 입니다\n사진은 모양, 색깔 비슷한걸  올린겁니다\n깨끗합니다",
    price: 25000,
  },
  {
    title: "컴퓨터책상",
    description:
      "넓이 1200 높이 740 입니다\n상태깨끗해요 \n이사때문에 내놓아요",
    price: 10000,
  },
  {
    title: "꼬모 스터디 데스크.꼬메모이 독서대",
    description:
      "한달넘게 기다려 받은 아인데\n정작 아이가 거부해서\n저렴히 내놓아요.\n\n거래특성상 교환.환불.반품불가.\n예민러 패스해주세요.\n하실분만 톡주세요.\n\n양정직거래.",
    price: 40000,
  },
  {
    title: "책상+책장 1200mm",
    description:
      "안녕하세오!!\n책상 + 책장 세트 판매합니다!\n가로 1200 * 세로 600mm * 높이 720mm 규격입니다!\n파티션용도겸 케이블타이로 커튼을 추가로 고정해서 사용했습니다!! (높이 1600mm, 케이블타이 자르면 일반 책상 + 책장)\n**커튼부분은 필요없으시면 없애서 책상/책장만 드립니다!\n\n직접와서 가져가셔야 합니다!! 수영역 14번 출구 직거래\n가능합니다!!",
    price: 20000,
  },
  {
    title: "2인컴퓨터 책상입니다",
    description:
      "일년전 컴퓨터 책상으로 쓰려고 구매했었는데 필요없어서 팔아여 크게기스는없지만 생활기스정도는 있어오 크기가 있는편이라 가져가실수 있으신분들 연락주세요 :)",
    price: 70000,
  },
  {
    title: "일룸책상",
    description:
      "일룸책상\n깨끗하게사용해서 상태좋아요\n1200×750 \n총높이1800\n책상높이 720",
    price: 70000,
  },
  {
    title: "유아소파,책상",
    description:
      "유아소파랑 책상입니다.\n소파는 밑에 구멍이 났는데 앉는데는 문제없구요 \n책상은 세이지폴 유아책상입니다.\n직접 가지로 오셔야하는데 책상은 접이식이아니라 트렁크에 실으셔야 합니다.",
    price: 0,
  },
  {
    title: "조립식 책상 (흰색)",
    description:
      "조립 해제를 못해서ㅠ,ㅠ\n\n그대로 가져가주셔야해용ㅠㅠㅜ\n\n참고))\nx 자 대 2개가 없는데\n그래도 튼튼해용",
    price: 10000,
  },
  {
    title: "유치원생 책상",
    description:
      "초딩 입학전까지 사용했습니다.\n벽에 붙여 놓고 사용해서\n좁은 아이 방에 적합했구요.\n\n초딩 입학시 책상 사려고\n유치원때 잘 사용했습니다.\n\n사용감은 많습니다.\n",
    price: 0,
  },
  {
    title: "메이플 책상",
    description: "구매 원하시는 분에게 추가 사진 더 드리겠습니다~",
    price: 10000,
  },
  {
    title: "일룸 책상 의자 세트",
    description:
      "상판과 의자방석 부분 사용감 있어요.\n튼튼해요.높이 조절 가능.다리 분해됨.\n튼튼해서 상판 칼라매트 요즘 잘나와서 맞춤해서 깔면 새것처럼 쓰실 것 같아요.\n의자도 일룸 매장에서 패브릭 교체되는 걸로 압니다.\n요즘 잘나오는 얼룩제거제로 닦아도 될 듯 합니다~",
    price: 50000,
  },
  {
    title: "유아책상",
    description: "책상. 의자 일괄판매\n깨끗합니다\n\n차에 실려요~^^ ",
    price: 13000,
  },
  {
    title: "독서책상 무료나눔",
    description: "독서책상 두개 무료나눔합니다.\n닦으면 깨끗해요~",
    price: 0,
  },
  {
    title: "점포정리 인포데스크 1200 사이즈 깨끗",
    description:
      "12만원에 구매했으며 상태 깨끗하세요\n\n무인점포라 직접 가져가셔야합니다 ! ",
    price: 70000,
  },
  {
    title: "라이프타임 접이식 책상과 어린이 의자",
    description:
      "책상 높이는 60*60*54이고 \n다리가 접어져서 사용하기 아주 좋습니다\n어린이 의자는 라이프타임 의자는 아닙니다\n사용감 책상은 없다싶이 하고 의자는 조금 있습니다.",
    price: 50000,
  },
  {
    title: "책상",
    description: "혹시 필요하신분 가져가세요\n튼튼합니다",
    price: 10000,
  },
  {
    title: "나무 접이식 책상",
    description:
      "많이 큰 책상이라서 직접 가지러 오셔야합니다\n차로 운반하시는거 추천드려요!",
    price: 25000,
  },
  {
    title: "리바트 책상+책장",
    description:
      "리바트 책상과 책장 같이 팔아요 \n책상 1200, 책장600 사이즈입니다. \n깨끗한 편이예요~ \n책상은 기울기 조절되는 책상입니다.",
    price: 50000,
  },
  {
    title: "침대책상",
    description:
      "책상위에 흠집이 조금 있으나 매직블럭으로 닦으면 없어질 정도에요 높이조절, 작지만 서랍도 있습니다",
    price: 15000,
  },
  {
    title: "초등학생 공부책상+의자",
    description:
      "초등학생책상 의자세트입니다. 책상은 각도 조절 가능하고 의자는 높이조절되고 발받침도있어요.\n\n직접 오셔서 가지고 가셔야됩니다~\n힐스테이트 연산 입니다!",
    price: 180000,
  },
  {
    title: "일룸 책상 의자 세트",
    description: "일룸 책상 링고 의자 세트 초등생 간편히 쓰기 좋아요",
    price: 20000,
  },
  {
    title: "새제품 차량청소기 미니청소기 책상청소기",
    description:
      "새제품 차량청소기 미니청소기 책상청소기\n신중구매해주세요 여러개 구매 가능 \n구매후 반품 교환 환불 절대 안됩니다 \n택배발송시에는 발송전 확인 및 영상촬영후 보내드립니다\n편의점 택배도 가능합니다(2,000원)\n\n밑에 빨간글자 누르시면 판매자의\n다양한 제품 구경하실수 있으세요^^\n#당근99 눌러주세요",
    price: 12000,
  },
  {
    title: "책상 이랑 3단서랍",
    description:
      " 책상은 진짜 깨끗해요\n수납은 붙어있는거예요\n한쪽은 철재 다리예요\n3단서랍도 같이드려요",
    price: 50000,
  },
  {
    title: "컴퓨터 책상 나눔합니다",
    description:
      "이사하게 되어서 쓰던 컴퓨터 책상 나눔해요\n1층에 분리수거 하는곳 옆에 놔뒀으니\n필요하신분은 가져가세요~",
    price: 0,
  },
  {
    title: "학교,학원 책상&의자세트",
    description:
      "일반사이즈 입니다~ 학교책상,의자입니다 \n13개 세트입니다 \n일괄이나 10개이상 판매합니다",
    price: 20000,
  },
  {
    title: "한샘 사이드 책상 (상태A급)",
    description:
      "부산대근처까지는 차로 갖다드려요 ~~!\n상태 완전 깨끗해요\n\n(이사때문에 최대한 빨리 가져가주세요!)",
    price: 55000,
  },
  {
    title: "공간활용접이식책상",
    description:
      "약120×60×27\n튼튼하고 색감좋은 책상입니다. 접었다 폈다도 가능해서 공간차지 없습니다. 이사준비로 정리합니다. \n책상이 있어서 사용 잘 안하고 늘 옆에 세워둬서 새거처럼 깨끗합니다.",
    price: 10000,
  },
  {
    title: "책상 무나",
    description: "180x80\n닦아서 쓰시면 깨끗해영",
    price: 0,
  },
  {
    title: "일룸 책상 3개 팝니다 합쳐서 30 따로는 문의주세요",
    description:
      "사진에서 책상만 판매합니다. 배송은 어렵습니다.\n직접 가져가실 분만 봐주세요\n일룸 독서실 책상 두개(사이즈는 일룸 홈페이지 참고 해주시요), 일반책상 1개(116*74)  입니다. \n독서실 책상 아이보리 색상은 좀 사용하여 책상에 칼집이 좀 있습니다. 베이지 색상은 깨끗합니다. \n일반책상 깨끗합니다",
    price: 0,
  },
  {
    title: "리바트꼼므 책상 핑크",
    description:
      "깨끗한편 \n투명상판을 쿠팡에서 구매후 사용해서 깨끗해요 \n여아 혼자 사용 \n엄마도 옆에 앉아 공부하기 좋아요\n",
    price: 72000,
  },
  {
    title: "데스커 책상세트",
    description:
      "데스커 책상 셋트입니다.\n조명등 작동 잘됩니다.\n깨끗한편이고 가지러 오셔야합니다.",
    price: 150000,
  },
  {
    title: "독서실 책상 판매",
    description:
      "화이트톤이라 예쁘고 얼마 안 써서 깨끗합니다~ \n분리 원하시면 분리해드릴게요!\n\n가로 812 * 세로 600 * 높이 1330\n직거래 연산으로 오셔야 합니다~",
    price: 30000,
  },
  {
    title: "컴퓨터 책상 팝니다",
    description:
      "사용감 거의 없습니다\n\n흠집 찾아보기 힘듭니다\n\n직접 들고가셔야합니다\n\n주택 2층입니다",
    price: 30000,
  },
  {
    title: "조립식 책상 판매합니다",
    description:
      "조립식 책상 판매합니다\n깨끗히 사용했고 상태 괜찮습니다\n98*45*90\n자세한 문의는 연락주세요",
    price: 30000,
  },
  {
    title: "플라스틱 책상",
    description:
      "플라스틱 책상 가로 122 세로 61 높이 73 1개 15000원\n가로 183 세로 75 높이 73 2개 15000원\n3개 다 구매하시면 40000원에 해드려요~",
    price: 15000,
  },
  {
    title: "조립식 컴츄터 책상",
    description:
      "사용감 조금 있습니다\n\n분해하면 suv에 충분히 들어갑니다\n싼타페에도 싣고 이동했었습니다!̄̈!̄̈\n분해는 아쉽게도 직접해서 가져가셔야해여ㅜㅜ\n도와드릴순있어용!̄̈",
    price: 20000,
  },
  {
    title: "조립식 책상 싸게 가져가세요",
    description:
      "부서진 곳 없고 깨끗합니다\n드릴 때 해체해서 드립니다 !!\n이사때문에 완전 싸게 내놔요 !! ㅠㅠ\n근처까지 오셔야합니다 !!",
    price: 10000,
  },
  {
    title: "다용도 탁자(책상겸용)",
    description:
      "두번사용 \n가로80 세로45  높이75\n접이식테이블 (아이 책상으로 구매한건데\n이사관계로처분합니다 )",
    price: 25000,
  },
  {
    title: "파란들 선반 책상 팝니다!",
    description:
      "파란들 책상입니다.\n오늘의집에는 엑소1.4T 스틸 선반책장이라고\n올라와있네요\n블랙+아카시아 조합 색상이고\n책상 짱짱합니다~~~~\n\n용달 부르셔서 직접 가져가주시길 부탁드립니다^^\n\n혼자 자취할 때 사서 3년정도 썼는데\n상태 깨끗합니다.\n승진, 결혼까지 좋은 일도 함께한 좋은 기운 담긴 책상이에요~~\n\n필요하신분 채팅주세요^^!",
    price: 30000,
  },
  {
    title: "유아책상 무료드림",
    description:
      "의자에 안전벨트도있어요 ,\n친정에 놓고 잘쓰다가 아기가커서 내놓습니다",
    price: 0,
  },
  {
    title: "컴퓨터 책상 테이블 판매해요",
    description:
      "이사가면서 정리해요\n사용감 제법 있어요!\n가지고가셔야 합니다",
    price: 20000,
  },
  {
    title: "책상 책장 의자 일체",
    description:
      "#2월 이사 준비 중이어서 저렴히 올립니다.\n\n#책상\n170×75×80cm\n\n#의자 \n고가의 게이밍의자 \n게이밍 컴퓨터 PC방 중역 사무용 사무실 책상 의자 \n\n20만원대 구매\n80,000원 판매 원함\n\n#책장 2조\n\n책장2+책상1+의자1\n일괄 판매 원합니다.\n\n최고급 학생 공부방 혹은 사무실을 만들 수 있습니다.\n밖에서 일하는 사람이 어쩌다 집에서 잔무를 보기 위해 만들어 둔 방입니다\n\n#책상 책장 의자 \n사용감 없이 깨끗하여 새 제품처럼 만족하실 겁니다.\n\n#책상+책장+의자를 의자 하나 가격도 안 되는 20만원으로 묶어두었습니다.\n용달비 등, 상황을  감안 조율하기 위한 배려입니다!\n",
    price: 200000,
  },
  {
    title: "라이트오피스 책상 1600X800",
    description:
      "라이트오피스 책상입니다\n크기는 1600X800라서 사무용으로 넓게 사용하기 좋습니다.\n\n오셔서 가져가셔야합니다",
    price: 65000,
  },
  {
    title: "책상 무료나눔합니다",
    description:
      "아이가 쓰던 착상인데 사이즈가 작아져 무로나눔합니다.\n직접 가지",
    price: 0,
  },
  {
    title: "좌식컴퓨터책상",
    description:
      "좌식 컴퓨터책상팔아요\n컴퓨터 올려놓기만하고 사용은 많이 안했어요\n깨끗한편이긴하나 예민하신분은 패쑤해주세요\n사이즈는\n가로 77cm, 세로긴쪽 48cm, 높이 37cm 입니다\n\n교환,환불 안되구 가지러오셔야되용\n",
    price: 10000,
  },
  {
    title: "좌식컴퓨터책상",
    description:
      "좌식 컴퓨터책상팔아요\n컴퓨터 올려놓기만하고 사용은 많이 안했어요\n깨끗한편이긴하나 예민하신분은 패쑤해주세요\n사이즈는\n가로 80cm, 세로긴쪽 40cm, 높이 42.5cm 입니다\n\n교환,환불 안되구 가지러오셔야되용",
    price: 17000,
  },
  {
    title: "조립식 컴츄터 책상",
    description:
      "사용감 조금 있습니다\n\n분해하면 suv에 충분히 들어갑니다\n싼타페에도 싣고 이동했었습니다!̄̈!̄̈\n분해는 아쉽게도 직접해서 가져가셔야해여ㅜㅜ\n도와드릴순있어용!̄̈",
    price: 20000,
  },
  {
    title: "책상",
    description:
      "다리부분에 군데군데 까짐이 있는데\n윗판 부분은 깨끗합니다\n\n가로: 120\n세로: 60\n높이: 70\n\n부암동에서 직거래합니다",
    price: 20000,
  },
  {
    title: "엑토 데스크 패드",
    description:
      "방에 책상을 처분하면서 쓸 일이 없어서 올려요.\n작년에 근무할 때 입었던 남색 아우터때매 끝에 약간 이염 있는데 신경 안쓰시면 가져가세요.\n\nhttps://m.actto.kr/product/%EB%B0%80%ED%82%A4-%EB%8D%B0%EC%8A%A4%ED%81%AC-%ED%8C%A8%EB%93%9C-mp-54/375/category/68/display/1/",
    price: 2000,
  },
  {
    title: "책상",
    description:
      "가로 120     세로 58    높이 72\n\n메이플색상 나무책상입니다\n원목은 아니라 가벼워요\n파손부위는 없고 큰 벗겨짐도 없어요\n저는 책상으로 쓰기보단 티비 다이로 사용했습니다\n그래서 사용감 많이 없어요\n그냥 편하게 쓰실분 싼값에 가져 가시면 될듯합니다 \n밑에 서랍장은 판매 아닙니다\n관심 있으신분 연락주세요\n중고 특성상 거래후 반품,환불 안돼요 ",
    price: 15000,
  },
  {
    title: "(새상품) 무선충전형 차량용 청소기. 책상청소기",
    description:
      "🙇‍♂️ 직거래는 안합니다. 택배거래하실분만 연락바랍니다. \n\n🏷새상품. \n🏷무선충전형. 보이는데로 머리카락, 먼지 등 바로바로 간단하게 청소하기 좋은 아이템. 강추\n\n🏷 반값택배 (gs25만 가능) 2000원\n🏷 일반택배 3500원",
    price: 7000,
  },
  {
    title: "고급책상",
    description:
      "고급책상 이사로 나눔합니다  \n책상 170*75*75\n책장 82*200\n주택 2층 \n2/16 이사할 때 내려드릴 수 있어요\n",
    price: 0,
  },
  {
    title: "(새상품) 높이조절책상 최대높이 130cm 거북목방지 스탠딩책상 80폭",
    description:
      "최대높이 130센티 거북목방지 스탠딩책상 80폭 높이조절책상\n\n10년동안 온라인 베스트셀러 스탠딩책상 \n최대높이 130센티\n거북목방지 탑데스크없이 사용가능(2번째 사진참조)\n추가비용으로 배달 가능합니다\n\n*2중고정나사로 높이조절 튼튼하게 고정됩니다\n*라이트브라운 색상",
    price: 43000,
  },
  {
    title: "800 책상책장세트 팝니다",
    description:
      "가로 800 입니다\n까지거나 깨진곳은 없으나 약간의 사용감 있어요\n\n화이트는 까진곳 있고 사용감이 더 심한데\n같이 가져가도 되고 그레이만 가져가도 됩니다\n\n2월 14일에 1층에 내려드려요\n",
    price: 20000,
  },
  {
    title: "책상책장세트",
    description:
      "책상상판 가로 120~150  세로 57    책상높이 74   \n책장높이 185     가로 61   폭 24\n\n책장 중간선반에 책상상판을 걸치고 오른쪽은 서랍장에 \n얹어 쓰는 책상상판이라 상판이 고정이 아니라 \n분리가 가능해 가로 사이즈 늘렸다 줄였다 가능합니다\n그래서 책상가로사이즈가 120~150까지 조정됨\n책장방향도 왼쪽,오른쪽 위치변경 가능합니다 \n책장은 총5단입니다\n컴퓨터 본체 넣어 쓴다고 선반분리해놓은거 따로 있어요\n원하는대로 선반 빼고 쓰셔도 되요\n서랍도 3단 상태 괜찮아요\n책상책장 일체형이라 보시면 되요\n사용감은 있지만 파손없어서 상태 좋아요\n관심 있으신분 연락주세요\n중고 특성상 거래후 반품,환불 안돼요 ",
    price: 30000,
  },
  {
    title: "리바트 꼼므 책상 1200",
    description:
      "리바트 꼼므 책상 1200\n\n2020년에 사서 레고 조립하고 올려두는 용도로 거의 사용했고 상태 좋아요\n\n초등전 자녀에게 저렴하게 책상 선물 하세요\n\n\n\n\n.",
    price: 70000,
  },
  {
    title: "deskmini x300 3400G 팝니다",
    description:
      "DESKMINI X300\n\nCPU : 라이젠 3400g\n메모리 16G (8g x 2ea)\n녹투아 쿨러로 변경",
    price: 320000,
  },
  {
    title: "데스커 책상",
    description: "데스커 책상입니다.\n구매하고 사용하지않은제품이에요",
    price: 100000,
  },
  {
    title: "책상",
    description:
      "다리부분에 군데군데 까짐이 있는데\n윗판 부분은 깨끗합니다\n\n가로: 120\n세로: 60\n높이: 70\n\n거래예약 후 위치 알려드리겠습니다",
    price: 20000,
  },
  {
    title: "책상",
    description: "책상팔아용",
    price: 0,
  },
  {
    title: "접이식 책상 밥상",
    description: "깨끗하고 잘됩니다",
    price: 9000,
  },
  {
    title: "선반 있는 책상",
    description:
      "남산동에서 거래합니다\n가로 120  세로 60  높이 122\n선반 있는 책상\n상태 괜찮고 양호합니다\n사용에 문제 없어요 \n사진 참고 바랍니다\n예민하거나 민감한 분 넘어가세요\n컴퓨터 책상으로 사용하기도 하구요\n육각공구로 조립해야 됩니다\n배송원하면 배송비 받고\n직접 가져다드립니다\n구매하실 분만 챗 주세요",
    price: 15000,
  },
  {
    title: "책상",
    description:
      "넓은 책상 판매합니다 !\n구입당시 꽤 비싸게 주고 샀던 책상입니다.\n\n사진처럼 1인용으로해서 넓은 책상으로 사용해도 되고 서랍장을 이동시켜서 2인용 책상으로 사용하셔도 됩니다. \n수납장이랑 책꽂이도 넓어서 정말 편리해요\n\n넓고 깨끗해서 공부하기도 좋아요.\n컴퓨터 책상으로 사용하셔도 좋아요.\n\n(세월의 흔적은 존재합니다)\n2100x810x740입니다.\n\n위치는 남천역 근처입니다\n(직접가지고 가시거나, 저렴하게 용달 연결 시켜드릴수 있습니다)\n\n+ 혹시 책장 필요하시면 판매중인 책장도 같이 드려요 (득템의 기회)",
    price: 70000,
  },
  {
    title: "ㄱ자 책상",
    description:
      "ㄱ자 책상나눔합니다. 1월31일까지만 가능합니다.상태는 튼튼하고 좋습니다.",
    price: 0,
  },
  {
    title: "책상/테이블 판매합니다",
    description:
      "저희는 컴퓨터 책상으로 사용했습니다\n책상 가쪽에 긁힘 있지만 전반적으로 상태 좋습니다\n분해되어있어요 \n가지러오셔야합니다",
    price: 10000,
  },
  {
    title: "위드그로우 유아책상",
    description:
      "높이조절 각도조절 서랍 휴대폰거치대 선반 가방걸이 있어요\n깨끗한데아이가싫어해서팔아요",
    price: 100000,
  },
  {
    title: "야마토야 부우노 유아 책상 의자",
    description: "나눔합니다\n사용감있으니 예민하신 분은 패스합니다",
    price: 0,
  },
  {
    title: "좌식 테이블 식탁/책상",
    description:
      "시트지 붙인 자국이 밑면에 많습니다\n그외 큰 하자 없습니다\n크고 튼튼합니다\n원가 6만원입니다\n\n부산 남구 유엔평화로 41번길 89\n주차장,엘리베이터 있습니다",
    price: 5000,
  },
  {
    title: "테슬라 Tesla 데스크텀블러 보온 보냉",
    description:
      "테슬라텀블러입니다. 새것입니다.\n보온보냉 되는 텀블러네요. \n안쪽은 스텐으로 되어 있습니다.",
    price: 10000,
  },
  {
    title: "새제품) 산리오 데스크 장패드",
    description:
      "산리오 좋아하시는 분들\n새제품이라 선물하기도 좋아요\n\n\n⭐️택배만 가능⭐️\n⭐️중고 상품 특성 상 교환 환불 어렵습니다⭐️",
    price: 10000,
  },
  {
    title: "컴퓨터 책상",
    description:
      "이사준비로 정리합니다 책상에 선정리하는 구멍 뚫려있고 밑에도  선정리하는공간있습니다 와서 들고가셔야되요",
    price: 10000,
  },
  {
    title: "책상pc모니터 팔아요!",
    description:
      "책상,모니터,키보드,본체 다해서 50에 팔아요\n윈10 정품인증 완료 초기화 완료\n사양 사진첨부\n모니터 60hz 입니다.\n\n전부다 가져다 드려요!\n\n\n",
    price: 500000,
  },
  {
    title: "유니크 원목 책상",
    description: "원목 책상 \n\n\n비대면 문앞거래 선호 ",
    price: 30000,
  },
  {
    title: "중역책상",
    description: "중역대형 책상\n깨끗합니다  필요하신분",
    price: 40000,
  },
  {
    title: "책상 팝니다",
    description: " 책상 팝니다\n각도및 높낮이 조절 됩니다\n",
    price: 5000,
  },
  {
    title: "위드아이 미술책상",
    description:
      "소이현유아책상으로 유명한 위드아이책상이에요\n종이는 리필용 사셔서 계속 쓰시면 됩니다 \n모서리에 약간의 페인트 벗겨짐이 있으나\n전반적으로 깨끗한편이어서 부담없이 쓰기 좋습니다",
    price: 25000,
  },
  {
    title: "책상 팔아요",
    description:
      "100만원 주고 해외 직구한 책상 반값에 팔아요\n1년정도 사용했고 동생이 군대가서 자리만 차지해서 팝니다 네고 가능 합니다!",
    price: 500000,
  },
  {
    title: "접이식 책상 - 이쁘게 잘 접힘",
    description: "접이식 책상 - 이쁘게 잘 접힘\n30 X 25 X 80 cm 정도 됩니다",
    price: 7000,
  },
  {
    title: "책상 팝니다",
    description:
      "책상 팝니다 !\n책상 사고 짐 놔두는 용으로만 사용해서 까짐 \n사용감 전혀 없어요 \n청소하면서 빼놔서 다 닦아놨습니다\n인테리어도 안해치는 색이라 놔뒀을때 이뻐요\n\n차에 넣어갈 수 있게 분리 원하시면 해드려요\n부피가 있어서 직접 가지러 오셔야해요\n대신 1층까지 내려드립니다 \n편하게 연락주세요",
    price: 25000,
  },
  {
    title: "아기 책상 의자",
    description:
      "책상 의자2개 입니다.\n모난 부분없어 아기들에게\n안전하구\n의자가 분리되어 \n수납도 가능해요~~~\n앉아서 그림도 그리고\n장난감 가져놀고 하네요^^\n깨끗해요~~~",
    price: 20000,
  },
  {
    title: "테이블 겸 책상 (코스트코) + 코스트코 의자",
    description: "오늘 가지고 가실분만~\n\n사이즈는 1800*750 입니다.",
    price: 20000,
  },
  {
    title: "유아 책상과 의자",
    description:
      "사용감 많지만 7살까지 잘썼어요 오늘 바로 가져 가셨으면 좋겠어요",
    price: 0,
  },
  {
    title: "원목책상",
    description:
      "- 서랍이 많이 낮습니다.\n- QM5 뒷자석 평탄화 했을 때 들어가는 사이즈 입니다.",
    price: 30000,
  },
];
