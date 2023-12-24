var conexionL;

$(function () {

    conexionL = $.connection.lHub;

    funciones_cliente();
    funciones_servidor();

});

function funciones_cliente() {

    conexionL.client.mostrar_notificacion = function (tipo, mensaje) {
        //alert(mensaje);
        //alert($("#Cliente")[0].value);
        //$(".capa0").remove();
        //bloquea_pantalla(tipo, mensaje);
    };
    conexionL.client.animar_producto_agregado = function (carrito, codigo, cntBorrar) {

        //if (localStorage.Pedido.split('//')[0].includes(carrito[0].noCliente)) {

        var subTotal = 0;
        var iva = 0;
        var totalProductos = 0;
        var PedidoLS = "";
        var PedidoHF = "";

        for (var i = 0; i < carrito.length; i++) {

            subTotal += carrito[i].total;
            iva += carrito[i].iva;

            totalProductos++;

            PedidoLS += '{"cliente":"' + carrito[i].noCliente + '","codigo":"' + carrito[i].codigo + '","cantidad":' + carrito[i].cantidad + ',"subTotal":"' + parseFloat(carrito[i].total).toFixed(2) + '","iva":"' + parseFloat(carrito[i].iva).toFixed(2) + '"}//';
            PedidoHF += "" + carrito[i].codigo + "/" + carrito[i].cantidad + "/" + parseFloat(carrito[i].total).toFixed(2) + "/" + carrito[i].noCliente + "/" + parseFloat(carrito[i].iva).toFixed(2) + "&";

        }

        localStorage.Pedido = PedidoLS;
        $("#Pedido")[0].value = PedidoHF;

        var subTotalConComas = String(parseFloat(subTotal).toFixed(2));
        var ivaConComas = String(parseFloat(iva).toFixed(2));

        var totalConComas = String(parseFloat(subTotal + iva).toFixed(2));

        var totalCarritoConComas = parseFloat(totalConComas.split('.')[0]);
        var totalCarritoConComasDecimal = totalConComas.split('.')[1].length == 2 ? totalConComas.split('.')[1] : totalConComas.split('.')[1] + '0';

        //var totalCarritoConComas = parseFloat(subTotalConComas.split('.')[0]);
        //var totalCarritoConComasDecimal = totalConComas.split('.')[1].length == 2 ? totalConComas.split('.')[1] : totalConComas.split('.')[1] + '0';

        if (document.getElementById("sp_subTotal") != null) {
            //document.getElementById("sp_subTotal").textContent = parseFloat(subTotal).toFixed(2);
            document.getElementById("sp_subTotal").textContent = parseFloat(subTotalConComas.split('.')[0]).toLocaleString('es-MX') + "." + String((subTotalConComas.split('.')[1].length == 2 ? subTotalConComas.split('.')[1] : subTotalConComas.split('.')[1] + '0'));
        }
        if (document.getElementById("sp_iva") != null) {
            //document.getElementById("sp_iva").textContent = parseFloat(iva).toFixed(2);
            document.getElementById("sp_iva").textContent = parseFloat(ivaConComas.split('.')[0]).toLocaleString('es-MX') + "." + String((ivaConComas.split('.')[1].length == 2 ? ivaConComas.split('.')[1] : ivaConComas.split('.')[1] + '0'));;
        }
        if (document.getElementById("sp_total") != null) {
            document.getElementById("sp_total").textContent = totalCarritoConComas.toLocaleString('es-MX') + "." + totalCarritoConComasDecimal;
        }

        //document.getElementById("sp_totalCarrito").textContent = ("Total $" + parseFloat(subTotal + iva).toFixed(2));
        document.getElementById("sp_totalCarrito").textContent = ("Total $" + totalCarritoConComas.toLocaleString('es-MX') + "." + totalCarritoConComasDecimal);
        $("#NumeroProductos")[0].value = totalProductos;
        $('#sp_numProductos')[0].textContent = totalProductos;
        fnEfectoAgregarCarrito(codigo);
        fnActualizarEstilosCarrito($('#sp_numProductos')[0].textContent);

        if (cntBorrar != "") {
            $(cntBorrar).parent().remove();
            $(".piePagina").css("position", "fixed");
            $(".piePagina").css("bottom", "0");
            if ($("#div_carritoProductos").children().length == 0) {
                //window.location = "/test/frm_Catalogo_Levic.aspx";
                window.location = "/frm_Catalogo_Levic.aspx";
            }
        }

        //}

    };
    conexionL.client.mostrar_productos_relacionados_detalle = function (productos) {

        //alert("mostrar productos");

    };
    conexionL.client.mostrar_sustancia_producto = function (sustancia) {
        document.getElementById("lbl_sustancia_producto_detalle").textContent = sustancia;
    }
    conexionL.client.borrar_local_storage = function (cliente, clienteSinCeros) {
        limpiar_local_storage(cliente, clienteSinCeros);
    };

}
function funciones_servidor() {

    $.connection.hub.start().done(function () {

        //conexionL.server.test_hub_connection();

        if (document.getElementById("sp_totalCarrito") != null) {
            reconexion();
            conexionL.server.cargar_total_carrito($("#Cliente")[0].value);
        }

        if (document.getElementById("img_clasificacion_detalle") != null) {

            conexionL.server.cargar_productos_relacion_detalle(document.getElementById("lbl_sustancia_producto_detalle").textContent.replace(";", " "));

            //reconexion();
            //conexionL.server.cargar_productos_relacion_detalle("");
        }

        if (document.getElementById("lbl_sustancia_producto_detalle") != null) {

            conexionL.server.cargar_sustancia_producto(document.getElementById("lbl_codigo_producto_detalle").textContent);

            //reconexion();
            //conexionL.server.cargar_productos_relacion_detalle("");
        }

    });
    $.connection.hub.disconnected(function () {
        reconexion();
    });

}
function reconexion() {
    $.connection.hub.start();
}
function agregar_producto_sr(cliente, codigo, cantidad, precio, iva, boton) {

    if (cantidad <= 0) {
        fnGenerarMensaje("Favor de revisar", "Debe agregar por lo menos 1 pieza ", "warning");
    } else {
        reconexion();
        conexionL.server.agregar_producto_carrito(cliente, codigo, cantidad, precio, iva, boton);
    }

}
function actualizar_producto_ls(cliente, codigo, cantidad, precio, iva) {

    if (cantidad <= 0) {
        fnGenerarMensaje("Favor de revisar", "Debe agregar por lo menos 1 pieza ", "warning");
    } else {
        reconexion();
        conexionL.server.actualizar_producto_carrito(cliente, codigo, cantidad, precio, iva);
    }

}
function borrar_producto_carrito_sr(cliente, codigo, cntBorrar) {
    reconexion();
    conexionL.server.borrar_producto_carrito(cliente, codigo, cntBorrar);
}
function borrar_carrito_sr() {

    conexionL.server.borrar_carrito($("#Cliente")[0].value);

}