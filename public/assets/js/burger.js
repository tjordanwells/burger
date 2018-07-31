$(function() {
    $("#submit").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burger-input").val().trim(),
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added new Burger");
                location.reload();
            }
        );
    });
});