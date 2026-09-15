const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * precioProducto * 0.1;
    }

    return comision;
}

function calcular(){

    // Recuperamos propiedades de cajas de texto
    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");
    
    // Recuperamos el valor y convertimos a float
    let sueldoBase = parseFloat(cmpSueldoBase.value);
    let ventas = parseFloat(cmpVentas.value);
    let precio = parseFloat(cmpPrecio.value);

    // Calculamos la comision
    let comision = calcularComision(ventas,precio);
    
    // Calculamos el sueldo total
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}