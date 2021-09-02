$(document).ready(function() {
    $("#nameform").submit(function(e){
        e.preventDefault();
        $("#jumbotron").text($("#fname").val() + " " + $("#lname").val());
    });
});
