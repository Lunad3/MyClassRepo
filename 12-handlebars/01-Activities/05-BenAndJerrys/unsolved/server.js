var express = require("express");
var handlebars = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars",handlebars({ defaultLayout: "main"}));
app.set("view engine","handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
];

app.get("/icecream/:name",function(req,res){
    var icecream;
    for (var i=0; i<=icecreams.length; i++){
        if (icecreams[i] = req.params["name"]){
            icecream = icecreams[i];
        }
    }
    res.render("icecream",icecream);

});

app.get("/icecreams",function(req,res){
    res.render("index",{"icecreams":icecreams});
});

app.listen(PORT,function(){
    console.log("Server listening at on http://localhost:" + PORT);
});
