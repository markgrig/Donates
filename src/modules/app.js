import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'
import { calculateSumOfNumbers, getFormattedDate } from '../core/constants/utils/calculate'
import { SETTINGS_VALUES } from '../core/constants/setting'


export class App {
    #donateForm
    #donateList
    constructor( arrayDonates, totalAmount ) {

        const mockDonates = [
            { amount: 4, date:  getFormattedDate ( new Date( 2022, 8, 5 ,35 , 16) ) },
            { amount: 20, date: getFormattedDate ( new Date( 2022, 8, 5 ,38 , 21 ) )},
            { amount: 3, date:  getFormattedDate ( new Date( 2022, 9, 5 ,39 , 46 ) )},
            { amount: 1, date:  getFormattedDate ( new Date( 2022, 10, 5 ,45 , 55) )},
        ];

        this.state = {
            donates: arrayDonates || mockDonates ,
            totalAmount: totalAmount || calculateSumOfNumbers( mockDonates )
        }
        
        this.#donateForm = new DonateForm( this.state.totalAmount , this.createNewDonate.bind(this) , SETTINGS_VALUES.currency )
        this.#donateList = new DonateList( this.state.donates, SETTINGS_VALUES.currency )

    }
    run() {

        const donateFormElement = this.#donateForm.render()
        const donateListElement = this.#donateList.render()
        this.#donateList.updateDonates( this.state.donates )
        document.body.append( donateFormElement, donateListElement   )
        
    }
    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount +=  Number( newDonate.amount)
        this.#donateList.updateDonates( this.state.donates )
        this.#donateForm.updateTotalAmount(this.state.totalAmount)
        console.log(this.state.totalAmount);
    }
}


