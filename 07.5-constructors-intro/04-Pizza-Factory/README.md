# **Instructions**

* Work with your group to do the following:

  * Step 1: Planning

    * As a group pick a product (e.g. Pizza)

    * Pick options for the product (e.g. Cheese, Pepperoni, Sausage etc.)

    * Plan how to display full details of product.

    * Plan how to display shorthand details of product.

  * Step 2: Constructor

    * Create a simple constructor (likely just properties only at this point) that takes in options and makes a product.

    * Test constructor by invoking constructor passing it options directly in the code. e.g. var myPizza = new Pizza(true, false);

  * Step 3: Display Method

    * Create a _method_ inside your product constructor that creates a jQuery element and fills it with full product information and adds the jQuery element to the page.

  * Step 4: Display Shorthand Method

    * Create a _method_ inside your product constructor that creates a jQuery element and fills it with shorthand product information and returns the jQuery element.

  * Step 5: Display List Function

    * Create a _function_ that takes a list of products as input and creates a jQuery element and fills it with a table of shorthand product information and adds the jQuery element to the page.

  * Step 6: Create Item Form

    * Create a list of inputs in html for your options.

    * Add a submit button that will:
      
      * Use jQuery to get all user input

      * Take user input and create a new product using the constructor

      * Add the constructor to a global array.

      * Redisplay the array

      * Update the current product

  * Step 7: Display Buttons on Shorthand Items

    * Add to your shorthand _method_ a button that when you click it changes the current product displayed to this object that you clicked.

  * Bonus: If finished

    * Try and add more functionality of your choice.