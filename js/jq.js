$(document).ready(function () {
    $(".thumbnails img").click(function () {
        $(".main-img img").attr("src", $(this).attr("src")).fadeIn();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $(".fa-chevron-right").click(function () {


        let x = $(".main-img img").attr("src");
        let y = $(".thumbnails img:last").attr("src");
        if (x === y) {
            $(`.thumbnails img:first`).click();

        } else {
            $(`.thumbnails img[src = '${x}']`).next("img").click();


        }




    });
    $(".fa-chevron-left").click(function () {


        let x1 = $(".main-img img").attr("src");
        let y1 = $(".thumbnails img:first").attr("src");
        if (x1 === y1) {
            $(`.thumbnails img:last`).click();

        } else {
            $(`.thumbnails img[src = '${x1}']`).prev("img").click();


        }




    });
});