$(document).ready(function()
{
    $(".next").on("click", function()
    {
        let current_image = $(".active")
        let next_image = current_image.next()

        if (next_image.length)
        {
            current_image.removeClass("active").css("z-index", -10)
            next_image.addClass("active").css("z-index", 10)
        }
    });

    $(".prev").on("click", function()
    {
        let current_image = $(".active")
        let prev_image = current_image.prev()

        if (prev_image.length)
        {
            current_image.removeClass("active").css("z-index", -10)
            prev_image.addClass("active").css("z-index", 10)
        }
    });
});