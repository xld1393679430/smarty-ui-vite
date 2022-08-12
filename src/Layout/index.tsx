import { defineComponent } from "vue";

import XButton from "../components/Button/MyButton";
import SFCButton from "../components/Button/SFCButton.vue";
import JSXButton from "../components/Button/JSXButton";
import SButton from "../components/Button/SButton";

export default defineComponent({
  name: "Container",
  render() {
    return (
      <div>
        <SButton color="blue" round plain icon="search"></SButton>
        <SButton color="green" round plain icon="edit"></SButton>
        <SButton color="gray" round plain icon="check"></SButton>
        <SButton color="yellow" round plain icon="message"></SButton>
        <SButton color="red" round plain icon="delete"></SButton>
        <XButton />
        <SFCButton />
        <JSXButton />
      </div>
    );
  },
});
