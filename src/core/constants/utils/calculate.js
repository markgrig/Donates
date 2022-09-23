import moment from 'moment'

export const  calculateSumOfNumbers = ( numbers ) => {

    let sum = 0
    console.log();
    numbers.forEach(element => {
        sum += element.amount
    });

    return sum
}

export const getFormattedDate = ( date ) => {
    return moment(date).format("MMM Do YY, h:mm:ss a"); 
}