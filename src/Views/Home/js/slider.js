(function () {
    var btnGalleryNext = document.body.querySelector(".gallery-button-next");
    var btnGalleryBack = document.body.querySelector(".gallery-button-back");

    var slides = document.body.querySelectorAll(".slides .slide");
    var currentSlide = 0;

    btnGalleryNext.addEventListener("click", function (evt) {
        slides[currentSlide].classList.remove("slide-show");
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].classList.add("slide-show");
    });

    btnGalleryBack.addEventListener("click", function (evt) {
        slides[currentSlide].classList.remove("slide-show");
        currentSlide = (currentSlide===0) ? (slides.length - 1) : (Math.abs((currentSlide-1))%slides.length);
        slides[currentSlide].classList.add("slide-show");
    });
})();