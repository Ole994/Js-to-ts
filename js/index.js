var buttonRef = document.querySelector(".todo-button");
var inputRef = document.querySelector(".todo-title-input");
var listRef = document.querySelector(".todoItemList");
var errorMessage = document.querySelector(".titleErrorMessage");
var onItemRemove = function (event) {
    var removeButtonRef = event.target;
    var itemToRemove = removeButtonRef.closest("li");
    itemToRemove.remove();
};
var createDeleteButton = function () {
    //     /* Ghost button*/
    var deleteItemButton = document.createElement("button");
    deleteItemButton.textContent = "X";
    deleteItemButton.classList.add("deleteItemButton");
    deleteItemButton.addEventListener("click", onItemRemove);
    return deleteItemButton;
};
var createNewItem = function () {
    //     /*Declare new LI element (ghost li)*/
    var newItem = document.createElement("li");
    //     /*Legg til klasse*/
    newItem.classList.add("todoItem");
    //     /* Tar verdi av input elementet og legger til innholdet i liste elementet*/
    var newItemText = document.createElement("p");
    newItemText.textContent = inputRef.value;
    newItem.appendChild(newItemText);
    return newItem;
};
//   /* Lag en callback funksjon*/
//   /*Det som skjer når knappet blir trykket på */
var onItemAdd = function () {
    if (inputRef.value === "") {
        errorMessage.innerHTML = "Please enter a value ";
    }
    else {
        errorMessage.innerHTML = "";
        var newItem = createNewItem();
        var deleteItemButton = createDeleteButton();
        newItem.appendChild(deleteItemButton);
        //       /*Add HTML element to DOM. After the line below we have a newchild
        //       Listref= Ul element*/
        listRef.appendChild(newItem);
        //       /* */
        inputRef.value = "";
    }
};
//   /*Registrer et callback på buttonRef når click skjer */
buttonRef.addEventListener("click", onItemAdd);
inputRef.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        onItemAdd();
    }
});
