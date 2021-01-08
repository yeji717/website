

// Fetch the items form the JSON file
function loadItems(){
    return fetch('imgs/data.json')
    .then(response => console.log(response));
}

function displayItems(items) {

}
// main
loadItems()
    .then (items => {
        // console.log(items);
        // displayItems(items);
        // setEventListners(item)
    })
    .catch(console.log);