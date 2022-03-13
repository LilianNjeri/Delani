
$(function () {
    // Toggle on cards in what to do section
    $(".design-card").on("click", function () {
        $(".design").toggle("slow")
    })
    $(".development-card").on("click", function () {
        $(".development").toggle("slow")
    })
    $(".product-card").on("click", function () {
        $(".product").toggle("slow")
    })
    // Portfolio hover effect
    $("#work1").on("mouseenter", function () {
        $("#overlay").show("slow")
    }).on("mouseleave", function () {
        $("#overlay").hide("slow")
    })
    
    $("#work2").on("mouseenter", function () {
        $("#overlay2").show("slow")
    }).on("mouseleave", function () {
        $("#overlay2").hide("slow")
    })

    $("#work3").on("mouseenter", function () {
        $("#overlay3").show("slow")
    }).on("mouseleave", function () {
        $("#overlay3").hide("slow")
    })
    
    $("#work4").on("mouseenter", function () {
        $("#overlay4").show("slow")
    }).on("mouseleave", function () {
        $("#overlay4").hide("slow")
    })

    $("#work5").on("mouseenter", function () {
        $("#overlay5").show("slow")
    }).on("mouseleave", function () {
        $("#overlay5").hide("slow")
    })

    $("#work6").on("mouseenter", function () {
        $("#overlay6").show("slow")
    }).on("mouseleave", function () {
        $("#overlay6").hide("slow")
    })

    $("#work7").on("mouseenter", function () {
        $("#overlay7").show("slow")
    }).on("mouseleave", function () {
        $("#overlay7").hide("slow")
    })

    $("#work8").on("mouseenter", function () {
        $("#overlay8").show("slow")
    }).on("mouseleave", function () {
        $("#overlay8").hide("slow")
    })
})



