$(document).ready(function () {
    var $submit = $('#submit');
    var $product = $('#product');
    var $list = $('#list');
    var $name = $('#name');
    var $cheese = $('#cheese');
    var $sauce = $('#sauce');
    var $pepperoni = $('#pepperoni');
    var pizzas = [];

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
            var buttonElem = $('<button>display</button>');
            buttonElem.on('click', this.display);
            pizzaShorthand.append(buttonElem);
            return pizzaShorthand;
        }
        this.display = display.bind(this);
        this.createShorthand = createShorthand.bind(this);
    }
    
    function displayPizzas() {
        var pizzaList = $('<div>');
        for(var i = 0; i < pizzas.length; i++) {
            var pizzaShorthandElem = pizzas[i].createShorthand();
            pizzaList.prepend(pizzaShorthandElem);
        }
        $list.html(pizzaList);
    }

    $submit.on('click', function () {
        var name = $name.val();
        console.log(name);
        var hasCheese = $cheese.is(':checked');
        var hasSauce = $sauce.is(':checked');
        var hasPepperoni = $pepperoni.is(':checked');
        var myPizza = new Pizza(name, hasCheese, hasSauce, hasPepperoni);
        pizzas.push(myPizza);
        myPizza.display();
        displayPizzas();
    })
});


