
var list = document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li') ;
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild); 

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i++) {
 listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let header = document.getElementsByTagName('h2')[0];
header.insertAdjacentHTML("beforeend", `<span>${list.children.length}</span>`);








