document.addEventListener('DOMContentLoaded', () =>
{
    //card options

    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'burger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'burger',
            img: 'images/cheeseburger.png'
        },

        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDipslay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []
    
    //create your board

    function createBoard()
    {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }

    function checkForMatch()
    {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]

        if (cardChosen[0] === cardChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardChosen);

        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('sorry, try again ')
        }
        
        cardChosen = []
        cardChosenId = []
        resultDipslay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDipslay.textContent = 'You found them all'
            
        }

    }

    //flip card
    function flipCard()
    {
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }   



    createBoard()


})