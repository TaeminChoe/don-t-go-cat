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
  // Random으로 번호 10개 뽑기 1~100까지
  for (let i = 0; i < newData.length; i++) {
    product[i + 6] = {
      ...product[i + 6],
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
    title: "Apple iPhone 11 Pro 256GB 골드",
    description:
      "애플 아이폰 11 프로 256기가바이트 골드 모델입니다. 외관 상태 최상, 사용감 거의 없습니다.",
    price: 900000,
    date: "2024-01-29",
  },
  {
    title: "Samsung Galaxy Watch 4 Classic 46mm",
    description:
      "삼성 갤럭시 워치 4 클래식 46mm 모델입니다. 최신 제품이며 상태 아주 좋습니다.",
    price: 350000,
    date: "2024-01-28",
  },
  {
    title: "Sony WH-1000XM4 무선 헤드폰",
    description:
      "쏘니 무선 헤드폰 WH-1000XM4입니다. 노이즈 캔슬링 성능 최상, 거의 사용감 없습니다.",
    price: 280000,
    date: "2024-01-27",
  },
  {
    title: "Dyson V11 토탈클린 청소기",
    description:
      "다이슨 V11 토탈클린 무선 청소기 팝니다. 성능 좋고 거치대 포함합니다.",
    price: 450000,
    date: "2024-01-26",
  },
  {
    title: "Apple iPhone 11 Pro 256GB 실버",
    description:
      "애플 아이폰 11 프로 256기가바이트 실버 모델입니다. 사용감 조금 있지만 외관 깨끗합니다.",
    price: 850000,
    date: "2024-01-25",
  },
  {
    title: "Canon EOS 5D Mark IV DSLR 카메라",
    description:
      "캐논 EOS 5D Mark IV DSLR 카메라 판매합니다. 용량 32GB SD 카드와 함께 제공됩니다.",
    price: 2300000,
    date: "2024-01-24",
  },
  {
    title: "MacBook Pro 15인치 2019 Touch Bar",
    description:
      "맥북 프로 15인치 2019 Touch Bar 모델입니다. 사용감 있지만 성능은 아주 좋습니다.",
    price: 1700000,
    date: "2024-01-23",
  },
  {
    title: "Bose QuietComfort 35 II 노이즈 캔슬링 헤드폰",
    description:
      "보스 QuietComfort 35 II 노이즈 캔슬링 헤드폰 판매합니다. 최상의 상태입니다.",
    price: 320000,
    date: "2024-01-22",
  },
  {
    title: "Sony PlayStation 5 디지털 에디션",
    description:
      "쏘니 플레이스테이션 5 디지털 에디션 판매합니다. 최신 모델이며 거의 사용하지 않았습니다.",
    price: 600000,
    date: "2024-01-21",
  },
  {
    title: "Samsung 34인치 커브드 울트라 와이드 모니터",
    description:
      "삼성 34인치 커브드 울트라 와이드 모니터 판매합니다. 해상도와 컬러가 아주 좋습니다.",
    price: 800000,
    date: "2024-01-20",
  },
  {
    title: "GoPro HERO9 블랙",
    description:
      "고프로 HERO9 블랙 액션 카메라 판매합니다. 추가 액세서리 포함됩니다.",
    price: 450000,
    date: "2024-01-19",
  },
  {
    title: "Microsoft Xbox Series X",
    description:
      "마이크로소프트 엑스박스 시리즈 X 게임 콘솔 판매합니다. 거의 새것 같습니다.",
    price: 550000,
    date: "2024-01-18",
  },
  {
    title: "Amazon Kindle Paperwhite",
    description:
      "아마존 킨들 페이퍼화이트 전자책 리더기 판매합니다. 거의 사용하지 않았습니다.",
    price: 120000,
    date: "2024-01-17",
  },
  {
    title: "Bose SoundLink Mini II 블루투스 스피커",
    description:
      "보스 SoundLink Mini II 블루투스 스피커 판매합니다. 작고 강력한 사운드를 제공합니다.",
    price: 200000,
    date: "2024-01-16",
  },
];
