$(".flwdth>button").mouseenter(function () {

    $(".c").hide("slide", {direction: "right"}, 180);
    $(".cv").delay(200).show("slide", {direction: "left"}, 220);

});
$(".flwdth>button").mouseleave(function () {

    $(".cv").hide("slide", {direction: "right"}, 180);
    $(".c").delay(200).show("slide", {direction: "left"}, 220);

});