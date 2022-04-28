function addToCart(btnId) {
    // console.log(id)
    var table = document.getElementById('products');
    var numberOfRow = table.rows.length;
    for (var i = 0; i < numberOfRow; i++) {
        var row = table.rows[i];
        var name = row.cells[0].childNodes[0];
        var price = row.cells[1].childNodes[0];
        var btn = row.cells[2].childNodes[0];
        // console.log(name.textContent)
        // console.log(price.textContent)
        // console.log(btn.id)
        if (btn.id == btnId) {
            addToCart1();
        } else if (btn.id == btnId) {
            addToCart2();
            break;
        }



    }
    try {
        var btn1 = document.getElementById("addToCartBtn1");
        var btn2 = document.getElementById("addToCartBtn2");
        var btn3 = document.getElementById("addToCartBtn3");
        var btn4 = document.getElementById("addToCartBtn4");

        // if (id == btn1) {
        //     console.log(id)
        //     addToCart1();
        // } else if (id == "addToCart2") {
        //     addToCart2();
        // } else if (id == "addToCart3") {
        //     addToCart3();
        // } else if (id == "addToCart4") {
        //     addToCart4();
        // }

    } catch (e) {
        alert(e);
    }
}

// var buttons = document.querySelectorAll('.btn');
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function addToCart() {
//         console.log(buttons[i]);
//         console.log(buttons);

//     }
// }

function addToCart1() {
    var table = document.getElementById("mycart");
    var numberOfRow = table.rows.length;
    var totalAmount = document.getElementById('theTotal');
    var productName = document.getElementById("razer_m");
    var productPrice = document.getElementById("razer_m_price");
    var price = productPrice.innerHTML;
    totalAmount.innerHTML = parseInt(totalAmount.innerText) + parseFloat(price);
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var insertNewElement = document.createElement("input");
    insertNewElement.type = "button";
    var removeBtnName = "deleteItem" + (numberOfRow + 1);
    insertNewElement.name = removeBtnName;
    insertNewElement.classList.add("btn")
    insertNewElement.classList.add("btn-outline-danger")
    insertNewElement.setAttribute('value', 'Remove');
    insertNewElement.onclick = function() {
        removeItem(removeBtnName);
    }

    cell1.innerHTML = productName.innerHTML;
    cell2.innerHTML = productPrice.innerHTML;
    cell3.appendChild(insertNewElement);

}

function addToCart2() {
    var totalAmount = document.getElementById('theTotal');
    var productName = document.getElementById("razer_mk");
    var productPrice = document.getElementById("razer_mk_price");
    var price = productPrice.innerHTML;
    totalAmount.innerHTML = parseInt(totalAmount.innerText) + parseFloat(price);
    var table = document.getElementById("mycart");
    var numberOfRow = table.rows.length;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var insertNewElement = document.createElement("input");
    insertNewElement.type = "button";
    var removeBtnName = "deleteItem" + (numberOfRow + 1);
    insertNewElement.name = removeBtnName;
    insertNewElement.classList.add("btn")
    insertNewElement.classList.add("btn-outline-danger")
    insertNewElement.setAttribute('value', 'Remove');
    insertNewElement.onclick = function() {
        removeItem(removeBtnName);
    }

    cell1.innerHTML = productName.innerHTML;
    cell2.innerHTML = productPrice.innerHTML;
    cell3.appendChild(insertNewElement);
}

function addToCart3() {
    var totalAmount = document.getElementById('theTotal');
    var productName = document.getElementById("rk_mk");
    var productPrice = document.getElementById("rk_mk_price");
    var price = productPrice.innerHTML;
    totalAmount.innerHTML = parseInt(totalAmount.innerText) + parseFloat(price);
    var table = document.getElementById("mycart");
    var numberOfRow = table.rows.length;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var insertNewElement = document.createElement("input");
    insertNewElement.type = "button";
    var removeBtnName = "deleteItem" + (numberOfRow + 1);
    insertNewElement.name = removeBtnName;
    insertNewElement.classList.add("btn")
    insertNewElement.classList.add("btn-outline-danger")
    insertNewElement.setAttribute('value', 'Remove');
    insertNewElement.onclick = function() {
        removeItem(removeBtnName);
    }

    cell1.innerHTML = productName.innerHTML;
    cell2.innerHTML = productPrice.innerHTML;
    cell3.appendChild(insertNewElement);
}

function addToCart4() {
    var totalAmount = document.getElementById('theTotal');
    var productName = document.getElementById("logi_gh");
    var productPrice = document.getElementById("logi_gh_price");
    var price = productPrice.innerHTML;
    totalAmount.innerHTML = parseInt(totalAmount.innerText) + parseFloat(price);
    var table = document.getElementById("mycart");
    var numberOfRow = table.rows.length;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var insertNewElement = document.createElement("input");
    insertNewElement.type = "button";
    var removeBtnName = "deleteItem" + (numberOfRow + 1);
    insertNewElement.name = removeBtnName;
    insertNewElement.classList.add("btn")
    insertNewElement.classList.add("btn-outline-danger")
    insertNewElement.setAttribute('value', 'Remove');
    insertNewElement.onclick = function() {
        removeItem(removeBtnName);
    }

    cell1.innerHTML = productName.innerHTML;
    cell2.innerHTML = productPrice.innerHTML;
    cell3.appendChild(insertNewElement);
}

function removeItem(removeBtnName) {
    try {
        var table = document.getElementById('mycart');
        var numberOfRow = table.rows.length;
        for (var i = 0; i < numberOfRow; i++) {
            var row = table.rows[i];
            var actionBtn = row.cells[2].childNodes[0];
            if (actionBtn.name == removeBtnName) {
                table.deleteRow(i);
                var price = row.cells[1].childNodes[0];
                var totalAmount = document.getElementById('theTotal');
                totalAmount.innerHTML = totalAmount.innerHTML - price.textContent;
                numberOfRow--;
            }

        }
    } catch (e) {
        alert(e);
    }
}