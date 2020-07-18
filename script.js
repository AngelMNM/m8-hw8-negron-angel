$(document).ready(function() {
    console.log("ready!");
    alert("Click on blue box and it will move");

    $("#animBox").click(function() {
        $("#animBox").animate({ left: "50%" }, 800, "swing");
        $("#animBox").animate({ top: "50%" }, 1000, "swing");
        $("#animBox").animate({ left: "0%" }, 800, "swing");
        $("#animBox").animate({ top: "0%" }, 1000, "swing", function() {
            alert("Full animation complete");
        });
        console.log("done!");
    })
});