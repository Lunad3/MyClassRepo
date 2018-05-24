$(document).ready(function () {
    function Pizza(name, hasCheese, hasSauce, hasPepperoni) {
        this.name = name;
        this.hasCheese = hasCheese;
        this.hasSauce = hasSauce;
        this.hasPepperoni = hasPepperoni;
    }

    var myPizza = new Pizza('Taylor', true, true, false);
    console.log(myPizza);
});


