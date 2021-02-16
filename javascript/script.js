var express = require("express");
 app = express();

 var bodyParser = require("body-parser");
 app.set("view engine", "ejs");
 app.use(express.static("public"));
 app.use (express.static("images"));
 app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.render("index")
});
app.get("home",function(req,res){
    res.render("index")
});
app.get("/search",function(req,res){
    res.render("search")
});
app.get("/product",function(req,res){
    res.render("product")
});
app.get("/producty",function(req,res){
    res.render("producty")
});
app.get("/login",function(req,res){
    res.render("login")
});
app.get("/register",function(req,res){
    res.render("index1")
});
app.get("/buyingpage",function(req,res){
    res.render("index11")
});
app.get("/admin",function(req,res){
    res.render("index12")
});
app.get("/profile",function(req,res){
    res.render("index13")
});
app.get("/stocks",function(req,res){
    res.render("index3")
});
app.get("/stocks",function(req,res){
    res.render("index3")
});
app.get("/stocks",function(req,res){
    res.render("index3")
});
app.get("/stocks",function(req,res){
    res.render("index3")
});
app.get("/stocks",function(req,res){
    res.render("index3")
});
app.get("/stocks",function(req,res){
    res.render("index3")
});

app.listen(3000, function(){
    console.log("server started")
})