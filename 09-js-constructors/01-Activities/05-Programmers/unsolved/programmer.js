function Programmer(name, position, age, lang){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = lang;
    this.printInfo = function(){
        console.log(this.name);
        console.log(this.position);
        console.log(this.age);
        console.log(this.language);
    };
};

var steve = new Programmer("steve","web dev","35","js");
steve.printInfo();