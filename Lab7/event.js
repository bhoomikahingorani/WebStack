document.addEventListener("DOMContentLoaded", function () {
    // Function to add a new list item
    function addListItem() {
        var inputField = document.getElementById("listItem");
        var listItemValue = inputField.value.trim();

        if (listItemValue !== "") {
            var ulElement = document.getElementById("dynamicList");
            var newListItem = document.createElement("li");
            newListItem.textContent = listItemValue;

            // Add event listener to remove the list item when clicked
            newListItem.addEventListener("click", function () {
                ulElement.removeChild(newListItem);
            });

            ulElement.appendChild(newListItem);
            inputField.value = ""; // Clear the input field
        }
    }

    // Add event listener to the button
    var addButton = document.getElementById("addItemBtn");
    addButton.addEventListener("click", addListItem);
});