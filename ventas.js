const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * precioProducto * 0.1;
    }

    return comision;
}

function validarVentas() {
    let numeroVentasStr = recuperarTexto("txtVentas");
    if (numeroVentasStr.length > 5) {
        alert("Máximo 5 caracteres");
        return false;
    } else {
        return true;
    }
}

function validarInput(input) {
    const valor = input.value.trim();
    const spanError = document.getElementById("error-" + input.id);
    let mensaje = "";

    if (valor === "") {
        mensaje = "Este campo no puede estar vacío.";
    } else if (!/^\d+$/.test(valor)) {
        mensaje = "Solo se permiten números.";
    } else if (valor.length > 5) {
        mensaje = "Máximo 5 dígitos permitidos.";
    }

    spanError.textContent = mensaje;
    return mensaje === ""; // true = válido
}

function calcular() {

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio");

    // Calculamos la comision
    let comision = calcularComision(ventas, precio);

    // Calculamos el sueldo total
    let total = sueldoBase + comision;

    mostarEnSpan("spSueldoBase", sueldoBase);
    mostarEnSpan("spComision", comision);
    mostarEnSpan("spTotal", total);
}