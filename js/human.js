/**
 * Created by 2ndframe on 2017/8/28.
 */
class Human{
    constructor(obj={}){
        this.atc = 4;
        this.def = 3;
        this.spd = 3;
        this.skl = 2;
        this.luk = 2;
        this.MHP = 12;
        for(var prop in obj){
            this[prop] = obj[prop];
        }
        this.HP = this.MHP;
        Human.ADDED = 0;
        if(!obj.hasOwnProperty('name')){
            this.name = 'guy'+Human.ADDED;
            Human.ADDED ++;
        }
    }
}