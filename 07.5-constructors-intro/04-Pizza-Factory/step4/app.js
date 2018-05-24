$(document).ready(function () {
    var $product = $('#product');
    var $list = $('#list');

    function Pizza(name, hasCheese, hasSauce, hasPepperoni) {
        this.name = name;
        this.hasCheese = hasCheese;
        this.hasSauce = hasSauce;
        this.hasPepperoni = hasPepperoni;
        function display() {
            var pizzaElem = $('<div>');
            var nameElem = $('<div>' + this.name + '</div>');
            pizzaElem.append(nameElem);

            var cheeseElem;
            if (this.hasCheese) {
                cheeseElem = $('<div>Cheese</div>');
            } else {
                cheeseElem = $('<div>No Cheese</div>');
            }
            pizzaElem.append(cheeseElem);

            var sauceElem;
            if (this.hasSauce) {
                sauceElem = $('<div>Sauce</div>');
            } else {
                sauceElem = $('<div>No Sauce</div>');
            }
            pizzaElem.append(sauceElem);

            var pepperoniElem;
            if (this.hasPepperoni) {
                pepperoniElem = $('<div>Pepperoni</div>');
            } else {
                pepperoniElem = $('<div>No Pepperoni</div>');
            }
            pizzaElem.append(pepperoniElem);

            $product.html(pizzaElem);
        }
        function createShorthand() {
            var pizzaShorthand = $('<div>');
            var nameElem = $('<div>' + this.name + '</div>');
            pizzaShorthand.append(nameElem);
            return pizzaShorthand;
        }
        this.display = display.bind(this);
        this.createShorthand = createShorthand.bind(this);
    }

    var myPizza = new Pizza('Taylor', true, true, false);
    console.log(myPizza);
    myPizza.display();
    var myShorthand = myPizza.createShorthand();
    $list.append(myShorthand);
});


