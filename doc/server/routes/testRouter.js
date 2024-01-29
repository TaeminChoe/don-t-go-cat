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
