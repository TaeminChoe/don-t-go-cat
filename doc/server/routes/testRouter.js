/**
 * test 관련 API
 */

const express = require("express");
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

module.exports = router;
