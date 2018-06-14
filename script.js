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



fetch('http://localhost:3000/products/2')
.then(resp => resp.json())
.then(data => console.log(data))
.catch(error => console.log(error))

