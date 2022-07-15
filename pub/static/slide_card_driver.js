/**
 * A lil slideshow card driver for Elements with class `slide-card`.
 * @Author Jess Sullivan
 */
var slideIndex = 0;
var SlideDriver = /** @class */ (function () {
    function SlideDriver(advanceSlide) {
        var _this = this;
        this.main = function () {
            var i;
            var slides = document.getElementsByClassName("slide-card");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(_this.main, _this.advanceSlideInterval); // Change image every 2 seconds
        };
        this.next = function () {
            var i;
            var slides = document.getElementsByClassName("slide-card");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
        };
        this.prev = function () {
            var i;
            var slides = document.getElementsByClassName("slide-card");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex--;
            if (!slideIndex) {
                slideIndex = slides.length;
            }
            slides[slideIndex - 1].style.display = "block";
        };
        this.currentSlide = function (slideIndexValue) {
            var i;
            var slides = document.getElementsByClassName("slide-card");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex = slideIndexValue;
            slides[slideIndex - 1].style.display = "block";
        };
        this.advanceSlideInterval = advanceSlide;
    }
    return SlideDriver;
}());
var slideDriver = new SlideDriver(4000);
slideDriver.main();
