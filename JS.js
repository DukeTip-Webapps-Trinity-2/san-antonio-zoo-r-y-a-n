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




function h(){
    
    if($("#exampleRadios1").is(":checked")) {
        var it = "2";
        console.log(it);
      }else if($("#exampleRadios2").is(":checked")){
        var it = "3";
        console.log(it);
      }else {
          var it = "1";
          console.log(it);
      }
    var A = document.getElementById("formGroupExampleInput").value;
    var C = document.getElementById("formGroupExampleInput2").value;
    
    console.log()
    }