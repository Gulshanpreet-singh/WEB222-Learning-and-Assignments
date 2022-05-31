/*
An application uses an Array as a Stack (LIFO) to keep track of items in a user’s shopping history. Every time they browse to an item, you want to addItemToHistory(item). How would you implement this?
*/

let history = [];

function addItemToHistory(item){
    history.unshift(item);
}

addItemToHistory("item 2");
console.log(history);

addItemToHistory("item 1");
console.log(history);