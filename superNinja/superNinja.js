class Ninja{
    constructor(name, health){
        this.name = name,
        this.health = health,
        this.speed = 3,
        this.strength = 3
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log( `${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength`);
    }
    drinkSake(){
        this.health += 10;
    }
}
class Sensei extends Ninja{
    constructor(name, health) {
        super(name, health)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const theSensai = new Sensei("aldetori", 200);
theSensai.speakWisdom();
theSensai.showStats();
