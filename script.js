// Selectors
const form = document.getElementById("form");
const addItem = document.getElementById("addItem");
const toDoList = document.getElementById("toDoList");
const list = document.getElementById("list");

// Add an item to the list
const createItem = (e) => {
    e.preventDefault();
    let listItem = document.createElement("li");
    let txt = document.createTextNode(addItem.value);
    listItem.appendChild(txt);
    let closeButtn = document.createElement("span");
    closeButtn.className = "close";
    let buttnTxt = document.createTextNode("\u00D7");
    closeButtn.appendChild(buttnTxt);
    listItem.appendChild(closeButtn);
    toDoList.appendChild(listItem);
    closeButtn.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
    form.reset();
}

form.addEventListener('submit', createItem);

const myList = document.getElementsByTagName("li");
console.log(myList[0]);

// Mark item as checked
const checked = (e) => {
    e.preventDefault();
    e.target.classList.toggle('checked');
}

list.addEventListener('click', checked);
