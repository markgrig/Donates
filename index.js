import './index.css';
import { App } from './src/modules/app'

const app = new App()
app.run()


document.querySelector(`.donates-container__donates`).addEventListener( "click", ()=> { console.log(123)})