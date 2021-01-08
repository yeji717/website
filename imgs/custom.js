

// Fetch the items form the JSON file
function loadItems(){
    return fetch('https://yeji717.github.io/user/Downloads/imgs/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {

}
// main
loadItems()
    .then (items => {
        console.log(items);
        displayItems(items);
        // setEventListners(item)
    })
    .catch(console.log);