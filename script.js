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
    
    const recommendList = document.getElementById('recommendList');
    const prodImageAux = document.getElementById('prodImage');
    const prodNameAux = document.getElementById('prodName');
    const prodPriceAux = document.getElementById('prodPrice');
    const prodPayCondAux = document.getElementById('prodPayCond');

    fetch(url)
    .then(resp => resp.json())
    .then(function(result) {
        prodRef = result.data.references.item[0];
        prodImageAux.src = prodRef.imageName;
        prodNameAux.innerHTML = `${prodRef.name}`;
        prodPriceAux.innerHTML = `${prodRef.price}`;
        prodPayCondAux.innerHTML = `${prodRef.productInfo.paymentConditions}`;

        itensRecommend = result.data.recommendation;

        return itensRecommend.map(function(item) {
            var i = 1;
            
            let div = createNode('div'),
                itemImage = createNode('img'),
                itemName = createNode('span'),
                itemLabel01 = createNode('label'),
                itemPrice = createNode('span'),
                itemPayCond = createNode('span'),
                itemLabel02 = createNode('label');
                br1 = createNode('br');
                br2 = createNode('br');
                br3 = createNode('br');
                br4 = createNode('br');

            itemImage.className = "prodImage";
            itemImage.id = "prodImage" + i;
            itemImage.src = item.imageName;

            itemName.className = "prodName";
            itemName.id = "prodName" + i;
            itemName.innerHTML = `${item.name}`;

            itemLabel01.className = "prodLabel";
            itemLabel01.innerHTML = "Por:";

            itemPrice.className = "prodPrice";
            itemPrice.id = "prodPrice" + i;
            itemPrice.innerHTML = `${item.price}`;

            itemPayCond.className = "prodPayCond";
            itemPayCond.id = "prodPayCond" + i;
            itemPayCond.innerHTML = `${item.productInfo.paymentConditions}`;

            itemLabel02.className = "prodLabel";
            itemLabel02.innerHTML = "sem juros";

            div.className = "prodRecommend";

            br1.id = "br1";
            br2.id = "br2";
            br3.id = "br3";
            br4.id = "br4";

            append(div, itemImage);
            append(div, br1);
            append(div, itemName);
            append(div, br2);
            append(div, itemLabel01);
            append(div, itemPrice);
            append(div, br3);
            append(div, itemPayCond);
            append(div, br4);
            append(div, itemLabel02);
            append(recommendList, div);
        })
    })
    .catch(error => console.log(error))
}

