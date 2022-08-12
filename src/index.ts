import { createApp, defineComponent, h } from "vue";
import SmartyUI from "./entry";
import Container from './Layout'




createApp(Container).use(SmartyUI).mount("#app");
