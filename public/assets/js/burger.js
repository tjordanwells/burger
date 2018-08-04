$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
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

    $(".devoured").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");

        console.log(isDevoured);

        if (isDevoured === 0) {
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: isDevoured
            }).then(function() {
                console.log("Devoured")
            });
        }

    });
});

