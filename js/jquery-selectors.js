$(() => {

    function underlineThis(e) {
        // changes all h2s
        // $('h2').css('text-decoration', 'underline');
        // changes only the h2 that was clicked
        $(e.target).css('text-decoration', 'underline');
        $('p').css('color', 'red');
    }

    function noUnderlineThis(e) {
        $(e.target).css('text-decoration', 'none');
    }

    function changeToPointer(e) {
        $(e.target).css('cursor', 'pointer');
    }

    function changeFromPointer(e) {
        $(e.target).css('cursor', 'default');
    }

    function hideUnorderedList() {
        $('ul').css('display', 'none');
    }

    $('h2')
        .on('click', underlineThis)
        .on('dblclick', noUnderlineThis)
        .on('mouseenter', changeToPointer)
        .on('mouseleave', changeFromPointer);





























    //////////////////////////////////////////////////////////
    // Card Section
    //////////////////////////////////////////////////////////


    // Global Variables...
    let cardArray = [
        { id: 1, color: '#6fa2db' },
        { id: 2, color: '#b52073' },
        { id: 3, color: '#8c731f' },
        { id: 4, color: '#f9a324' },
        { id: 5, color: '#dfe0a7' },
        { id: 6, color: '#48b846' },
        { id: 7, color: '#1c9f3d' },
        { id: 8, color: '#3c5f36' },
        { id: 9, color: '#d4082f' },
        { id: 10, color: '#9d76b9' },
        { id: 11, color: '#ecb4e5' },
        { id: 12, color: '#21c95e' },
        { id: 13, color: '#df7329' },
        { id: 14, color: '#e2ef6c' },
        { id: 15, color: '#6073c7' }
    ];
    let nextCardId = cardArray.length + 1;
    const $cardsDiv = $('div.cards');


    // Functions...
    function renderCard(card, $div) {
        $div.prepend(`
            <div class="card" data-id="${card.id}" style="background-color: ${card.color};">
            </div>
        `);
    }

    function renderCards(cards, $div) {
        $div.html('');
        for(let card of cards) {
            renderCard(card, $div);
        }
    }

    function addCard() {
        const newCard = {
            id: nextCardId,
            color: randomHexColor()
        };
        cardArray.push(newCard);
        nextCardId++;
        renderCard(newCard, $cardsDiv);
    }

    function randomHexColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }

    function deleteCard(e) {
        const id = $(e.target).attr('data-id');
        console.log(id);
        cardArray = cardArray.filter(card => card.id !== parseFloat(id));
        console.log(cardArray);
        $(e.target).remove();
    }


    // Initial Card Render...
    renderCards(cardArray, $cardsDiv);










    $('h1')
        .on('click', hideUnorderedList);

    $('#add-card-btn').on('click', addCard);
    $('div.cards').on('click', 'div.card', deleteCard);























    // // Declare variable to store the selected element
    // let $idContainer = $("#id-container");
    // // Change the background to red
    // $idContainer.css('background-color', 'red');
    //
    // // Same thing but with JS
    // // let idContainer = document.querySelector("#id-container");
    // // idContainer.style.backgroundColor = "blue";
    //
    // // Select everything with the "title" class and change the
    // // color of the text to purple
    // $(".title").css('color', 'purple');
    //
    //
    // // Same thing with JS
    // // Notice we have to use .querySelectorAll() instead of .querySelector()
    // // This will return more than one element
    // // Notice we also have to loop through the list to change the CSS
    // // where in jQuery we can do it all from one method
    // let titleElements = document.querySelectorAll('.title');
    // titleElements.forEach(titleElement => {
    //     titleElement.style.color = 'blue';
    // });
    //
    //
    // // Use jQuery to select all 'li' elements
    // $('li').css('color', 'pink');
    //
    //
    // // Use jquery to select multiple selectors
    // $('h1, p, .highlight').css('font-weight', 'bold');
    //
    //
    // // Select everything
    // // We can also chain multiple methods to change more than
    // // one at a time
    // // We can also separate these methods onto multiple lines
    // $('*')
    //     .css('outline', '1px solid lightblue')
    //     .css('font-weight', 'bold')
    // ;
    //
    //
    // // Using jquery to check for a value
    // console.log($('[data-id="5"]').html());


});