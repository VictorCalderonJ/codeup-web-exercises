(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    $.ajax('/inventory.json')
    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
    function loadInventory(){

    }

    $.ajax('/inventory.json')
        .done((data) => {
            console.log(data)
            renderInventory(data)
        });
    function renderInventory(InventoryItems) {
        for (let i = 0; i < InventoryItems.length ; i += 1){
            $(`#insertProducts`).append(`
            <tr>
                <td>${InventoryItems[i].title}</td>
                <td>${InventoryItems[i].quantity}</td>
                <td>${InventoryItems[i].price}</td>
                <td>${InventoryItems[i].categories.join(`, `)}</td>
            </tr>
            `)
        }
        // $(`#insertProducts`).html(`
        // <tr>
        // <tbody id="insertProducts">
        // <td>${InventoryItems.title}</td>
        // </tr>
        // </tbody>`)
    }


})();