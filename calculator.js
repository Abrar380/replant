const express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get(["/", "/index.html"],function(req,res){
  res.render("index.ejs", {});
});

// app.get("css/styles.css",function(req,res){
//   res.render(__dirname + "/public/css/styles.css");
// });
//
//
// app.get("/js/function.js",function(req,res){
//   res.render(__dirname + "/public/js/function.js");
// });

app.post("/",function(req,res){
  var pages = Number(req.body.pages);
  var pages1 = Number(pages*365)/10000;
  var result = Math.round(pages1);
  // res.type(".js");
  res.send("You have to grow "  + result + " trees to compensate.");
});

app.listen(3000,function() {
  console.log("server is running");
});
