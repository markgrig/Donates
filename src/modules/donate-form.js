import { getFormattedDate } from '../core/constants/utils/calculate'

export class DonateForm {
    #formHtml
    #createNewDonate 
    #formElement
    constructor( totalAmount, createNewDonate, currency ) {

        this.#formHtml = `
            <h1 id="total-amount"> ${totalAmount} ${currency} </h1>
            <label class="donate-form__input-label"> Введите сумму в ${currency}
                <input class="donate-form__donate-input" name="amount" type="number" max="100" min="1" required="">
            </label>
            <button class="donate-form__submit-button" type="submit"> Задонатить
            </button>
            
        `

        this.#createNewDonate = createNewDonate;
        this.#formElement = document.createElement("form")

    }
    render() {
        
        this.#formElement.className = "donate-form"

        this.#formElement.addEventListener( "submit", (event)=> { 
            event.preventDefault()
            const { target } = event 
            const newDonatObj = {
                date: getFormattedDate( new Date() ),
                amount: target.amount.value
            }  
            this.#createNewDonate(newDonatObj)
        
        });

        this.#formElement.innerHTML = this.#formHtml

        return  this.#formElement
    }

    updateTotalAmount(newAmount) {

        this.#formHtml = `
            <h1 id="total-amount"> ${newAmount} $</h1>
            <label class="donate-form__input-label"> Введите сумму в $
                <input class="donate-form__donate-input" name="amount" type="number" max="100" min="1" required="">
            </label>
            <button class="donate-form__submit-button" type="submit"> Задонатить
            </button>
        `
        this.#formElement.innerHTML = this.#formHtml

    }
}