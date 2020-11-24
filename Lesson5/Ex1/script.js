function addTomato() {
  var listItem = document.createElement("LI");
  var textnode = document.createTextNode("עגבניה");
  listItem.appendChild(textnode);
  document.getElementById("shoppingList").appendChild(listItem);
}
