const buttonRef: any = document.querySelector(".todo-button");
const inputRef: any = document.querySelector(".todo-title-input");
const listRef: any = document.querySelector(".todoItemList");
const errorMessage: any = document.querySelector(".titleErrorMessage");

const onItemRemove: any = (event) => {
  const removeButtonRef: any = event.target;
  const itemToRemove: any = removeButtonRef.closest("li");

  itemToRemove.remove();
};

const createDeleteButton: any = () => {
  //     /* Ghost button*/

  const deleteItemButton: Element = document.createElement("button");
  deleteItemButton.textContent = "X";

  deleteItemButton.classList.add("deleteItemButton");

  deleteItemButton.addEventListener("click", onItemRemove);
  return deleteItemButton;
};

const createNewItem: any = () => {
  //     /*Declare new LI element (ghost li)*/

  const newItem: Element = document.createElement("li");

  //     /*Legg til klasse*/
  newItem.classList.add("todoItem");

  //     /* Tar verdi av input elementet og legger til innholdet i liste elementet*/

  const newItemText: any = document.createElement("p");

  newItemText.textContent = inputRef.value;

  newItem.appendChild(newItemText);

  return newItem;
};

//   /* Lag en callback funksjon*/
//   /*Det som skjer når knappet blir trykket på */
const onItemAdd: any = () => {
  if (inputRef.value === "") {
    errorMessage.innerHTML = "Please enter a value ";
  } else {
    errorMessage.innerHTML = "";
    const newItem: any = createNewItem();
    const deleteItemButton: Element = createDeleteButton();

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

inputRef.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onItemAdd();
  }
});
