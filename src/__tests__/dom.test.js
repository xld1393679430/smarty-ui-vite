const { generateDom } = require("../__test_code__/dom");
require("../../config/jsdom-config");

describe("Dom 测试", () => {
  test("测试dom操作", () => {
    generateDom();
    expect(document.getElementsByClassName("cc").length).toBe(1);
  });
});
