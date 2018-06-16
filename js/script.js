function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function reloadPage() {

}

function searchItems() {
    const businessId = document.getElementById("business-id-input").value;
    const url = 'http://localhost:3000/products/' + businessId; 
    
    const prodGrid = document.getElementById('prod-grid');
    const prodImageAux = document.getElementById('prod-image');
    const prodNameAux = document.getElementById('prod-name');
    const prodPriceAux = document.getElementById('prod-price');
    const prodPayCondAux = document.getElementById('prod-pay-cond');
    const prodLink = document.getElementById('prod-link');

    fetch(url)
    .then(resp => resp.json())
    .then(function(result) {
        prodRef = result.data.references.item[0];
        prodImageAux.src = prodRef.imageName;
        prodNameAux.innerHTML = `${prodRef.name}`;
        prodPriceAux.innerHTML = `${prodRef.price}`;
        prodPayCondAux.innerHTML = `${prodRef.productInfo.paymentConditions}`;
        prodLink.href = prodRef.detailUrl;

        itensRecommend = result.data.recommendation;

        return itensRecommend.map(function(item) {
            var i = 1;
            
            let divContainer = createNode('div'),
                divItem = createNode('div'),
                itemImage = createNode('img'),
                itemName = createNode('span'),
                itemLabel01 = createNode('label'),
                itemOldPrice = createNode('span'),
                itemLabel02 = createNode('label'),
                itemPrice = createNode('span'),
                itemPayCond = createNode('span'),
                itemLabel03 = createNode('label');
                a = createNode('a');
                br1 = createNode('br');
                br2 = createNode('br');
                br3 = createNode('br');
                br4 = createNode('br');
                br5 = createNode('br');

            divContainer.className = "prod-container";
            divItem.className = "produto";

            itemImage.className = "prod-image";
            itemImage.id = "prod-image" + i;
            itemImage.src = item.imageName;

            itemName.className = "prod-name";
            itemName.id = "prod-name" + i;
            itemName.innerHTML = `${item.name}`;

            itemLabel01.className = "prod-name";
            itemLabel01.innerHTML = "de:";

            if (item.oldPrice != "") {
                itemOldPrice.className = "prod-name";
                itemOldPrice.id = "prod-old-price" +i;
                itemOldPrice.innerHTML = `${item.oldPrice}`;
            }

            itemLabel02.className = "prod-label";
            itemLabel02.innerHTML = "Por:";

            itemPrice.className = "prod-price";
            itemPrice.id = "prod-price" + i;
            itemPrice.innerHTML = `${item.price}`;

            itemPayCond.className = "prod-pay-cond";
            itemPayCond.id = "prod-pay-cond" + i;
            itemPayCond.innerHTML = `${item.productInfo.paymentConditions}`;

            itemLabel03.className = "prod-label";
            itemLabel03.innerHTML = "sem juros";

            a.className = "prod-link";
            a.href = item.detailUrl;

            br1.id = "br1";
            br2.id = "br2";
            br3.id = "br3";
            br4.id = "br4";
            br5.id = "br5";

            append(divItem, itemImage);
            append(divItem, br1);
            append(divItem, itemName);

            if (item.oldPrice != "") {
                append(divItem, br2);
                append(divItem, itemLabel01);
                append(divItem, itemOldPrice);
            }

            append(divItem, br3);
            append(divItem, itemLabel02);
            append(divItem, itemPrice);
            append(divItem, br4);
            append(divItem, itemPayCond);
            append(divItem, br5);
            append(divItem, itemLabel03);
            append(divContainer, divItem);
            append(a, divContainer);
            append(prodGrid, a);
        })
    })
    .catch(error => console.log(error))
}