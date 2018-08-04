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
        var devoured = $(this).data("devoured");
        console.log(id);
        console.log(devoured);

        if (devoured === 0) {

            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: {
                    devoured: 1
                }
            }).then(function() {
                console.log("Devoured")
            });
        }

    });
});

