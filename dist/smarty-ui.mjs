import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const MyButton = defineComponent({
  name: "MyButton",
  render() {
    return h("button", null, "my button");
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "SFCButton"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX button")]);
  }
});
const __uno = "";
const SMButton = defineComponent({
  name: "SMButton",
  setup(props, {
    slots
  }) {
    return () => {
      var _a;
      return createVNode("button", {
        "class": `
            py-2 
            px-4 
            font-semibold 
            rounded-lg 
            shadow-md 
            text-white 
            bg-green-500 
            hover:bg-green-700 
            border-none 
            cursor-pointer 
            `
      }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) || "\u9ED8\u8BA4"]);
    };
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SMButton.name, SMButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  SMButton,
  entry as default
};
