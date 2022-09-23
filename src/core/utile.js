import moment from 'moment'
import 'moment-precise-range-plugin'

export const getElementDate = ( date ) => {
    return moment(date).format("MMM Do YY")
}

export const getPriceseDate = ( date1, date2) => {
    const dateFormate1 = moment( date1 )
    const dateFormate2 =  moment( date2 )
    return moment.preciseDiff(dateFormate1, dateFormate2)
}