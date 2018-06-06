function character(g, a, n, p, h, s){
    this.gender = g;
    this.age = a;
    this.name = n;
    this.profession = p;
    this.hitPoints = h;
    this.strength = s;
    this.PrintStats = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.strength);
        console.log(this.hitPoints);
    };
    this.isAlive = function(){
        return (this.hitPoints > 0);
    };
    this.attack = function(aponent){
        aponent.hitPoints -= this.strength;
    };
    this.levelUp = function(){
        this.age++;
        this.strength += 5;
        this.hitPoints += 3;
    };
};

var p1 = new character("male",26,"Joe","Locksmith",50,14);
p1.printStats();