//Spell #1

$(".button").hover(function(){
    $(".picture").fadeToggle();
 
});



//Spell #2

$("#hat").mouseenter(function(){
    $("#bunny").slideToggle();
 
});



//Spell #3

$(".stop").dblclick(function(){
    $(".netflix").toggle();
 
});

$(".kitten").click(function(){
    $(".cat").hide();
    
});
$(".color").mouseleave(function(){
    $(".fun").fadeOut();
});
$("#reset").click(function(){
    $("img").show();
});



