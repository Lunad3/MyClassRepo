function DigitalPal (){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if (this.hungry){
            this.hungry = false;
            this.sleepy = true;
        }
        else{
            console.log("No thanks! I'm full");
        }
    };
    this.sleep = function(){
        if (this.sleepy){
            console.log("Zzzzzzzz");
        }
    };
    this.play = function(){
        if(this.bored){
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else{
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function(){
        this.age++;
        console.log("Happy BIrthday to me! I am " + this.age + "old!");
    };
};

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function(){
    console.log("Woof! woof!");
};
dog.goOutside = function(){
    if (!this.outside){
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }
    else{
        console.log("We're already outside though...");
    }
};
dog.goInside = function(){
    if (this.outside){
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else{
        console.log("I'm alread inside...");
    }
};

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function(){
    console.log("Meow! Meow!");
};
cat.destroyFurniture = function(){
    this.houseCondition -=10;
console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
};