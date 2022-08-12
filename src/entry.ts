import { App } from "vue";
import MyButton from "./components/Button/MyButton";
import SFCButton from "./components/Button/SFCButton.vue";
import JSXButton from "./components/Button/JSXButton";
import SButton from "./components/Button/SButton";

export { MyButton, SFCButton, JSXButton, SButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  },
};
