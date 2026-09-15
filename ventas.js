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

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio");

    // Calculamos la comision
    let comision = calcularComision(ventas,precio);
    
    // Calculamos el sueldo total
    let total = sueldoBase + comision;

    mostarEnSpan("spSueldoBase",sueldoBase);
    mostarEnSpan("spComision",comision);
    mostarEnSpan("spTotal",total);
}