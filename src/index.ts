import { createApp, defineComponent, h } from "vue";
import SmartyUI from "./entry";
import Container from "./Layout";

const a = 1;

createApp(Container).use(SmartyUI).mount("#app");
