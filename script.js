$(document).ready(function() {
    console.log("ready!");
    $("#animBox").click(function() {
        $("#animBox").animate({ left: "50%" }, 800, "swing");
        $("#animBox").animate({ top: "50%" }, 1000, "swing");
        $("#animBox").animate({ left: "0%" }, 800, "swing");
        $("#animBox").animate({ top: "0%" }, 1000, "swing");
    })
});