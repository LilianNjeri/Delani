$(function () {
    $(".design-card").on("click", function () {
        $(".design").toggle("slow")
    })
    $(".development-card").on("click", function () {
        $(".development").toggle("slow")
    })
    $(".product-card").on("click", function () {
        $(".product").toggle("slow")
    })
})