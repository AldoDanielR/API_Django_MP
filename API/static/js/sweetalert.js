function agregarProducto() {
    Swal.fire({
        title: '¡Completado!',
        text: 'Prudcto agregado al carrito',
        icon: 'success',
        confirmButtonText: 'ACEPTAR'
    });
}


function validarCantidad() {
    var cantidad = parseInt(document.getElementById('tb_cantidad{{ producto.id_producto }}').value);
    if (cantidad <= 0) {
        advertenciaPiezas();
    } else {
        document.forms[0].submit();
    }
}

function goBack() {
    window.history.back();
}