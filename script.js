// // //Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'http://localhost:3000/products', true);

// request.onload = function () {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.response);
//     console.log("teste");
//     if (request.status >= 200 && request.status < 400) {
//         console.log(data);
//     } else {
//       console.log('error');
//     }
// }

// Send request
//request.send();

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function searchItems() {
    const businessId = document.getElementById("businessIdInput").value;
    const url = 'http://localhost:3000/products/' + businessId; 
    
    const ul = document.getElementById('dataProd');
    const prodImageAux = document.getElementById('prodImage');
    const prodNameAux = document.getElementById('prodName');
    const prodPriceAux = document.getElementById('prodPrice');
    const prodPayCondAux = document.getElementById('prodPayCond');

    fetch(url)
    .then(resp => resp.json())
    .then(function(result) {
        prodRef = result.data.references.item[0];
        prodImageAux.src = prodRef.imageName;
        prodNameAux.innerHTML = `${prodRef.name}`
        prodPriceAux.innerHTML = `${prodRef.price}`
        prodPayCondAux.innerHTML = `${prodRef.productInfo.paymentConditions}`;
    })
    .catch(error => console.log(error))
}

