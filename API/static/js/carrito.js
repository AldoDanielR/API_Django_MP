function fnAgregarProducto(producto_id) {
    var cantidad = parseInt($('#tb_cantidad' + producto_id).val());

    if (cantidad > 0) {
        $.ajax({
            url: `/mederyfarma/`,  // Ruta modificada para reflejar la nueva estructura de URL
            method: 'GET',
            success: function (data) {
                alert(data.mensaje);
            },
            error: function () {
                alert('Hubo un error al agregar el producto al carrito');
            }
        });
    } else {
        alert('La cantidad debe ser mayor a 0');
    }
}
