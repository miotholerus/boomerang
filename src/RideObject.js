import {dayOfWeekAsString} from './App'

export default class RideObject {
    constructor(date, driverTo, driverFrom) {
        this.date = date;
        this.driverTo = driverTo;
        this.driverFrom = driverFrom;
    }

    dateAsString() {
        return dayOfWeekAsString(this.date.getDay())+" "+this.date.getDate()+" "+this.date.toLocaleString('sv-se', { month: 'long' })
    }

    dateAsStringShort() {
        let weekday = this.date.toLocaleString('sv-se', { weekday: 'short' });
        weekday = weekday.substring(0, 1).toUpperCase()+weekday.substring(1);
        return weekday+" "+this.date.getDate()+" "+this.date.toLocaleString('sv-se', { month: 'long' })
    }

    // Getters tycks inte behövas, bara att kalla på t.ex rideObject.date
    // (men så här skulle de se ut)
    // get date() {
    //     return this.date;
    // }
    // get driverTo() {
    //     return this.driverTo;
    // }
    // get driverFrom() {
    //     return this.driverFrom;
    // }

    

    // Setters funkar inte än så länge :C
    // Tror att annoteringarna "bestämmer" vilken datatyp som ska vara på respektive attribut
    /**
     * @param {Date} date
     */
    set setDate(date) {
        this.date = date;
    }
    /**
     * @param {any} driverTo
     */
    set setDriverTo(driverTo) {
        this.driverTo = driverTo;
    }
    /**
     * @param {any} driverFrom
     */
    set setDriverFrom(driverFrom) {
        this.driverFrom = driverFrom;
    }


}