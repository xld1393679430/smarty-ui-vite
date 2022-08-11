import { defineComponent, h } from "vue";

import XButton from "../components/Button/MyButton";
import SFCButton from "../components/Button/SFCButton.vue";
import JSXButton from "../components/Button/JSXButton";
import SMButton from "../components/Button/SMButton";

export default defineComponent({
  name: "Container",
  render() {
    return (
      <div>
        <SMButton color="blue">蓝色按钮</SMButton>
        <SMButton color="green">绿色按钮</SMButton>
        <SMButton color="gray">灰色按钮</SMButton>
        <SMButton color="yellow">黄色按钮</SMButton>
        <SMButton color="red">红色按钮</SMButton>
      </div>
    );
  },
});
