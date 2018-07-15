var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
            {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144390f1c070aee9b6_340.jpg"},
            {name: "Granite Hill", image: "https://farm8.staticflickr.com/7259/7121858075_7375241459.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"},
            {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144390f1c070aee9b6_340.jpg"},
            {name: "Granite Hill", image: "https://farm8.staticflickr.com/7259/7121858075_7375241459.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"},
            {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144390f1c070aee9b6_340.jpg"},
            {name: "Granite Hill", image: "https://farm8.staticflickr.com/7259/7121858075_7375241459.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"}
]


app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs")
})


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server has Started!!");
});