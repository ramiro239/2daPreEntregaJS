// Hacer un menu de productos, que elija un producto, muestre su precio, y que el usuario decida en cuantas cuotas quiera pagarlo

//array con los productos del menu:
const productos = [
    {
        id: 1,
        nombre:"Zapatillas CONVERSE",
        precio:20000,
        categoria:"Zapatillas"
    },
    {
        id: 2,
        nombre:"Zapatillas ADIDAS",
        precio: 25000,
        categoria:"Zapatillas"
    },
    {
        id: 3,
        nombre:"Zapatillas NIKE",
        precio:30000,
        categoria:"Zapatillas"
    },
    {
        id: 4,
        nombre:"Pantalon deportivo NIKE",
        precio:45000,
        categoria:"Pantalon"
    },
    {
        id: 5,
        nombre:"Pantalon Deportivo ADIDAS",
        precio:40000,
        categoria:"Pantalon"
    },
    {
        id: 6,
        nombre:"Remera NIKE",
        precio:35000,
        categoria:"Remera"
    },
    {
        id: 7,
        nombre:"Remera ADIDAS",
        precio:32000,
        categoria:"Remera"
    }
]

//array donde van a ir las cosas que se compren es decir un carrito
carrito = [];

//menu para ver las zapatillas
const verZapatillas = () => {
    let mensaje = "Lista de productos: \n";
    productos.forEach (el => {
        if (el.categoria === "Zapatillas"){
            mensaje = mensaje + `${el.id} - ${el.nombre}    $${el.precio} \n`
        }
    })

    const opcionUsuario = parseInt(prompt(mensaje + "--------------------------------\n0 - Volver Atras")); //muestra la variable mensaje y el usuario ingresa la id que muestra el producto

    if (opcionUsuario != 0){
    const productoSeleccionado = productos.find(productos => productos.id === opcionUsuario)
    //si la id del producto coincide con la opcion producto seleccionado se queda con ese array
    
    carrito.push(productoSeleccionado);
    //el carrito pasa a tener el producto seleccionado
    alert ("Producto agregado al carrito correctamente")
    }
}

//menu para ver los pantalones
const verPantalones = () => {
    let mensaje = "Lista de productos: \n";
    productos.forEach (el => {
        if (el.categoria === "Pantalon"){
            mensaje = mensaje + `${el.id} - ${el.nombre}    $${el.precio} \n`
        }
    })

    const opcionUsuario = parseInt(prompt(mensaje + "--------------------------------\n0 - Volver Atras")); //muestra la variable mensaje y el usuario ingresa la id que muestra el producto

    if (opcionUsuario != 0){
    const productoSeleccionado = productos.find(productos => productos.id === opcionUsuario)
    //si la id del producto coincide con la opcion producto seleccionado se queda con ese array
    
    carrito.push(productoSeleccionado);
    //el carrito pasa a tener el producto seleccionado
    alert ("Producto agregado al carrito correctamente")
    }
}

//menu para ver las remeras
const verRemeras = () => {
    let mensaje = "Lista de productos: \n";
    productos.forEach (el => {
        if (el.categoria === "Remera"){
            mensaje = mensaje + `${el.id} - ${el.nombre}    $${el.precio} \n`
        }
    })

    const opcionUsuario = parseInt(prompt(mensaje + "--------------------------------\n0 - Volver Atras")); //muestra la variable mensaje y el usuario ingresa la id que muestra el producto

    if (opcionUsuario != 0){
        const productoSeleccionado = productos.find(productos => productos.id === opcionUsuario)
        //si la id del producto coincide con la opcion producto seleccionado se queda con ese array
        
        carrito.push(productoSeleccionado);
        //el carrito pasa a tener el producto seleccionado
        alert ("Producto agregado al carrito correctamente")
    }
}


