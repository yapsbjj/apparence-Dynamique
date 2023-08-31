function addListValue() {
    let input = document.getElementById("last-name");
    let freeName = document.getElementById("freeName");

    let newItemList = document.createElement("newComment");

    let newItemListContent = document.createTextNode(input.value);

    newItemList.appendChild(newItemListContent);

    freeName.appendChild(newItemList);
}

function addListValue1() {
    let input = document.getElementById("first-name");
    let freeName = document.getElementById("freeName");

    let newItemList = document.createElement("newComment");

    let newItemListContent = document.createTextNode(input.value);

    newItemList.appendChild(newItemListContent);

    freeName.appendChild(newItemList);
}

function addListValue2() {
    let input = document.getElementById("message");
    let freeComment = document.getElementById("freeComment");

    let newItemList = document.createElement("newComment");

    let newItemListContent = document.createTextNode(input.value);

    newItemList.appendChild(newItemListContent);

    freeComment.appendChild(newItemList);
}


