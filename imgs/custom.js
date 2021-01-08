

// Fetch the items form the JSON file
function loadItems(){
    return fetch('https://yeji717.github.io/website/imgs/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

//Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');

}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img class="item_thumbnail" src="${item.image}" alt="${item.type}">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items){
    console.log(event.target.dataset.key);
    console.log(event.target.dataset.value);
}

function setEventListners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.button');
    logo.addEventListener('click', ()=> displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
    // const imgBtn = Document.querySelector('.imgBtn');
    // const one = imgBtn.firstChild;
    // console.log(one);
}

// }
// main
loadItems()
    .then (items => {
        console.log(items);
        displayItems(items);
        setEventListners(items);
    })
    .catch(console.log);