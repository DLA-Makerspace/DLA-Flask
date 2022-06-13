/**
 * A smol animated popout card driver for HTML Elements with class `flex-item`.
 * @Author Jess Sullivan
 */
var FlexCardAnimate = /** @class */ (function () {
    function FlexCardAnimate(isAnimating) {
        if (isAnimating === void 0) { isAnimating = false; }
        var _this = this;
        this.cards = document.querySelectorAll('.flex-item');
        // grab the button:
        this.button = document.querySelector('button');
        // initialize animation state:
        this.isAnimating = false;
        // Get the selected card position
        this.selectedCardPosition = function (card) {
            var _a = card.getBoundingClientRect(), y = _a.y, x = _a.x;
            return { y: y, x: x };
        };
        // Get the first card position
        this.getFirstCardPosition = function (cards) {
            var _a = cards[0].getBoundingClientRect(), y = _a.y, x = _a.x;
            return { y: y, x: x };
        };
        this.hideCards = function (card, interval) {
            setTimeout(function () {
                _this.isAnimating = false;
                card.hidden = true;
            }, interval);
            card.saveStyle = card.style;
        };
        this.showCards = function (card, interval) {
            setTimeout(function () {
                _this.isAnimating = false;
                card.hidden = false;
            }, interval);
            card.saveStyle = card.style;
        };
        this.fadeCards = function (cards) {
            cards.forEach(function (card) {
                if (!card.selectedCard) {
                    card.classList.remove('card-show');
                    card.classList.add('card-hide');
                    _this.hideCards(card, 785);
                }
            });
        };
        this.revealCards = function (cards) {
            cards.forEach(function (card) {
                if (!card.selectedCard) {
                    _this.showCards(card, 0);
                    card.classList.remove('card-hide');
                    card.classList.add('card-show');
                }
            });
        };
        this.moveToDestination = function (card, firstCardPosition, selectedCardPosition) {
            var fXY = firstCardPosition();
            var sXY = selectedCardPosition();
            var firstCardX = fXY.x;
            var firstCardY = fXY.y;
            var selectedCardX = sXY.x;
            var selectedCardY = sXY.y;
            var moveToXPosition = (selectedCardX - firstCardX) * -1;
            var moveToYPosition = (selectedCardY - firstCardY) * -1;
            var translateX = 'translateX' + '(' + moveToXPosition + 'px' + ')';
            var translateY = 'translateY' + '(' + moveToYPosition + 'px' + ')';
            console.log(translateX);
            console.log(translateY);
            card.animate([], {
                duration: 1200,
                easing: "ease-in-out"
            });
            card.saveStyle = card.style;
        };
        this.clearCards = function (card) {
            card.selectedToggle = false;
            _this.revealCards(_this.cards);
            setTimeout(function () {
                card.style = card.saveStyle;
            }, 500);
            try {
                _this.moveToDestination(card, _this.getFirstCardPosition, _this.selectedCardPosition);
            }
            catch (e) {
                // console.log(e);
            }
        };
        this.main = function () {
            _this.cards.forEach(function (card) {
                // initialize the value to false
                card.selectedCard;
                // Grab the div that is the selected div.
                var showSelected = card.firstElementChild;
                // on click, do the things below.
                card.addEventListener('click', function () {
                    if (_this.isAnimating)
                        return;
                    // Toggle the value of the selected card
                    card.selectedCard = !card.selectedCard;
                    // store the x,y rectangle coords here:
                    var sXY = _this.selectedCardPosition(card);
                    var fXY = _this.getFirstCardPosition(_this.cards);
                    // if this is the card user just clicked, show the contents:
                    if (card.selectedCard && showSelected !== null) {
                        showSelected.style.display = 'block';
                        _this.getFirstCardPosition(_this.cards);
                        card.style.position = 'fixed';
                        card.style.width = 900 + 'px';
                        card.style.top = sXY.y - 32 + 'px';
                        card.style.left = sXY.x - 32 + 'px';
                        card.style.width = 85 + '%';
                        _this.fadeCards(_this.cards);
                        setTimeout(function () {
                            card.style.top = fXY.y + 'px';
                            card.style.left = fXY.x + 'px';
                        }, 800);
                    }
                    // if this is not the card user just clicked, ensure contents are hidden:
                    if (!card.selectedCard && showSelected !== null) {
                        showSelected.style.display = 'none';
                        _this.clearCards(card);
                    }
                });
            });
        };
        this.isAnimating = isAnimating;
        this.cards = document.querySelectorAll('.flex-item');
        this.isAnimating = false;
    }
    return FlexCardAnimate;
}());
var animatedPage = new FlexCardAnimate();
animatedPage.main();
