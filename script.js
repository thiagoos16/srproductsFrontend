function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function searchItems() {
    const businessId = document.getElementById("businessIdInput").value;
    const url = 'http://localhost:3000/products/' + businessId; 
    
    const prodGrid = document.getElementById('prodGrid');
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
            
            let divContainer = createNode('div'),
                divItem = createNode('div'),
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

            divContainer.className = "prodRecommend-container";
            divItem.className = "prodRecommend";

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

            br1.id = "br1";
            br2.id = "br2";
            br3.id = "br3";
            br4.id = "br4";

            append(divItem, itemImage);
            append(divItem, br1);
            append(divItem, itemName);
            append(divItem, br2);
            append(divItem, itemLabel01);
            append(divItem, itemPrice);
            append(divItem, br3);
            append(divItem, itemPayCond);
            append(divItem, br4);
            append(divItem, itemLabel02);
            append(divContainer, divItem);
            append(prodGrid, divContainer);
        })
    })
    .catch(error => console.log(error))
}