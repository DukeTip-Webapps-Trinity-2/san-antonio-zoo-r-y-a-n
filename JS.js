// useless
//  window.onload = function (){
//     document.querySelector('h1').mouseover = h1onmouseover = h1OnMouseOver;
//     document.querySelector('h1').mouseout = h1mouseout = h1OnMouseOut;
//     document.querySelector('h2').mouseover = h2mouseover = h2OnMouseOver;
//     document.querySelector('h2').mouseover =h2mouseout = h2OnMouseOver;
// }
// function h1OnMouseOver(){
// this.innerHTML = 
// }
$(document).ready(function() {
    $('#dooot').hover(titleMouseOn, titleMouseOff);
    $('#doot').hover(doop, doopdoop);  
    $('#number101').hover(number101, number111);
    $('hello').hover(hello, hello); 
    $('#formGroupExampleInput').hover(h, h);
    $('#formGroupExampleInput2').hover(h, h);
    $('.form-check-input').hover(h, h);
    $('#formGroupExampleInput3').hover(l, l);
});
function titleMouseOn() {
    $(this).text("Hey, at least I didn't scam you.");
    $(this).css({
        "color":"#FF0000",
   "backgroundColor" : "#000000",
    });
}

function titleMouseOff(){
    $(this).text ("I'm sorry, but this isn't the official San Antonio Zoo website, and you're not purchasing any tickets from this website.");
    $(this).css({
        "color" : "#000000",
   "backgroundColor" : "#bfbfbf",
});
}
function doop(){
    $(this).css({
   "color" : "#aaaaaa",
});
}

function doopdoop(){
    $(this).css({
    "color" : "#bfbfbf",
});
}
function number101(){
    $(this).text("Hello");
    $(this).css({
        "color" : "#FF0000",
    "backgroundColor" : "#000000",        
    });
}
function number111(){
    $(this).text ("Exhibits");
    $(this).css({
        "color" : "#000000",
        "backgroundColor" : "rgba(240, 237, 219, 0.877)",
    });
}
function hello(){
    $(this).text ("we are fake");
    $(this).css({
        "color" : "#FF0000",
        "backgroundColor" :"#000000",
    });    
}
function helllo(){
    $(this).text ("Welcome to the Zoo!");
    $(this).css({
        "color" : "#000000",
        "backgroundColor" : "rgba(240, 237, 219, 0.877)",
    });
}
function h(){
    var T = 0;
    if($("#exampleRadios1").is(":checked")) {
        var it = 2;
        console.log(it);
        var A = document.getElementById("formGroupExampleInput").value;
        var C = document.getElementById("formGroupExampleInput2").value;
        A *= 23.99;
        C *= 20.99;
        console.log(A + C);
        T = A + C;
        T = T.toFixed(2);
        $(".price").html(T);
      }else if($("#exampleRadios2").is(":checked")){
        var it = 3;
        console.log(it);
        var A = document.getElementById("formGroupExampleInput").value;
        var C = document.getElementById("formGroupExampleInput2").value;
        A *= 17.50
        C *= 14.25
        console.log(A + C);
        T = A + C;
        T = T.toFixed(2);
        $(".price").html(T);
      }else {
          var it = 1;
          console.log(it);
        var T = "Please select a type of ticket."
      }

    }
function l() {
    var M = document.getElementById("formGroupExampleInput3").value;
    M *= 35.00;
    console.log(M);
    M = M.toFixed(2);
    $(".price").html(M);
}
//f2faf554e079aaf6c7f10339c3da9e59
$(document).ready(function () {
 
        var city = 78212;
        var apiKey = "f2faf554e079aaf6c7f10339c3da9e59";
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
        console.log(uri);
        $.get(uri, onRes);
});



function onRes(response) {
console.log(response)
$(".country").html (response.sys.country)
$(".temp").html (response.main.temp);
$(".city-name").html (response.name);
$(".weather").html (response.weather[0].description)
}

