$(document).ready(function()
{
    $(".2-1").on("click", function()
    {
        let current_choice = $(".choice-active")
        let next_choice = $(".2-1")

        current_choice.removeClass("choice-active")
        next_choice.addClass("choice-active")

        let current_preview = $(".active")
        let next_preview = $(".1-1")

        current_preview.removeClass("active").css("z-index", -10)
        next_preview.addClass("active").css("z-index", 10)
    });

    $(".2-2").on("click", function()
    {
        let current_choice = $(".choice-active")
        let next_choice = $(".2-2")

        current_choice.removeClass("choice-active")
        next_choice.addClass("choice-active")

        let current_preview = $(".active")
        let next_preview = $(".1-2")

        current_preview.removeClass("active").css("z-index", -10)
        next_preview.addClass("active").css("z-index", 10)
    });

    $(".2-3").on("click", function()
    {
        let current_choice = $(".choice-active")
        let next_choice = $(".2-3")

        current_choice.removeClass("choice-active")
        next_choice.addClass("choice-active")

        let current_preview = $(".active")
        let next_preview = $(".1-3")

        current_preview.removeClass("active").css("z-index", -10)
        next_preview.addClass("active").css("z-index", 10)
    });

    $(".2-4").on("click", function()
    {
        let current_choice = $(".choice-active")
        let next_choice = $(".2-4")

        current_choice.removeClass("choice-active")
        next_choice.addClass("choice-active")

        let current_preview = $(".active")
        let next_preview = $(".1-4")

        current_preview.removeClass("active").css("z-index", -10)
        next_preview.addClass("active").css("z-index", 10)
    });

    $(".2-5").on("click", function()
    {
        let current_choice = $(".choice-active")
        let next_choice = $(".2-5")

        current_choice.removeClass("choice-active")
        next_choice.addClass("choice-active")

        let current_preview = $(".active")
        let next_preview = $(".1-5")

        current_preview.removeClass("active").css("z-index", -10)
        next_preview.addClass("active").css("z-index", 10)
    });

    $(".2-6").on("click", function()
    {
        let current_choice = $(".choice-active")
        let next_choice = $(".2-6")

        current_choice.removeClass("choice-active")
        next_choice.addClass("choice-active")

        let current_preview = $(".active")
        let next_preview = $(".1-6")

        current_preview.removeClass("active").css("z-index", -10)
        next_preview.addClass("active").css("z-index", 10)
    });
});