var SmartyUI = (function (e, n) {
  "use strict";
  const t = n.defineComponent({
    name: "MyButton",
    render: () => n.h("button", null, "my button"),
  });
  const o = ((e, n) => {
      const t = e.__vccOpts || e;
      for (const [o, r] of n) t[o] = r;
      return t;
    })({ name: "SFCButton" }, [
      [
        "render",
        function (e, t, o, r, l, u) {
          return n.openBlock(), n.createElementBlock("button", null, "SFC button");
        },
      ],
    ]),
    r = n.defineComponent({ name: "JSXButton", render: () => n.createVNode("button", null, [n.createTextVNode("JSX button")]) }),
    l = {
      size: { type: String, default: "medium" },
      color: { type: String, default: "blue" },
      round: { type: Boolean, default: !1 },
      plain: { type: Boolean, default: !1 },
      icon: { type: String, default: "" },
    },
    u = n.defineComponent({
      name: "SButton",
      props: l,
      setup(e, { slots: t }) {
        var o;
        console.log("html", null == (o = document.querySelector("#app")) ? void 0 : o.innerHTML);
        const r = { small: { x: "2", y: "1", text: "sm" }, medium: { x: "3", y: "1.5", text: "base" }, large: { x: "4", y: "2", text: "lg" } };
        return () =>
          n.createVNode(
            "button",
            {
              class: `\n            py-${r[e.size].y}\n            px-${r[e.size].x}\n            ${e.round ? "rounded-full" : "rounded-lg"}\n            bg-${e.color}-${
                e.plain ? "100" : "500"
              }\n            hover:bg-${e.color}-400\n            border-${e.color}-${(e.plain, "500")}\n            cursor-pointer\n            border-solid\n            text-${
                e.plain ? e.color + "-500" : "white-500"
              }\n            text-${
                r[e.size].text
              }\n            hover:text-white\n            transition duration-300 ease-in-out transform hover:scale-105\n            mx-1\n        `,
            },
            ["" !== e.icon ? n.createVNode("i", { class: `i-ic-baseline-${e.icon} p-3` }, null) : "", t.default ? t.default() : ""]
          );
      },
    }),
    a = {
      install(e) {
        e.component(t.name, t), e.component(o.name, o), e.component(r.name, r), e.component(u.name, u);
      },
    };
  return (
    (e.JSXButton = r),
    (e.MyButton = t),
    (e.SButton = u),
    (e.SFCButton = o),
    (e.default = a),
    Object.defineProperties(e, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } }),
    e
  );
})({}, Vue);
//# sourceMappingURL=smarty-ui.iife.js.map
