

// Fetch the items form the JSON file
function loadItems(){
    return fetch('https://yeji717.github.io/website/imgs/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item));

}

function createHTMLString(item) {
    return `
    <li class="item">
        <img class="item_thumbnail" src="${item.image}" alt="${item.type}">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// }
// main
loadItems()
    .then (items => {
        console.log(items);
        // console.log(items);
        displayItems(items);
        // setEventListners(item)
    })
    .catch(console.log);