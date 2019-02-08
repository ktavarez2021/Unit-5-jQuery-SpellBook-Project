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

$("#change").click(function(){
    console.log('test');
    $("body").css("background", 'url("https://cdn.shopify.com/s/files/1/2469/7243/products/0604-08-lisbon-pattern-patternlook-seamless-pattern-designs-for-the-fashion-and-lifestyle-industry-explore-and-buy-hundreds-of-royalty-free-stock-seamless-repeat-prints-surface-pattern-designer_1024x1024.jpg?v=1520553930")');
});

$(".dot").click(function(){
    $("h1").text("Congratulations!");
});