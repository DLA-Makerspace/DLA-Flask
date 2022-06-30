/**
 * A lil slideshow card driver for Elements with class `slide-card`.
 * @Author Jess Sullivan
 */


let slideIndex = 0;

interface Slide extends HTMLCollectionOf<any> {
  style?: any;
}

class SlideDriver {

  public advanceSlideInterval: any;

  constructor(advanceSlide: number) {
    this.advanceSlideInterval = advanceSlide;
  }

  main = () => {
    let i;
    let slides: Slide = document.getElementsByClassName("slide-card");
    for (i = 0; i < slides.length; i++) {
      slides[i]!.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(this.main, this.advanceSlideInterval); // Change image every 2 seconds
  }

    next = () => {
    let i;
    let slides: Slide = document.getElementsByClassName("slide-card");
    for (i = 0; i < slides.length; i++) {
      slides[i]!.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
  }

  prev = () => {
    let i;
    let slides: Slide = document.getElementsByClassName("slide-card");
    for (i = 0; i < slides.length; i++) {
      slides[i]!.style.display = "none";
    }
    slideIndex--;
    if (!slideIndex) {
      slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
  }

  currentSlide = (slideIndexValue: number) => {

    let i;
    let slides: Slide = document.getElementsByClassName("slide-card");
    for (i = 0; i < slides.length; i++) {
      slides[i]!.style.display = "none";
    }

    slideIndex = slideIndexValue;

    slides[slideIndex - 1].style.display = "block";
  }

}

const slideDriver = new SlideDriver(4000);
slideDriver.main();

