let carrito = [];
let cantidad = carrito.length;

//solicito ingresar fruta o verdura
let fruta = prompt('Ingrese la fruta o verdura que quiera comprar');
carrito.push(fruta); //agrego el elemento al carrito


while (confirm('¿Desea agregar otra fruta o verdura?')) //consulto si desea agregar mas al carrito
    {
        let fruta = prompt('¿qué otra fruta desea comprar?');
        carrito.push(fruta);
        cantidad++; 
    }

    console.log('Ustede compró: ') //en caso de no comprar muestro elemento por elemento del carrito.
    for (let fruta of carrito)
    {
        console.log(fruta)
    }

    console.log("Una cantidad de " + (cantidad + 1) + " frutas") // informo la cantidad de frutas y verduras compradas