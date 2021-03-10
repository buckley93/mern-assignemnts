class ninja{
    constructor(ninjaName, ninjaHealth){
        this.name = ninjaName,
        this.health = ninjaHealth,
        this.speed = 3,
        this.strength = 3
    }
    sayName(name){
        console.log(this.name);
    }
    showStats(health,speed,strength){
        console.log( `${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength`);
    }
    drinkSake(health){
        this.health += 10;
    }
}
const ninja1 = new ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


