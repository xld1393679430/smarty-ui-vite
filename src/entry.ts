import { App } from 'vue'
import MyButton from './components/Button/MyButton'
import SFCButton from './components/Button/SFCButton.vue'
import JSXButton from './components/Button/JSXButton'
import SMButton from './components/Button/SMButton'

export {
    MyButton,
    SFCButton,
    JSXButton,
    SMButton,
}

export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
        app.component(SMButton.name, SMButton);
    }
}