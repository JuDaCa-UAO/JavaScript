function nombreDelaFuncion(param1, param2){
    const valorConDescuento = (param1 * param2)/100;

    const valorTotal = param1 - valorConDescuento;
    return valorTotal;
}

const valorPrenda = 1000;
const valorDescuento = 15;

const valorFinal = nombreDelaFuncion(valorPrenda, valorDescuento);

console.log("El precio es: " + valorFinal);