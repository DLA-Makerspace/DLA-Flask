/**
 * A smol animated popout card driver for HTML Elements with class `flex-item`.
 * @Author Jess Sullivan
 */

interface Card extends Element {
  hidden?: boolean;
  selectedCard?: boolean;
  showSelected?: any;
  style?: any;
  saveStyle?: any;
  y?: number;
  x?: number;
  selectedToggle?: boolean | null;
}


class FlexCardAnimate {

  cards: NodeListOf<Element> = document.querySelectorAll('.flex-item');

  constructor(isAnimating: boolean = false) {
    this.isAnimating = isAnimating;
    this.cards = document.querySelectorAll('.flex-item');
    this.isAnimating = false;
  }

  // grab the button:
  public button: HTMLButtonElement | null = document.querySelector('button')

  // initialize animation state:
  isAnimating: boolean = false;

  // Get the selected card position
  selectedCardPosition: (card: Card) => { x: number; y: number } = (card: Card) => {
    const {y, x} = card.getBoundingClientRect();
    return {y, x};
  }

  // Get the first card position
  getFirstCardPosition: (cards: NodeListOf<Element>) => { x: any; y: any } = (cards) => {
    const {y, x} = cards[0]!.getBoundingClientRect();
    return {y, x};
  }

  hideCards = (card : Card, interval: number) => {
    setTimeout(() => {
      this.isAnimating = false;
      card.hidden = true;
    }, interval)
    card.saveStyle = card.style;
  }

  showCards = (card: Card, interval: number) => {
    setTimeout(() =>{
      this.isAnimating = false;
      card.hidden = false;
    }, interval)
    card.saveStyle = card.style;
  }


  fadeCards = (cards: NodeListOf<Element>) => {
    cards.forEach((card: Card) => {
      if (!card.selectedCard) {
        card.classList.remove('card-show');
        card.classList.add('card-hide');
        this.hideCards(card, 785);
      }
    });
  }

  revealCards = (cards: NodeListOf<Element>) => {
    cards.forEach((card: Card) => {
      if (!card.selectedCard) {
        this.showCards(card, 0);
        card.classList.remove('card-hide');
        card.classList.add('card-show');
      }
    })
  }

  moveToDestination = (card: Card, firstCardPosition: Function, selectedCardPosition: Function) => {

    const fXY = firstCardPosition();
    const sXY = selectedCardPosition();

    const firstCardX = fXY.x;
    const firstCardY = fXY.y;
    const selectedCardX = sXY.x;
    const selectedCardY = sXY.y;

    const moveToXPosition = (selectedCardX - firstCardX) * -1;
    const moveToYPosition = (selectedCardY - firstCardY) * -1;

    const translateX = 'translateX' + '(' + moveToXPosition + 'px' + ')';
    const translateY = 'translateY' + '(' + moveToYPosition + 'px' + ')';

    console.log(translateX);
    console.log(translateY);

    card.animate(
        [], {
          duration: 1200,
          easing: "ease-in-out"
        });

    card.saveStyle = card.style;

  }

  clearCards = (card: Card) => {
    card.selectedToggle = false;
    this.revealCards(this.cards);
    setTimeout(() => {
      card.style = card.saveStyle;
    }, 500)
    try {
      this.moveToDestination(card, this.getFirstCardPosition, this.selectedCardPosition);
    } catch (e) {
      // console.log(e);
    }
  }


  main = () => {

    this.cards.forEach((card: Card) => {

      // initialize the value to false
      card.selectedCard;

      // Grab the div that is the selected div.
      let showSelected: Card | null = card.firstElementChild;

      // on click, do the things below.
      card.addEventListener('click', () => {
        if (this.isAnimating) return

        // Toggle the value of the selected card
        card.selectedCard = !card.selectedCard;

        // store the x,y rectangle coords here:
        let sXY = this.selectedCardPosition(card);
        let fXY = this.getFirstCardPosition(this.cards);

        // if this is the card user just clicked, show the contents:
        if (card.selectedCard && showSelected !== null) {

          showSelected.style.display = 'block';
          this.getFirstCardPosition(this.cards);

          card.style.position = 'fixed';
          card.style.width = 900 + 'px';
          card.style.top = sXY.y - 32 + 'px';
          card.style.left = sXY.x - 32 + 'px';
          card.style.width = 85 + '%';

          this.fadeCards(this.cards);

          setTimeout(() => {
            card.style.top = fXY.y + 'px';
            card.style.left = fXY.x + 'px';
          }, 800)

        }

        // if this is not the card user just clicked, ensure contents are hidden:
        if (!card.selectedCard && showSelected !== null) {
          showSelected.style.display = 'none';
          this.clearCards(card)
        }
      });
    });
  }
}


const animatedPage = new FlexCardAnimate();
animatedPage.main();