//menu para elegir que tipo de producto ver
const verProductos = () => {
    let opcionUsuario

    opcionUsuario = parseInt(prompt("Elige que tipo de productos quieres ver:\n 1-Zapatillas \n 2-Pantalones \n 3-Remeras \n 4-Volver Atras "))

    while (opcionUsuario != 4){
        switch(opcionUsuario){
            case 1:
                verZapatillas();
                break;
            case 2:
                verPantalones();
                break;
            case 3:
                verRemeras();
                break
            default:
                alert("Ingreso una opcion invalida.");
                break;
        }
        
        opcionUsuario = parseInt(prompt("Elige que tipo de productos quieres ver:\n 1-Zapatillas \n 2-Pantalones \n 3-Remeras \n 4-Volver Atras "))

    }
}

const verCarrito = () => {
    if (carrito.length === 0){
        alert ("No hay productos en el carrito")
    } else {
        let mensaje = "Carrito: \n"

        //muestra el mensaje con todos los items del carrito mostrando: ID - NOMBRE  PRECIO
        carrito.forEach(el => {
            mensaje = mensaje + `${el.id} - ${el.nombre}    $${el.precio} \n`
        })
    
        //sumar el valor total de los productos
        const total = carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0)
    
        mensaje += `\nTOTAL......................$${total}`;
    
        mensaje += "\n\n¿Desea realizar la compra? (si/no)";
    
        //muestra todo el mensaje y le pide al usuario que escriba si o no para cofirmar la compra
        const respuesta = prompt(mensaje)
        
        let i = 0;

        switch (respuesta.toLowerCase()){
            case "si":
                sacarCarritoEnCuotas(total);
                carrito.splice(0);
                break;
            case "no":
                const eliminar = prompt("¿Desea eliminar el contenido del carrito? (si/no)")
                if (eliminar.toLowerCase() == "si"){
                    carrito.splice(0)
                    alert ("El carrito se ha vaciado correctamente.")
                }
                break;
            default:
                break;
        }
    }

}

//funcion para sacar el carrito en cuotas de 3, 6, 9 y 12
function sacarCarritoEnCuotas(total){
    let precioAPagar = total;
    let i = 0;
    cuota = parseInt(prompt ("En cuantas cuotas desea pagar: \n -> 3 Cuotas \n -> 6 Cuotas \n -> 9 Cuotas \n -> 12 Cuotas"));

    while (i == 0){
        switch (cuota){
            case 3: 
                total = Math.round(total / 3);
                alert ("Si quiere pagar $" + precioAPagar + " en 3 cuotas, cada cuota va a tener un valor de: $" + total);
                i++;
                break;
            case 6: 
                total = Math.round(total / 6);
                alert ("Si quiere pagar $" + precioAPagar + " en 6 cuotas, cada cuota va a tener un valor de: $" + total);
                i++;
                break;
            case 9: 
                total = Math.round(total / 9);
                alert ("Si quiere pagar $" + precioAPagar + " en 9 cuotas, cada cuota va a tener un valor de: $" + total);
                i++;
                break;
            case 12: 
                total = Math.round(total / 12);
                alert ("Si quiere pagar $" + precioAPagar + " en 12 cuotas, cada cuota va a tener un valor de: $" + total);
                i++;
                break;
            default:
                alert ("Ingrese una opcion valida");   
                cuota = parseInt(prompt ("En cuantas cuotas desea pagar: \n -> 3 Cuotas \n -> 6 Cuotas \n -> 9 Cuotas \n -> 12 Cuotas"));
                break;
        }
    }
} 


eleccion = parseInt(prompt("Ingrese la opcion que desea realizar: \n 1-> Ver Productos \n 2-> Ver Carrito \n 3-> Salir"));

//Menu que finaliza cuando se tipea el numero 3 
while (eleccion != 3){    

    switch (eleccion) {
        case 1:
            verProductos();
            break; 
        case 2:
            verCarrito();
            break; 
        default: 
            alert ("Ingrese una opcion valida");   
            break;
    }

    eleccion = parseInt(prompt("Ingrese la opcion que desea realizar: \n 1-> Ver Productos \n 2-> Ver Carrito \n 3-> Salir"));

}
