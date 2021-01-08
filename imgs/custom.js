

// Fetch the items form the JSON file
function loadItems(){
    return fetch('/user/Downloads/imgs/data/data.json').then(response => console.log(response));
}

// main
loadItems()
    .then (items => {
        // displayItems(items);
        // setEventListners(item)
    })
    .catch(console.log);