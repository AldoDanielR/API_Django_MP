$(window).resize(function () {
    fnRedimencionar();
    fnTamañoGrid();
    fnCentrarCatalogo();
});
$(function () {

    if ($("#hf_ofertas")[0].value != "") {
        //$("#span_ofertas").addClass("icone-check");
        activa_casillas_filtros("img_ofertas_normal", "img_ofertas_seleccionado");
    }

    if ($("#hf_generico")[0].value != "") {
        //$("#span_generico").addClass("icone-check");
        activa_casillas_filtros("img_generico_normal", "img_generico_seleccionado");
    }

    if ($("#hf_patente")[0].value != "") {
        //$("#span_patente").addClass("icone-check");
        activa_casillas_filtros("img_patente_normal", "img_patente_seleccionado");
    }

    if ($("#hf_nuevos_productos")[0].value != "") {
        //$("#span_nuevos_productos").addClass("icone-check");
        activa_casillas_filtros("img_nuevos_normal", "img_nuevos_seleccionado");
    }

    // NUEVO DISEÑO
    if (document.getElementById("hf_herbolario") != null && $("#hf_herbolario")[0].value != "") {
        //$("#span_patente").addClass("icone-check");
        activa_casillas_filtros("img_herbolario_normal", "img_herbolario_seleccionado");
    }

    if (document.getElementById("hf_curacion") != null && $("#hf_curacion")[0].value != "") {
        //$("#span_patente").addClass("icone-check");
        activa_casillas_filtros("img_curacion_normal", "img_curacion_seleccionado");
    }

    if (document.getElementById("hf_higiene") != null && $("#hf_higiene")[0].value != "") {
        //$("#span_patente").addClass("icone-check");
        activa_casillas_filtros("img_higiene_normal", "img_higiene_seleccionado");
    }

    if (document.getElementById("hf_arribos") != null && $("#hf_arribos")[0].value != "") {
        //$("#span_patente").addClass("icone-check");
        activa_casillas_filtros("img_arribos_normal", "img_arribos_seleccionado");
    }

    fnInicializarVariables();

    fnRedimencionar();
    fnTamañoGrid();
    fnCentrarCatalogo();

    // funciones para mostrar ocultar contenedores de filtros           

    //alert($("#ul_laboratorio")[0].childElementCount);

    if ($("#hf_arrayLaboratorios")[0].value != "" && $("#hf_ofertas")[0].value == "" && $("#hf_generico")[0].value == "" && $("#hf_patente")[0].value == "" && $("#hf_nuevos_productos")[0].value == "") {
        //$('#ul_laboratorio').show("fast");
    } else {
        //muestra_oculta_contenedores_filtros("");
    }

    if ($("#Bloqueo")[0] != null) {
        if ($("#Bloqueo")[0].value != "") {
            $('#status')[0].textContent = "BLOQUEADO";

            if (document.getElementById("status_encabezado") != null) {
                //$('#status_encabezado')[0].textContent = "BLOQUEADO";
                $('#status_encabezado').addClass("cnt_estatus_cuenta_bloqueado");
            }

            $('#status').removeClass('statusActivo');
            $('#status').addClass('statusBloqueado');

            //$('#a_usuario').addClass('statusBloqueado');
        }
        else {
            if ($("#status")[0] != null) {
                $('#status')[0].textContent = "ACTIVO";

                if (document.getElementById("status_encabezado") != null) {
                    //$('#status_encabezado')[0].textContent = "ACTIVO";
                    $('#status_encabezado').addClass("cnt_estatus_cuenta_activo");
                }

                $('#status').removeClass('statusBloqueado');
                $('#status').addClass('statusActivo');

                $('#a_usuario').removeClass('statusBloqueado');
            }
        }
    }
    if ($("#nombre")[0] != null) {

        var nombreSplit = $("#Nombre")[0].value.split(' ');

        $('#nombre')[0].textContent = "HOLA, " + nombreSplit[0];
        $('#a_usuario')[0].textContent = "HOLA, " + nombreSplit[0];
    }


    if ($("#credito")[0] != null) {
        /*$('#credito')[0].textContent = '' + $("#Credito")[0].value;*/
        //$('#credito_encabezado')[0].textContent = '' + $("#Credito")[0].value;
        var creditoConComas = parseFloat($("#Credito")[0].value.replace('$ ', '').split('.')[0]);
        var creditoConComasDecimales = $("#Credito")[0].value.replace('$ ', '').split('.')[1].length == 2 ? $("#Credito")[0].value.replace('$ ', '').split('.')[1] : $("#Credito")[0].value.replace('$ ', '').split('.')[1] + '0';
        $('#credito_encabezado')[0].textContent = "$ " + creditoConComas.toLocaleString('es-MX') + "." + creditoConComasDecimales;
        $('#credito')[0].textContent = "$ " + creditoConComas.toLocaleString('es-MX') + "." + creditoConComasDecimales;
    }

    if ($("#Limite_credito")[0] != null) {
        $('#limite_credito')[0].textContent = '' + $("#Limite_credito")[0].value;
        //$('#limite_credito_encabezado')[0].textContent = '' + $("#Limite_credito")[0].value;
        var limiteCreditoConComas = parseFloat($("#Limite_credito")[0].value.replace('$ ', '').split('.')[0]);
        var limiteCreditoConComasDecimales = $("#Limite_credito")[0].value.replace('$ ', '').split('.')[1].length == 2 ? $("#Limite_credito")[0].value.replace('$ ', '').split('.')[1] : $("#Limite_credito")[0].value.replace('$ ', '').split('.')[1] + '0';
        $('#limite_credito_encabezado')[0].textContent = "$ " + limiteCreditoConComas.toLocaleString('es-MX') + "." + limiteCreditoConComasDecimales;
    }

    if ($("#Limite_credito")[0] != null) {
        /*$('#limite_credito')[0].textContent = '' + $("#Limite_credito")[0].value;*/
        //$('#limite_credito_encabezado')[0].textContent = '' + $("#Limite_credito")[0].value;
        var limiteCreditoConComas = parseFloat($("#Limite_credito")[0].value.replace('$ ', '').split('.')[0]);
        var limiteCreditoConComasDecimales = $("#Limite_credito")[0].value.replace('$ ', '').split('.')[1].length == 2 ? $("#Limite_credito")[0].value.replace('$ ', '').split('.')[1] : $("#Limite_credito")[0].value.replace('$ ', '').split('.')[1] + '0';
        $('#limite_credito_encabezado')[0].textContent = "$ " + limiteCreditoConComas.toLocaleString('es-MX') + "." + limiteCreditoConComasDecimales;
        $('#limite_credito')[0].textContent = "$ " + limiteCreditoConComas.toLocaleString('es-MX') + "." + limiteCreditoConComasDecimales;
    }

    if ($("#Pedido")[0] != null) {
        if ($("#Pedido")[0].value != "") {
            $('#sp_numProductos')[0].textContent = $("#NumeroProductos")[0].value;

            var productosCarrito = $("#Pedido")[0].value.split("&");
            var total = 0;
            var iva = 0;
            for (var i = 0; i < productosCarrito.length - 1; i++) {
                var producto = productosCarrito[i].split("/");
                if (producto[3] == $("#Cliente")[0].value) {
                    total = total + parseFloat(producto[2]);
                    iva = iva + parseFloat(producto[4]);
                }
            }

            $('#sp_totalCarrito')[0].textContent = "Total $" + parseFloat(total + iva).toFixed(2);

            fnActualizarEstilosCarrito($('#sp_numProductos')[0].textContent);
            // aqui
            //if (document.getElementById('sp_subTotal')) {
            //    $('#sp_subTotal')[0].textContent = total.toFixed(2);
            //    $('#sp_iva')[0].textContent = iva.toFixed(2);
            //    $('#sp_total')[0].textContent = parseFloat(total + iva).toFixed(2);
            //    $('h1')[1].textContent = 'Mi carrito';
            //}
        }
    }
    else {
        fnActualizarEstilosCarrito($('#sp_numProductos')[0].textContent);
    };

    $('#tb_buscar').keypress(function (e) {
        if (e.which == 13) {
            $('#Contenedor_a_buscar')[0].click();
            fnBloquear();
        }
    });

    if ($("#Contenedor_tb_fechaInicial")[0] != null) {
        $("#Contenedor_tb_fechaInicial").datepicker($.datepicker.regional["es"] =
        {
            closeText: 'Cerrar',
            prevText: '',
            nextText: '',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            changeMonth: true,
            changeYear: true,
            onClose: function (selectedDate) {

                var fMax = $('#Contenedor_tb_fechaInicial').datepicker('getDate', '+1d');
                fMax.setDate(fMax.getDate() + 29);

                $("#Contenedor_tb_fechaFinal").datepicker("option", "minDate", selectedDate);
                $("#Contenedor_tb_fechaFinal").datepicker("option", "maxDate", fMax);
                document.getElementById("Contenedor_tb_fechaFinal").value = "";

            }
        });
        $("#Contenedor_tb_fechaFinal").datepicker($.datepicker.regional["es"] =
        {
            closeText: 'Cerrar',
            prevText: '',
            nextText: '',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            changeMonth: true,
            changeYear: true
        });
    };
    //if (localStorage.MensajePantalla != null) {

    //    if (localStorage.MensajePantalla != "") {
    //        if (localStorage.MensajePantallatest == 2) {
    //            var item = JSON.parse(localStorage.MensajePantalla);
    //            fnGenerarMensaje(item.Titulo, item.Mensaje, item.Tipo);
    //            console.log(localStorage.MensajePantalla);
    //            localStorage.MensajePantalla = "";
    //            localStorage.MensajePantallatest = "";
    //        }
    //        else {
    //            localStorage.MensajePantallatest++;
    //        }
    //    }
    //};

    if ($("#Contenedor_tb_telefono1")[0] != null) {
        $("#Contenedor_tb_telefono1").mask("99-99-99-99-99");
    };

    if ($("#Contenedor_ddl_paginas")[0] != null) {
        $("#Contenedor_ddl_paginas").change(fnBloquear);
    };
    $(".numeros").numeric({ negative: false, decimal: false });

    $("#Contenedor_tb_correo").keyup(function () {

        var validacion = true;

        var valor = $("#Contenedor_tb_correo").val();
        re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.([a-z0-9-]+)*(.[a-z]{2,3})$/
        if (!re.exec(valor.toLowerCase())) {
            validacion = false;
        }

        if (validacion) {
            $("#spn_check3").attr('class', 'a_asteriskBlue');
        }
        else {
            $("#spn_check3").attr('class', 'a_asteriskBlueRed');
        }

    }).focus(function () {
        if (!$("#spn_check3").hasClass('a_asteriskBlue')) {
            $("#spn_check3").attr('class', 'a_asteriskBlueRed');
        }
    }).blur(function () {
        if ($("#Contenedor_tb_correo").val().length == 0) {

            $("#spn_check3").attr('class', 'a_asteriskBlueRed');
        }
    });

    if ($("#Contenedor_tb_correo")[0] != null && $("#Contenedor_tb_correo").val().length > 0) {
        var validacion = true;

        var valor = $("#Contenedor_tb_correo").val();
        re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.([a-z0-9-]+)*(.[a-z]{2,3})$/
        if (!re.exec(valor.toLowerCase())) {
            validacion = false;
        }

        if (validacion) {
            $("#spn_check3").attr('class', 'a_asteriskBlue');
        }
        else {
            $("#spn_check3").attr('class', 'a_asteriskBlueRed');
        }
    }

    $("#Contenedor_tb_nuevaContraseña").keyup(function () {
        // set password variable
        var pswd = $(this).val();
        var validacion = true;
        //validate the length
        if (pswd.length < 8) {
            $('#length').removeClass('valid').addClass('invalid');
            validacion = false;
        }
        else {
            $('#length').removeClass('invalid').addClass('valid');
        };
        if (validacion) {
            $('#div_requerimientosContraseña').hide();
            $('#sp_check1').removeClass('icone-asterisk a_asteriskRed');
            $("#sp_check1").attr('class', 'icone-asterisk a_asteriskBlue');
        }
        else {
            $('#div_requerimientosContraseña').show();
            $('#sp_check1').removeClass('icone-asterisk a_asteriskBlue');
            $("#sp_check1").attr('class', 'icone-asterisk a_asteriskRed');
        };
    }).focus(function () {
        if (!$("#sp_check1").hasClass('a_asteriskBlue')) {
            $('#div_requerimientosContraseña').show();
            $('#sp_check1').removeClass('icone-asterisk a_asteriskBlue');
            $("#sp_check1").attr('class', 'icone-asterisk a_asteriskRed');
        };
    }).blur(function () {
        if ($("#Contenedor_tb_nuevaContraseña").val().length == 0) {
            $('#sp_check1').removeClass('icone-asterisk a_asteriskBlue');
            $("#sp_check1").attr('class', 'icone-asterisk a_asteriskRed');
        };
        $('#div_requerimientosContraseña').hide();
    });

    $("#Contenedor_tb_repetirNuevaContraseña").keyup(function () {
        if (($("#Contenedor_tb_repetirNuevaContraseña").val() == $("#Contenedor_tb_nuevaContraseña").val()) && $("#Contenedor_tb_repetirNuevaContraseña").length > 0) {
            $('#sp_check2').removeClass('icone-asterisk a_asteriskRed');
            $("#sp_check2").attr('class', 'icone-asterisk a_asteriskBlue');
        }
        else {
            $('#sp_check2').removeClass('icone-asterisk a_asteriskBlue');
            $("#sp_check2").attr('class', 'icone-asterisk a_asteriskRed');
        };
        if (($("#Contenedor_tb_repetirNuevaContraseña").val() != $("#Contenedor_tb_nuevaContraseña").val())) {
            $('#sp_check2').removeClass('icone-asterisk a_asteriskBlue');
            $("#sp_check2").attr('class', 'icone-asterisk a_asteriskRed');
        };
    }).blur(function () {
        if ($("#Contenedor_tb_repetirNuevaContraseña").val().length == 0) {
            $('#sp_check2').removeClass('icone-asterisk a_asteriskBlue');
            $("#sp_check2").attr('class', 'icone-asterisk a_asteriskRed');
        };
    });

    $(function () { $(".tb_cantidadProductoCatalogo").numeric({ negative: false, decimal: false }); });

    if (document.getElementById("Contenedor_hf_vtweg") != null) {

        if ($("#Contenedor_hf_vtweg")[0].value == "50") {
            $("#div_totalesCarrito").hide();
            $("#div_totalesCarrito_nuevo_diseno").hide();
        }

    }

    $(".tawk-custom-color tawk-custom-border-color tawk-button").css("background-color", "red");
    $(".tawk-custom-color tawk-custom-border-color tawk-button").css("color", "#fff");

    // ***************************************************************************************************************************************************
    if (document.getElementById("cnt_popup_publicidad") != null) {

        if (localStorage.getItem("popupPublicidad") == null) {
            //$("#cnt_popup_publicidad").show();
            $("#cnt_popup_publicidad").hide();
        } else {

            var fecha = new Date();

            fecha.setHours(0, 0, 0, 0);

            if (localStorage.getItem("popupPublicidad") != fecha) {
                //$("#cnt_popup_publicidad").show();
                $("#cnt_popup_publicidad").hide();
            }

        }

    }

    //if (document.querySelector('.items') != null) {

    //    const slider = document.querySelector('.items');
    //    let isDown = false;
    //    let startX;
    //    let scrollLeft;

    //    slider.addEventListener('mousedown', (e) => {
    //        isDown = true;
    //        slider.classList.add('active');
    //        startX = e.pageX - slider.offsetLeft;
    //        scrollLeft = slider.scrollLeft;
    //    });
    //    slider.addEventListener('mouseleave', () => {
    //        isDown = false;
    //        slider.classList.remove('active');
    //    });
    //    slider.addEventListener('mouseup', () => {
    //        isDown = false;
    //        slider.classList.remove('active');
    //    });
    //    slider.addEventListener('mousemove', (e) => {
    //        if (!isDown) return;
    //        e.preventDefault();
    //        const x = e.pageX - slider.offsetLeft;
    //        const walk = (x - startX) * 3; //scroll-fast
    //        slider.scrollLeft = scrollLeft - walk;
    //        console.log(walk);
    //    });

    //}

});
function fnActualizarEstilosCarrito(productosCarrito) {
    if (productosCarrito != "") {
        $('#a_carrito').removeClass('icone-shopping_cart a_shopping_cart');
        //$('#a_carrito').addClass('icone-full_shopping_cart a_shopping_cart');
        $($('#div_totalProductosCarrito')).css({ "display": "inline" });
    };
};
function fnInicializarVariables() {
    var storage;
    var mensajes;
    try {
        if (localStorage.Pedido) {
            storage = localStorage.Pedido;

            //{cliente : "200317", codigo : "HER004", cantidad : 2, subTotal : "61.48", iva : "0"}//{cliente : "200347", codigo : "HER014", cantidad : 1, subTotal : "30.64", iva : "4.56"}//
            var pedido = localStorage.Pedido.split("//");
            var pedidoHF = ""
            var np = 0;
            for (var i = 0; i < pedido.length - 1; i++) {
                var item = JSON.parse(pedido[i]);

                if (item.cliente == $("#Cliente")[0].value) {
                    pedidoHF += item.codigo + "/" + item.cantidad + "/" + item.subTotal + "/" + item.cliente + "/" + item.iva + "&";
                    np++;
                }
            }

            $("#Pedido")[0].value = pedidoHF;
            $("#NumeroProductos")[0].value = np;
        }
        else {
            localStorage.Pedido = "";
        }
    } catch (e) {
        storage = {};
    }

    try {
        if (localStorage.MensajeBloqueo) {
            storage = localStorage.MensajeBloqueo;
            if (storage != "") {
                var fecha = new Date(localStorage.MensajeBloqueo);
                var dt = new Date();
                if (fecha < dt) {
                    $("#MensajeBloqueo")[0].value = 'Si';
                    localStorage.MensajeBloqueo = dt;
                }
                else {
                    $("#MensajeBloqueo")[0].value = 'No';
                }
            }
        }
        else {
            localStorage.MensajeBloqueo = "";
        }
    } catch (e) {
        storage = {};
    }

    try {
        if (localStorage.MensajePantalla) {
        }
        else {
            localStorage.MensajePantalla = "";
        }
    } catch (e) {
        storage = {};
    }
    try {
        if (localStorage.MensajePantallatest) {
        }
        else {
            localStorage.MensajePantallatest = "";
        }
    } catch (e) {
        storage = {};
    }
};
function fnCentrarCatalogo() {
    if ($('#div_catalogoProductos')[0] != null) {

        var espacioHorizontal = $($('body')).width();
        var tamañoProducto = 270; //323; // NUEVO DISEÑO
        var productosTotales = $('#div_catalogoProductos').children().length;
        var produtoXRenglon = Math.floor(espacioHorizontal / tamañoProducto);

        //alert(productosTotales);
        //alert(produtoXRenglon);

        if (productosTotales < produtoXRenglon) {
            var margenIzquierdo = ((espacioHorizontal - (productosTotales * tamañoProducto)) / 2);
            $($('#div_catalogoProductos')).css({ "margin-left": margenIzquierdo + "px" });
            //$($('#div_catalogoProductos')).css({ "margin-top": "-15px" });
        }
        else {
            var margenIzquierdo = ((espacioHorizontal - (produtoXRenglon * tamañoProducto)) / 2);
            $($('#div_catalogoProductos')).css({ "margin-left": margenIzquierdo + "px" });
            //$($('#div_catalogoProductos')).css({ "margin-top": "-15px" });
        }
    }
};
function fnRedimencionar() {

    var tamañoPie = ($(window).width());

    // MODIFICACION PARA MOSTRAR Y OCULTAR DIV LATERAL FILTROS ****************************************************************************
    if ($(window).width() > 768) {
        $('#div_busqueda3').addClass('busquedaOculta');
        $('#div_busqueda3').removeClass('busquedaMostrar');
        //$(".cnt_filtros_catalogo").css("left", "-100%"); // NUEVO DISENO
        $("#principal").css("margin-top", "40px"); // NUEVO DISEÑO
        //$("#principal").css("padding-left", "220px"); // NUEVO DISEÑO
        //$("#cnt_respuestas").css("padding-left", "20%"); // NUEVO DISEÑO
        //$("#cnt_respuestas").css("padding-right", "18%"); // NUEVO DISEÑO
        $("#cnt_respuestas").css("padding-bottom", "5%");
        $("#div_menu").css("display", "none");

        $(".piePagina").css("width", tamañoPie + "px"); // NUEVO DISEÑO
        //$(".piePagina").css("margin-left", "230px"); // NUEVO DISEÑO

        $("#btn_lv").show();
        $("#btn_fb").show();
        $("#btn_in").show();
        $("#btn_yt").show();
        $("#btn_tw").show();
        $("#btn_ins").show();

        $("#div_carritoProductos").removeClass("div_carritoProductos_movil");
    } else {
        //$(".cnt_filtros_catalogo").css("left", "-100%");
        //$("#principal").css("padding-left", "25px"); // NUEVO DISEÑO
        $("#cnt_respuestas").css("padding-left", "5%");
        $("#cnt_respuestas").css("padding-right", "5%");
        $("#cnt_respuestas").css("padding-bottom", "10%");
        $("#div_menu").css("display", "block");

        $(".piePagina").css("width", "100%");
        $(".piePagina").css("margin-left", "0px");

        $("#btn_lv").hide();
        $("#btn_fb").hide();
        $("#btn_in").hide();
        $("#btn_yt").hide();
        $("#btn_tw").hide();
        $("#btn_ins").hide();

        $("#div_carritoProductos").addClass("div_carritoProductos_movil");

        $("#cnt_datos_vendedor_nota").addClass("cnt_datos_vendedor_cuenta_movil");
    }

    $($('body')).height($(window).height());
    //$($('#ul_laboratorio')).height($(window).height() - 75);

    if (($('body').height() - $('#pagina').height()) > 68) {
        $('#piePagina').addClass('piePaginaFixed');
    }
    else {
        $('#piePagina').removeClass('piePaginaFixed');
    };
};
function fnTamañoGrid() {
    var productosCarrito = $("#div_productos").children().length;
    ////if (productosCarrito > 3) {
    var espacioDisponible = $(window).height() - 140;
    var productosExtras = Math.floor(espacioDisponible / 75);
    if (productosExtras >= productosCarrito) {
        $($('#div_productos')).height(productosCarrito * 75);
    }
    else {
        $($('#div_productos')).height((productosExtras * 75));
    }
    //}
    //else {
    //    $($('#div_productos')).height(225);
    //};
};
function fnMostrarBusqueda() {
    //$('#div_buscar').addClass('busquedaMostrar');
    //$('#div_buscar').removeClass('busquedaOculta');
    //$($('#div_buscar')).css({ "top": "0px" });
};
function fnOcultarBusqueda() {
    //$('#div_buscar').addClass('busquedaOculta');
    //$('#div_buscar').removeClass('busquedaMostrar');
    //$($('#div_buscar')).css({ "top": "-68px" });
};
function fnCrearLaboratorio(laboratorio, num) {

    var t = $("#hf_arrayLaboratorios")[0].value;
    var array = t.split("*");
    var split = laboratorio.split("(");

    var existe = false;
    var checked = "false";

    for (i = 0; i < array.length; i++) {

        if (split[0].replace("*", "").trim() == array[i].trim()) {

            existe = true;
            checked = "true";
            break;
        }

    }

    //var aLaboratorio = '<li><a id="li_' + num + '" onclick="fnBuscaLaboratorio(this)">' + laboratorio + '</a></li>';

    //if (existe) {
    //    var aLaboratorio = '<li><a style="display: block; padding: 0px;" id="li_' + num + '" onclick="fnBuscaLaboratorio(this)"><span class="icone-check" style="float: left; padding: 0px 5px; font-size: 1.5em; color: blue;"></span>' + laboratorio + '</a></li>';
    //} else {
    //    var aLaboratorio = '<li><a style="display: block; padding: 0px;" id="li_' + num + '" onclick="fnBuscaLaboratorio(this)"><span class="icone-check" style="float: left; padding: 0px 5px; font-size: 1.5em; color: transparent;"></span>' + laboratorio + '</a></li>';
    //}

    if (existe) {
        var aLaboratorio = '<li><a style="display: block; padding: 0px;" id="li_' + num + '" onclick="fnBuscaLaboratorio(this)"><span style="float: left; margin-top: -5px; margin-right: 10px; background-image: url(https://levic.mx/wp-content/uploads/2018/08/casilla-llena.ico); width: 20px; height: 20px; background-size: contain; box-sizing: border-box;"></span>' + laboratorio + '</a></li>';
    } else {
        var aLaboratorio = '<li><a style="display: block; padding: 0px;" id="li_' + num + '" onclick="fnBuscaLaboratorio(this)"><span style="float: left; margin-top: -5px; margin-right: 10px; background-image: url(https://levic.mx/wp-content/uploads/2018/08/casilla-vacia.png); width: 20px; height: 20px; background-size: contain; box-sizing: border-box;"></span>' + laboratorio + '</a></li>';
    }

    $('#ul_laboratorio').append(aLaboratorio);

    $("#hf_busqueda_laboratorios")[0].value = "";

};
function fnCrearLaboratorio2(laboratorio, num) {
    //var aLaboratorio = '<li><a id="li_' + num + '" onclick="fnBuscaLaboratorio(this)">' + laboratorio + '</a></li>';
    var aLaboratorio = '<li><a id="li_' + num + '" onclick="fnBuscaLaboratorio2(this)">' + laboratorio + '</a></li>';
    $('#ul_laboratorio').append(aLaboratorio);
};

function fmCrearProducto(Nombre, SustanciaActiva, codigoBarras, IndiceTerapeutico, Laboratorio, Codigo, Exist, PreList, Descuento, Oferta, PreFinalSoloDescuento, PreFinal, IVA, numero, imagen, stylo, Clasificacion) {

    //alert(SustanciaActiva);

    if (PreFinal != "$error") {

        if (parseInt(Exist) <= 3) {
            Exist = 0;
        }

        var imagenFerth = "farma.png";

        switch (Clasificacion) {

            case "HERBOLARIO":
                imagenFerth = "herbolario.png";
                break;

            case "MARCAS":
                imagenFerth = "marcas.png";
                break;

            case "M CURACION":
                imagenFerth = "curacion.png";
                break;

            case "HIGIENE":
                imagenFerth = "higiene.png";
                break;

            case "NUEVOS":
                imagenFerth = "nuevos.png";
                break;

            case "ARRIBOS":
                imagenFerth = "arribos.png";
                break;

        }

        var divProducto = "";
        var srcClasificacion = "https://visoti.mx/imagenes/levic/iconos/" + imagenFerth;

        divProducto += '<div id="div_productoCatalogo' + numero + '" class="div_productoCatalogo">';
        divProducto += '<img class="img_clasificacion" src="' + srcClasificacion + '" />';
        divProducto += '<span class="spn_codigoProductoCatalogo" title="Codigo" id="lbl_codigo' + numero + '">' + Codigo + '</span>';
        divProducto += '<span class="lbl_piezas_existencia">' + parseInt(Exist).toLocaleString('es-MX') + ' pzs</span>';
        if (Oferta != "0%") {
            divProducto += '<a class="a_oferta">Oferta -' + Oferta + '</a>';
        }

        //divProducto += '<div class="div_imagenProductoCatalogo"><img src="' + imagen + '" id="img_' + Codigo + '"  onclick="crear_detalle_producto(' + Codigo + ', ' + Nombre + ', ' + SustanciaActiva + ', ' + IndiceTerapeutico + ', ' + Laboratorio + ', ' + PreList + ', ' + Descuento + ', ' + PreFinal + ', ' + PreFinalSoloDescuento + ', ' + Oferta + ', ' + IVA + ', ' + codigoBarras + ');" /></div>';
        divProducto += '<div class="div_imagenProductoCatalogo"><img src="' + imagen + '" id="img_' + Codigo + '"  onclick="crear_detalle_producto(' + "'" + Codigo + "'" + ', ' + "'" + Nombre + "'" + ', ' + "'" + SustanciaActiva + "'" + ', ' + "'" + IndiceTerapeutico + "'" + ', ' + "'" + Laboratorio + "'" + ', ' + "'" + PreList + "'" + ', ' + "'" + Descuento + "'" + ', ' + "'" + PreFinalSoloDescuento + "'" + ', ' + "'" + PreFinal + "'" + ', ' + "'" + Oferta + "'" + ', ' + "'" + IVA + "'" + ', ' + "'" + codigoBarras + "'" + ', ' + "'" + srcClasificacion + "'" + ', ' + "'" + Exist + "'" + ');" title="Ver detalles" /></div>';

        divProducto += '<div class="cnt_nombre_tarjeta_producto">';
        divProducto += '<div class="div_2Renglones"><span class="spn_nombreProductoCatalogo" title="Nombre">' + Nombre + '</span></div>';
        divProducto += '<div class="div_2Renglones"><span class="spn_sustenciaActivaProductoCatalogo" title="Sustancia activa">' + SustanciaActiva + '</span></div>';
        divProducto += '<span class="spn_indiceTerapeuticoProductoCatalogo" title="Indice terapeutico">' + IndiceTerapeutico + '</span>';
        divProducto += '<span class="spn_laboratorioProductoCatalogo" title="Laboratorio">' + Laboratorio.toUpperCase() + '</span>';
        divProducto += '</div>';

        divProducto += '<div class="div_exintenciaProductoCatalogo">';
        divProducto += '<div class="div_exintenciaProductoCatalogoDiv">';
        //if (Exist == "DISPONIBLE") {
        //    //divProducto += '<a class="icone-check a_check"></a>';
        //    //divProducto += '<span class="spn_resaltar">STOCK DISPONIBLE</span>';
        //}
        //else {
        //    //divProducto += '<a class="icone-close a_close2"></a>';
        //    //divProducto += '<span class="spn_resaltar">STOCK NO DISPONIBLE</span>';
        //}
        divProducto += '</div>';
        divProducto += '</div>';

        if (Oferta != "0%") {

            divProducto += '<div class="div_grupoPrecios1">';
            divProducto += '<div><span class="spn_resaltar" title="Precio de lista">P.L.</span><span>' + PreList + '</span></div>';
            divProducto += '<div><span class="spn_resaltar" title="Descuentp">Desc</span><span>' + Descuento + '</span></div>';
            divProducto += '<div><span class="spn_resaltar" title="Precio unitario">P.U.</span><span class="spn_tachado">' + PreFinalSoloDescuento + '</span></div>';
            divProducto += '<div><span class="spn_resaltar" title="Precio oferta">P.Ofe.</span><span id="lbl_preFin' + numero + '">' + PreFinal + '</span></div>';
            divProducto += '</div>';
        }
        else {
            divProducto += '<div class="div_grupoPrecios2">';
            divProducto += '<div><span class="spn_resaltar" title="Precio de lista">P.L.</span><span>' + PreList + '</span></div>';
            divProducto += '<div><span class="spn_resaltar" title="Descuentp">Desc</span><span>' + Descuento + '</span></div>';
            divProducto += '<div><span class="spn_resaltar" title="Precio unitario">P.U.</span><span id="lbl_preFin' + numero + '">' + PreFinal + '</span></div>';
            divProducto += '</div>';
        }

        divProducto += '<div class="div_grupoPrecios3">';
        divProducto += '<div><span class="spn_resaltar">SubTotal</span><span id="lbl_subTotal' + numero + '">$0.00</span></div>';
        divProducto += '<div><span class="spn_resaltar">IVA</span><span id="lbl_iva' + numero + '">' + IVA + '</span></div>';
        divProducto += '</div>';



        divProducto += '<div class="div_cantidadAgregarProductoCatalogo">';
        divProducto += '<div class="div_cantidadAgregarProductoCatalogoDiv">';
        //divProducto += '<span class="spn_resaltar">Cantidad</span>';
        divProducto += '<div class="div_cantidadProductoCatalogo">';
        /////////////////
        if (parseInt(Exist) > 3) {
            divProducto += '<a class="icone-remove a_aumentarDisminuir" style="cursor: pointer;" title="Dismunuir" onclick="fnDisminuirCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')" ></a>';
            divProducto += '<input name="tb_cantidad" type="text" id="tb_cantidad' + numero + '" class="tb_cantidadProductoCatalogo" value="0" onkeyup="fnCambiarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')">';
            divProducto += '<a class="icone-add a_aumentarDisminuir" style="cursor: pointer;" title="Aumentar" onclick="fnAumentarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')"></a>';
        }
        else {
            divProducto += '<a class="icone-remove a_aumentarDisminuir" title="Dismunuir"></a>';
            divProducto += '<input name="tb_cantidad" type="text" id="tb_cantidad' + numero + '" class="tb_cantidadProductoCatalogo" value="0" disabled="true">';
            divProducto += '<a class="icone-add a_aumentarDisminuir" title="Aumentar"></a>';
        }
        ////////////////
        divProducto += '</div>';
        divProducto += '</div>';


        divProducto += '<div class="div_cantidadAgregarProductoCatalogoDiv">';
        ////////////////
        //if (Exist == "DISPONIBLE") {
        if (parseInt(Exist) > 3) {
            if ($("#status")[0] != null) {
                divProducto += '<a id="a_agregar' + numero + '" class="btn_agregar_carrito_disponible" title="Agregar" onclick="fnAgregarProducto(\'#lbl_codigo' + numero + '\',\'#tb_cantidad' + numero + '\',\'#lbl_preFin' + numero + '\',\'#lbl_iva' + numero + '\',this)")" >AGREGAR</a>';
            }
            else {
                divProducto += '<a id="a_agregar' + numero + '" class="icone-add_shopping_cart a_add_shopping_cart" title="Agregar"></a>';
            }
        }
        else {
            divProducto += '<a id="a_agregar' + numero + '" class="btn_agregar_carrito_no_disponible" title="Agregar">NO DISPONIBLE</a>';
        }
        ////////////////
        divProducto += '</div>';
        divProducto += '</div>';

        // NUEVO DISEÑO
        divProducto += '<div class="cnt_codigo_barras_tarjeta_producto">';
        divProducto += '<label>Código de Barras</label>';
        divProducto += '</br>';
        divProducto += '<label style="font-weight: bold;">' + codigoBarras + '</label>';
        divProducto += '</div>';

        divProducto += ' </div> ';
        $('#div_catalogoProductos').append(divProducto);

    }
};
function fmCrearProductoRelacionado(Nombre, SustanciaActiva, codigoBarras, IndiceTerapeutico, Laboratorio, Codigo, Exist, PreList, Descuento, Oferta, PreFinalSoloDescuento, PreFinal, IVA, numero, imagen, stylo, Clasificacion) {

    //alert(Clasificacion);

    var imagenFerth = "farma.png";

    switch (Clasificacion) {

        case "HERBOLARIO":
            imagenFerth = "herbolario.png";
            break;

        case "MARCAS":
            imagenFerth = "marcas.png";
            break;

        case "M CURACION":
            imagenFerth = "curacion.png";
            break;

        case "HIGIENE":
            imagenFerth = "higiene.png";
            break;

        case "NUEVOS":
            imagenFerth = "nuevos.png";
            break;

        case "ARRIBOS":
            imagenFerth = "arribos.png";
            break;

    }

    var divProducto = "";
    var srcClasificacion = "https://visoti.mx/imagenes/levic/iconos/" + imagenFerth;

    divProducto += '<div id="div_productoCatalogo' + numero + '" class="div_productoCatalogo">';
    divProducto += '<img class="img_clasificacion" src="' + srcClasificacion + '" />';
    divProducto += '<span class="spn_codigoProductoCatalogo" title="Codigo" id="lbl_codigo' + numero + '">' + Codigo + '</span>';
    divProducto += '<span class="lbl_piezas_existencia">' + parseInt(Exist).toLocaleString('es-MX') + ' pzs</span>';
    if (Oferta != "0%") {
        divProducto += '<a class="a_oferta">Oferta -' + Oferta + '</a>';
    }

    //divProducto += '<div class="div_imagenProductoCatalogo"><img src="' + imagen + '" id="img_' + Codigo + '"  onclick="crear_detalle_producto(' + Codigo + ', ' + Nombre + ', ' + SustanciaActiva + ', ' + IndiceTerapeutico + ', ' + Laboratorio + ', ' + PreList + ', ' + Descuento + ', ' + PreFinal + ', ' + PreFinalSoloDescuento + ', ' + Oferta + ', ' + IVA + ', ' + codigoBarras + ');" /></div>';
    divProducto += '<div class="div_imagenProductoCatalogo"><img src="' + imagen + '" id="img_' + Codigo + '"  onclick="crear_detalle_producto(' + "'" + Codigo + "'" + ', ' + "'" + Nombre + "'" + ', ' + "'" + SustanciaActiva + "'" + ', ' + "'" + IndiceTerapeutico + "'" + ', ' + "'" + Laboratorio + "'" + ', ' + "'" + PreList + "'" + ', ' + "'" + Descuento + "'" + ', ' + "'" + PreFinalSoloDescuento + "'" + ', ' + "'" + PreFinal + "'" + ', ' + "'" + Oferta + "'" + ', ' + "'" + IVA + "'" + ', ' + "'" + codigoBarras + "'" + ', ' + "'" + srcClasificacion + "'" + ', ' + "'" + Exist + "'" + ');" title="Ver detalles" /></div>';

    divProducto += '<div class="cnt_nombre_tarjeta_producto">';
    divProducto += '<div class="div_2Renglones"><span class="spn_nombreProductoCatalogo" title="Nombre">' + Nombre + '</span></div>';
    divProducto += '<div class="div_2Renglones"><span class="spn_sustenciaActivaProductoCatalogo" title="Sustancia activa">' + SustanciaActiva + '</span></div>';
    divProducto += '<span class="spn_indiceTerapeuticoProductoCatalogo" title="Indice terapeutico">' + IndiceTerapeutico + '</span>';
    divProducto += '<span class="spn_laboratorioProductoCatalogo" title="Laboratorio">' + Laboratorio.toUpperCase() + '</span>';
    divProducto += '</div>';

    divProducto += '<div class="div_exintenciaProductoCatalogo">';
    divProducto += '<div class="div_exintenciaProductoCatalogoDiv">';
    //if (Exist == "DISPONIBLE") {
    //    //divProducto += '<a class="icone-check a_check"></a>';
    //    //divProducto += '<span class="spn_resaltar">STOCK DISPONIBLE</span>';
    //}
    //else {
    //    //divProducto += '<a class="icone-close a_close2"></a>';
    //    //divProducto += '<span class="spn_resaltar">STOCK NO DISPONIBLE</span>';
    //}
    divProducto += '</div>';
    divProducto += '</div>';

    if (Oferta != "0%") {

        divProducto += '<div class="div_grupoPrecios1">';
        divProducto += '<div><span class="spn_resaltar" title="Precio de lista">P.L.</span><span>' + PreList + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Descuentp">Desc</span><span>' + Descuento + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Precio unitario">P.U.</span><span class="spn_tachado">' + PreFinalSoloDescuento + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Precio oferta">P.Ofe.</span><span id="lbl_preFin' + numero + '">' + PreFinal + '</span></div>';
        divProducto += '</div>';
    }
    else {
        divProducto += '<div class="div_grupoPrecios2">';
        divProducto += '<div><span class="spn_resaltar" title="Precio de lista">P.L.</span><span>' + PreList + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Descuentp">Desc</span><span>' + Descuento + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Precio unitario">P.U.</span><span id="lbl_preFin' + numero + '">' + PreFinal + '</span></div>';
        divProducto += '</div>';
    }

    divProducto += '<div class="div_grupoPrecios3">';
    divProducto += '<div><span class="spn_resaltar">SubTotal</span><span id="lbl_subTotal' + numero + '">$0.00</span></div>';
    divProducto += '<div><span class="spn_resaltar">IVA</span><span id="lbl_iva' + numero + '">' + IVA + '</span></div>';
    divProducto += '</div>';



    divProducto += '<div class="div_cantidadAgregarProductoCatalogo">';
    divProducto += '<div class="div_cantidadAgregarProductoCatalogoDiv">';
    //divProducto += '<span class="spn_resaltar">Cantidad</span>';
    divProducto += '<div class="div_cantidadProductoCatalogo">';
    /////////////////
    if (parseInt(Exist) > 3) {
        divProducto += '<a class="icone-remove a_aumentarDisminuir" style="cursor: pointer;" title="Dismunuir" onclick="fnDisminuirCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')" ></a>';
        divProducto += '<input name="tb_cantidad" type="text" id="tb_cantidad' + numero + '" class="tb_cantidadProductoCatalogo" value="0" onkeyup="fnCambiarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')">';
        divProducto += '<a class="icone-add a_aumentarDisminuir" style="cursor: pointer;" title="Aumentar" onclick="fnAumentarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')"></a>';
    }
    else {
        divProducto += '<a class="icone-remove a_aumentarDisminuir" title="Dismunuir"></a>';
        divProducto += '<input name="tb_cantidad" type="text" id="tb_cantidad' + numero + '" class="tb_cantidadProductoCatalogo" value="0" disabled="true">';
        divProducto += '<a class="icone-add a_aumentarDisminuir" title="Aumentar"></a>';
    }
    ////////////////
    divProducto += '</div>';
    divProducto += '</div>';


    divProducto += '<div class="div_cantidadAgregarProductoCatalogoDiv">';
    ////////////////
    //if (Exist == "DISPONIBLE") {
    if (parseInt(Exist) > 3) {
        if ($("#status")[0] != null) {
            divProducto += '<a id="a_agregar' + numero + '" class="btn_agregar_carrito_disponible" title="Agregar" onclick="fnAgregarProducto(\'#lbl_codigo' + numero + '\',\'#tb_cantidad' + numero + '\',\'#lbl_preFin' + numero + '\',\'#lbl_iva' + numero + '\',this)")" >AGREGAR</a>';
        }
        else {
            divProducto += '<a id="a_agregar' + numero + '" class="icone-add_shopping_cart a_add_shopping_cart" title="Agregar"></a>';
        }
    }
    else {
        divProducto += '<a id="a_agregar' + numero + '" class="btn_agregar_carrito_no_disponible" title="Agregar">NO DISPONIBLE</a>';
    }
    ////////////////
    divProducto += '</div>';
    divProducto += '</div>';

    // NUEVO DISEÑO
    divProducto += '<div class="cnt_codigo_barras_tarjeta_producto">';
    divProducto += '<label>Código de Barras</label>';
    divProducto += '</br>';
    divProducto += '<label style="font-weight: bold;">' + codigoBarras + '</label>';
    divProducto += '</div>';

    divProducto += ' </div> ';
    $('#cnt_productos_relacionados').append(divProducto);
};
function fmCrearProductoRelacionadoCarrito(Nombre, SustanciaActiva, codigoBarras, IndiceTerapeutico, Laboratorio, Codigo, Exist, PreList, Descuento, Oferta, PreFinalSoloDescuento, PreFinal, IVA, numero, imagen, stylo, Clasificacion) {

    //alert(Clasificacion);

    var imagenFerth = "farma.png";

    switch (Clasificacion) {

        case "HERBOLARIO":
            imagenFerth = "herbolario.png";
            break;

        case "MARCAS":
            imagenFerth = "marcas.png";
            break;

        case "M CURACION":
            imagenFerth = "curacion.png";
            break;

        case "HIGIENE":
            imagenFerth = "higiene.png";
            break;

        case "NUEVOS":
            imagenFerth = "nuevos.png";
            break;

        case "ARRIBOS":
            imagenFerth = "arribos.png";
            break;

    }

    var divProducto = "";
    var srcClasificacion = "https://visoti.mx/imagenes/levic/iconos/" + imagenFerth;

    divProducto += '<div id="div_productoCatalogo' + numero + '" class="div_productoCatalogo">';
    divProducto += '<img class="img_clasificacion" src="' + srcClasificacion + '" />';
    divProducto += '<span class="spn_codigoProductoCatalogo" title="Codigo" id="lbl_codigo_sugerencia' + numero + '">' + Codigo + '</span>';
    divProducto += '<span class="lbl_piezas_existencia">' + parseInt(Exist).toLocaleString('es-MX') + ' pzs</span>';
    if (Oferta != "0%") {
        divProducto += '<a class="a_oferta">Oferta -' + Oferta + '</a>';
    }

    //divProducto += '<div class="div_imagenProductoCatalogo"><img src="' + imagen + '" id="img_' + Codigo + '"  onclick="crear_detalle_producto(' + Codigo + ', ' + Nombre + ', ' + SustanciaActiva + ', ' + IndiceTerapeutico + ', ' + Laboratorio + ', ' + PreList + ', ' + Descuento + ', ' + PreFinal + ', ' + PreFinalSoloDescuento + ', ' + Oferta + ', ' + IVA + ', ' + codigoBarras + ');" /></div>';
    divProducto += '<div class="div_imagenProductoCatalogo"><img src="' + imagen + '" id="img_' + Codigo + '"  onclick="crear_detalle_producto(' + "'" + Codigo + "'" + ', ' + "'" + Nombre + "'" + ', ' + "'" + SustanciaActiva + "'" + ', ' + "'" + IndiceTerapeutico + "'" + ', ' + "'" + Laboratorio + "'" + ', ' + "'" + PreList + "'" + ', ' + "'" + Descuento + "'" + ', ' + "'" + PreFinalSoloDescuento + "'" + ', ' + "'" + PreFinal + "'" + ', ' + "'" + Oferta + "'" + ', ' + "'" + IVA + "'" + ', ' + "'" + codigoBarras + "'" + ', ' + "'" + srcClasificacion + "'" + ', ' + "'" + Exist + "'" + ');" title="Ver detalles" /></div>';

    divProducto += '<div class="cnt_nombre_tarjeta_producto">';
    divProducto += '<div class="div_2Renglones"><span class="spn_nombreProductoCatalogo" title="Nombre">' + Nombre + '</span></div>';
    divProducto += '<div class="div_2Renglones"><span class="spn_sustenciaActivaProductoCatalogo" title="Sustancia activa">' + SustanciaActiva + '</span></div>';
    divProducto += '<span class="spn_indiceTerapeuticoProductoCatalogo" title="Indice terapeutico">' + IndiceTerapeutico + '</span>';
    divProducto += '<span class="spn_laboratorioProductoCatalogo" title="Laboratorio">' + Laboratorio.toUpperCase() + '</span>';
    divProducto += '</div>';

    divProducto += '<div class="div_exintenciaProductoCatalogo">';
    divProducto += '<div class="div_exintenciaProductoCatalogoDiv">';
    //if (Exist == "DISPONIBLE") {
    //    //divProducto += '<a class="icone-check a_check"></a>';
    //    //divProducto += '<span class="spn_resaltar">STOCK DISPONIBLE</span>';
    //}
    //else {
    //    //divProducto += '<a class="icone-close a_close2"></a>';
    //    //divProducto += '<span class="spn_resaltar">STOCK NO DISPONIBLE</span>';
    //}
    divProducto += '</div>';
    divProducto += '</div>';

    if (Oferta != "0%") {

        divProducto += '<div class="div_grupoPrecios1">';
        divProducto += '<div><span class="spn_resaltar" title="Precio de lista">P.L.</span><span>' + PreList + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Descuentp">Desc</span><span>' + Descuento + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Precio unitario">P.U.</span><span class="spn_tachado">' + PreFinalSoloDescuento + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Precio oferta">P.Ofe.</span><span id="lbl_preFin' + numero + '">' + PreFinal + '</span></div>';
        divProducto += '</div>';
    }
    else {
        divProducto += '<div class="div_grupoPrecios2">';
        divProducto += '<div><span class="spn_resaltar" title="Precio de lista">P.L.</span><span>' + PreList + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Descuentp">Desc</span><span>' + Descuento + '</span></div>';
        divProducto += '<div><span class="spn_resaltar" title="Precio unitario">P.U.</span><span id="lbl_preFin_sugerencia' + numero + '">' + PreFinal + '</span></div>';
        divProducto += '</div>';
    }

    divProducto += '<div class="div_grupoPrecios3">';
    divProducto += '<div><span class="spn_resaltar">SubTotal</span><span id="lbl_subTotal_sugerencia' + numero + '">$0.00</span></div>';
    divProducto += '<div><span class="spn_resaltar">IVA</span><span id="lbl_iva_sugerencia' + numero + '">' + IVA + '</span></div>';
    divProducto += '</div>';



    divProducto += '<div class="div_cantidadAgregarProductoCatalogo">';
    divProducto += '<div class="div_cantidadAgregarProductoCatalogoDiv">';
    //divProducto += '<span class="spn_resaltar">Cantidad</span>';
    divProducto += '<div class="div_cantidadProductoCatalogo">';
    /////////////////
    if (parseInt(Exist) > 3) {
        divProducto += '<a class="icone-remove a_aumentarDisminuir" style="cursor: pointer;" title="Dismunuir" onclick="fnDisminuirCantidad(\'#tb_cantidad_sugerencia' + numero + '\',\'#lbl_subTotal_sugerencia' + numero + '\',\'#lbl_preFin_sugerencia' + numero + '\',\'\',\'\')" ></a>';
        divProducto += '<input name="tb_cantidad" type="text" id="tb_cantidad_sugerencia' + numero + '" class="tb_cantidadProductoCatalogo" value="0" onkeyup="fnCambiarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'\',\'\')">';
        divProducto += '<a class="icone-add a_aumentarDisminuir" style="cursor: pointer;" title="Aumentar" onclick="fnAumentarCantidad(\'#tb_cantidad_sugerencia' + numero + '\',\'#lbl_subTotal_sugerencia' + numero + '\',\'#lbl_preFin_sugerencia' + numero + '\',\'\',\'\')"></a>';
    }
    else {
        divProducto += '<a class="icone-remove a_aumentarDisminuir" title="Dismunuir"></a>';
        divProducto += '<input name="tb_cantidad" type="text" id="tb_cantidad_sugerencia' + numero + '" class="tb_cantidadProductoCatalogo" value="0" disabled="true">';
        divProducto += '<a class="icone-add a_aumentarDisminuir" title="Aumentar"></a>';
    }
    ////////////////
    divProducto += '</div>';
    divProducto += '</div>';


    divProducto += '<div class="div_cantidadAgregarProductoCatalogoDiv">';
    ////////////////
    //if (Exist == "DISPONIBLE") {
    if (parseInt(Exist) > 3) {
        if ($("#status")[0] != null) {
            divProducto += '<a id="a_agregar' + numero + '" class="btn_agregar_carrito_disponible" title="Agregar" onclick="fnAgregarProducto(\'#lbl_codigo_sugerencia' + numero + '\',\'#tb_cantidad_sugerencia' + numero + '\',\'#lbl_preFin_sugerencia' + numero + '\',\'#lbl_iva_sugerencia' + numero + '\',this)")" >AGREGAR</a>';
        }
        else {
            divProducto += '<a id="a_agregar' + numero + '" class="icone-add_shopping_cart a_add_shopping_cart" title="Agregar"></a>';
        }
    }
    else {
        divProducto += '<a id="a_agregar' + numero + '" class="btn_agregar_carrito_no_disponible" title="Agregar">NO DISPONIBLE</a>';
    }
    ////////////////
    divProducto += '</div>';
    divProducto += '</div>';

    // NUEVO DISEÑO
    divProducto += '<div class="cnt_codigo_barras_tarjeta_producto">';
    divProducto += '<label>Código de Barras</label>';
    divProducto += '</br>';
    divProducto += '<label style="font-weight: bold;">' + codigoBarras + '</label>';
    divProducto += '</div>';

    divProducto += ' </div> ';
    $('#cnt_productos_relacionados_carrito').append(divProducto);

};

function fnCambiarCantidad(tb_control, lbl_subTotal, lbl_preFin, lbl_codigo, lbl_iva) {
    if (($(tb_control)[0]).value.toString().trim() != "") {
        $(lbl_subTotal)[0].textContent = "$" + ((parseFloat($(tb_control)[0].value) * parseFloat(($(lbl_preFin)[0].textContent.replace("$", "")))).toFixed(2));
    }
    else {
        $(lbl_subTotal)[0].textContent = "$0.00";
    }
    if (lbl_codigo != "") {
        fnActualizarProducto(lbl_codigo, tb_control, lbl_preFin, lbl_iva, null);
    }
};
function fnAumentarCantidad(tb_control, lbl_subTotal, lbl_preFin, lbl_codigo, lbl_iva) {

    var cantidad = parseInt($(tb_control)[0].value);

    if (($(tb_control)[0]).value.toString().trim() == "") {
        $(tb_control)[0].value = 0;
        $(lbl_subTotal)[0].textContent = "$0.00";
    }
    else {
        $(tb_control)[0].value = cantidad + 1;
        $(lbl_subTotal)[0].textContent = "$" + ((parseFloat($(tb_control)[0].value) * parseFloat(($(lbl_preFin)[0].textContent.replace("$", "")))).toFixed(2));
    }

    if (lbl_codigo != "") {
        fnActualizarProducto(lbl_codigo, tb_control, lbl_preFin, lbl_iva, null);
    }

    return false;
};
function fnDisminuirCantidad(tb_control, lbl_subTotal, lbl_preFin, lbl_codigo, lbl_iva) {

    if (parseInt($(tb_control)[0].value) <= 1) {

        //$(tb_control)[0].value = 0;
        //$(lbl_subTotal)[0].textContent = "$0.00";

    }
    else {

        var cantidad = parseInt($(tb_control)[0].value);

        if (($(tb_control)[0]).value.toString().trim() == "") {

            $(tb_control)[0].value = 0;
            $(lbl_subTotal)[0].textContent = "$0.00";

        } else {

            $(tb_control)[0].value = cantidad - 1;

            if (parseInt($(tb_control)[0].value) > 0) {
                $(lbl_subTotal)[0].textContent = "$" + ((parseFloat($(tb_control)[0].value) * parseFloat(($(lbl_preFin)[0].textContent.replace("$", "")))).toFixed(2));
            }

        }

    }

    if (lbl_codigo != "") {
        fnActualizarProducto(lbl_codigo, tb_control, lbl_preFin, lbl_iva, null);
    }

};
function fnAgregarProducto(lbl_codigo, tb_control, lbl_subTotal, lbl_iva, boton) {

    agregar_producto_sr(
        $("#Cliente")[0].value,
        document.getElementById(lbl_codigo.replace("#", "")).textContent,
        parseInt(document.getElementById(tb_control.replace("#", "")).value),
        parseFloat($(lbl_subTotal)[0].textContent.replace("$", "")).toFixed(2),
        parseFloat($(lbl_iva)[0].textContent.replace("%", "")).toFixed(2),
        boton.id
    );

    //PageMethods.RegisterUser(document.getElementById(lbl_codigo.replace("#", "")).textContent, onSucess, onError);
    //function onSucess(result) {

    //    var bandera = true;

    //    if (parseInt(result) > 0) {
    //        if (parseInt(document.getElementById(tb_control.replace("#", "")).value) > parseInt(result)) {
    //            bandera = false;
    //        }
    //    }

    //    if (bandera == false) {
    //        fnGenerarMensaje("Favor de revisar", "Solo puede agregar un máximo de " + result + " piezas de este producto.", "error");
    //    } else {

    //        var numPro = 0;
    //        var bandera = $($($(boton).parent().parent().children()[0]).children()[0]).children().length;
    //        var validacion = 1;
    //        if ($("#Aviso")[0].value == "") {
    //            validacion++;
    //        }
    //        //if (bandera == 2 && validacion == 2)
    //        if (false) {
    //            fnGenerarMensaje("Favor de revisar", "No se puede agregar él producto por que no cuenta con aviso de funcionamiento", "warning");
    //        }
    //        else {
    //            if ($("#NumeroProductos")[0].value != "") {
    //                numPro = parseInt($("#NumeroProductos")[0].value);
    //            }

    //            if (parseInt($(tb_control)[0].value) != 0 && $(lbl_subTotal)[0].textContent != "$NaN") {

    //                var productosCarrito = $("#Pedido")[0].value.split("&");
    //                var siAgregar = true;
    //                var total = 0;
    //                var iva = 0;
    //                var cliente = $("#Cliente")[0].value;

    //                if (productosCarrito[0] != "") {

    //                    for (var i = 0; i < productosCarrito.length - 1; i++) {

    //                        var producto = productosCarrito[i].split("/");

    //                        if (($(lbl_codigo)[0].innerHTML) == producto[0]) {

    //                            siAgregar = false;

    //                            var cantidadTotal = (parseInt($(tb_control)[0].value) + parseInt(producto[1]));
    //                            var totalCarrito = (parseFloat($(lbl_subTotal)[0].textContent.replace("$", "")) + parseFloat(producto[2])).toFixed(2);
    //                            var iva = ((parseFloat("0." + $(lbl_iva)[0].textContent.replace("%", "")) * (parseFloat($(lbl_subTotal)[0].textContent.replace("$", "")))) + parseFloat(producto[4])).toFixed(2);

    //                            $("#Pedido")[0].value = $("#Pedido")[0].value.replace((producto[0] + "/" + producto[1] + "/" + producto[2] + "/" + producto[3] + "/" + producto[4] + "&"), (producto[0] + "/" + cantidadTotal + "/" + totalCarrito + "/" + cliente + "/" + iva + "&"));
    //                            //{cliente : "200317", codigo : "HER004", cantidad : 2, subTotal : "61.48"}//

    //                            var item = JSON.stringify({ cliente: cliente, codigo: producto[0], cantidad: parseInt(producto[1]), subTotal: producto[2], iva: producto[4] });
    //                            var itemActualizado = JSON.stringify({ cliente: cliente, codigo: producto[0], cantidad: cantidadTotal, subTotal: totalCarrito, iva: iva });

    //                            localStorage.Pedido = localStorage.Pedido.replace((item + "//"), (itemActualizado + "//"));

    //                            $(lbl_subTotal)[0].textContent = "$0.00";
    //                            fnEfectoAgregarCarrito(boton);
    //                            fnActualizarEstilosCarrito($('#sp_numProductos')[0].textContent);
    //                        }
    //                    }
    //                    //$('#sp_totalCarrito')[0].textContent = "Total $" + (parseFloat(totalCarrito) + (parseFloat(subTotal)));
    //                }

    //                if (siAgregar) {

    //                    $("#Pedido")[0].value = $("#Pedido")[0].value + ($(lbl_codigo)[0].innerHTML + "/" + $(tb_control)[0].value + "/" + $(lbl_subTotal)[0].textContent.replace("$", "") + "/" + cliente + "/" + (parseFloat("0." + $(lbl_iva)[0].textContent.replace("%", "")) * (parseFloat($(lbl_subTotal)[0].textContent.replace("$", "")))).toFixed(2).toString() + "&");
    //                    //{cliente : "200317", codigo : "HER004", cantidad : 2, subTotal : "61.48"}//

    //                    var item = JSON.stringify({ cliente: cliente, codigo: $(lbl_codigo)[0].innerHTML, cantidad: parseInt($(tb_control)[0].value), subTotal: (parseFloat($(lbl_subTotal)[0].textContent.replace("$", ""))).toFixed(2), iva: (parseFloat("0." + $(lbl_iva)[0].textContent.replace("%", "")) * (parseFloat($(lbl_subTotal)[0].textContent.replace("$", "")))).toFixed(2) })

    //                    localStorage.Pedido = localStorage.Pedido + (item + "//");

    //                    $("#NumeroProductos")[0].value = (numPro + 1);
    //                    $('#sp_numProductos')[0].textContent = (numPro + 1);
    //                    fnEfectoAgregarCarrito(boton);
    //                    fnActualizarEstilosCarrito($('#sp_numProductos')[0].textContent);

    //                    $(lbl_subTotal)[0].textContent = "$0.00";

    //                }

    //                $(tb_control)[0].value = 0;

    //                productosCarrito = $("#Pedido")[0].value.split("&");

    //                if (productosCarrito[0] != "") {

    //                    for (var i = 0; i < productosCarrito.length - 1; i++) {

    //                        var productoC = productosCarrito[i].split("/");
    //                        total = total + parseFloat(productoC[2]);
    //                        iva = iva + parseFloat(productoC[4]);

    //                    }

    //                    $('#sp_totalCarrito')[0].textContent = "Total $" + parseFloat(total + iva).toFixed(2);
    //                    $("#TotalCarrito")[0].value = (total).toFixed(2);
    //                    $("#IVA")[0].value = (parseFloat(iva)).toFixed(2);

    //                }
    //            }
    //        }
    //    }

    //}
    //function onError(result) {
    //    swal({ title: 'Error', text: 'Error desconocido al agregar el producto.', html: true, type: 'error' });
    //}

};
function fnEfectoAgregarCarrito(codigo) {

    var cart = $('#a_carrito')[0];
    //var imgtodrag;

    //var test = $($(boton).parent().parent().parent().children()).length;
    //var test2 = $($(boton).parent().parent().parent().children()[1]);

    //if ($($(boton).parent().parent().parent().children()).length == 7) {
    //    imgtodrag = $($(boton).parent().parent().parent().children()[1]);
    //} else if ($($(boton).parent().parent().parent().children()).length == 8) {
    //    imgtodrag = $($(boton).parent().parent().parent().children()[1]);
    //} else {
    //    imgtodrag = $($(boton).parent().parent().parent().children()[2]);
    //}
    //var imgtodrag = $($(boton));

    //imgtodrag = $("#img_AVI011");

    if (document.getElementById("img_" + codigo) != null) {

        var imgclone = $($("#img_" + codigo).clone()[0])
            .offset({
                top: $("#img_" + codigo).parent().offset().top,
                left: $("#img_" + codigo).parent().offset().left,
            })
            .css({
                'position': 'absolute',
                'z-index': '100',
                'padding': '0px',
            })
            .appendTo($('body'))
            .animate({
                'top': $('#div_contenedorEncabezado').offset().top,
                'left': $("body").width() - 40,
                'width': 0,
                'height': 0
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            $(cart).effect('shake', {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }

};
function fnBuscar() {
    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();
};
function fnBuscar2() {
    if ($('#tb_cliente').val().length > 0) {

        $('#Contenedor_a_buscar')[0].click();
        fnBloquear();

    }
    else {
        fnGenerarMensaje("Favor de revisar", "No sé a introducido el número de cuenta del cliente.", "warning");
    };
};
function fnBloquear() {
    $.blockUI({
        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        }
    });
};
function fnBuscaLaboratorio(etiqueta) {

    //if (parseInt($(".ul_filtros").css("width").replace("px", "")) > 200){

    //    var a = $(etiqueta)[0].textContent;
    //    var split = a.split("(");

    //    $('#hf_laboratorio')[0].value = split[0].trim() + "*";

    //    $('#Contenedor_a_buscar')[0].click();
    //    fnBloquear();

    //} else {
    //    alert("no")
    //}

    if (parseInt($(".ul_filtros").css("height").replace("px", "")) > 40) {

        var a = $(etiqueta)[0].textContent;
        var split = a.split("(");

        $('#hf_laboratorio')[0].value = split[0].trim() + "*";

        $('#Contenedor_a_buscar')[0].click();
        fnBloquear();

    }

};
function fnBuscaLaboratorio2(etiqueta) {
    if ($('#tb_cliente').val().length > 0) {

        var a = $(etiqueta)[0].textContent;
        var split = a.split("(");

        $('#tb_buscar')[0].value = split[0].trim() + "*";
        $('#Contenedor_a_buscar')[0].click();
        fnBloquear();

    }
    else {
        fnGenerarMensaje("Favor de revisar", "No sé a introducido el número de cuenta del cliente.", "warning");
    };

};
function fmCrearProducto2(Nombre, SustanciaActiva, IndiceTerapeutico, Laboratorio, Codigo, Exist, PreList, Descuento, Oferta, PreFinal, IVA, numero, cantidad, subTotal, numProFin, imagen, stylo, PreFinalSoloDescuento) {

    if (Nombre == "BORRAR") {
        fnBorrarProductoNoEncontrado(SustanciaActiva, IndiceTerapeutico, Laboratorio, Codigo, Exist);
    }
    else {
        var divProducto = "";
        //divProducto += '<div style="display: -webkit-box;">';
        divProducto += '<div style="display: box;">';
        divProducto += '<div id="div_p' + numero + '" class="margenProductos cnt_producto_carrito">';
        divProducto += '<div class="datosProducto imagen_productoCarrito">';

        if (imagen.length > 0) {
            divProducto += '<div>';
            if (stylo == "W") {
                divProducto += '<img id="img_producto' + numero + '" style="border-radius: 20px;" class="imgWidth" src="' + imagen + '">';//"' + imagen + '>';
            }
            else {
                divProducto += '<img id="img_producto' + numero + '" style="border-radius: 20px;" class="imgHeigth" src="' + imagen + '">';//"' + imagen + '>';
            }
            divProducto += '</div>';
        }
        divProducto += '</div>';
        divProducto += '<div class="datosProducto datos_productoCarrito">';
        divProducto += '<h1 id="lbl_codigo' + numero + '" class="lbl_codigo">' + Codigo + '</h1>';
        divProducto += '<span class="lbl_nombre">' + Nombre + '</span>';
        divProducto += '<span class="lbl_sustancia_indice">' + SustanciaActiva + '</span>';
        divProducto += '<span class="lbl_sustancia_indice">' + IndiceTerapeutico + '</span>';
        divProducto += '</div>';

        divProducto += '<div class="datosProducto precios_productoCarrito">';
        divProducto += '<div class="grupo1">';
        divProducto += '<span class="lbl_precios_titulo">P.L.</span>';
        divProducto += '<span class="lbl_precios_titulo">Dto.</span>';
        divProducto += '<span class="lbl_precios_titulo">P.U.</span>';
        divProducto += '</div>';
        //divProducto += '<div class="grupo1">';
        //divProducto += '<span id="lbl_preFin' + numero + '" class="lbl_preFin">' + PreFinal + '</span>';
        //divProducto += '<span id="lbl_subTotal' + numero + '" class="lbl_subTotal">$' + (parseFloat(PreFinal.replace("$", "")) * parseInt(cantidad)).toFixed(2) + '</span>';
        //divProducto += '<span id="lbl_iva' + numero + '" class="lbl_iva">' + IVA + '</span>';
        //divProducto += '</div>';

        //console.log((PreFinal));
        //console.log(parseFloat(PreFinalSoloDescuento));

        divProducto += '<div class="grupo1">';
        divProducto += '<span id="lbl_preList' + numero + '" class="lbl_preFin">' + PreList + '</span>';
        divProducto += '<span id="lbl_descuento' + numero + '" class="lbl_subTotal">' + Descuento + '</span>';
        divProducto += '<span id="lbl_preUni' + numero + '" class="lbl_preFin" ' + (parseFloat(PreFinal.replace("$", "")) < parseFloat(PreFinalSoloDescuento) ? 'style="text-decoration: line-through;"' : '') + '>' + PreFinalSoloDescuento + '</span>';
        divProducto += '</div>';
        divProducto += '<div class="grupo1">';
        divProducto += '<span class="lbl_precios_titulo">Subtotal</span>';
        divProducto += '<span class="lbl_precios_titulo">Iva</span>';
        divProducto += '<span class="lbl_precios_titulo" style="color: ' + (parseFloat(PreFinal.replace("$", "")) < parseFloat(PreFinalSoloDescuento) ? 'red' : 'transparent') + ';">P.Ofe.</span>';
        divProducto += '</div>';
        divProducto += '<div class="grupo1">';
        divProducto += '<span id="lbl_subTotal' + numero + '" class="lbl_subTotal">$' + (parseFloat(PreFinal.replace("$", "")) * parseInt(cantidad)).toFixed(2) + '</span>';
        divProducto += '<span id="lbl_iva' + numero + '" class="lbl_subTotal">' + IVA + '</span>';
        divProducto += '<span id="lbl_preFin' + numero + '" class="lbl_iva" style="color: ' + (parseFloat(PreFinal.replace("$", "")) < parseFloat(PreFinalSoloDescuento) ? 'red' : 'transparent') + ';">' + PreFinal + '</span>';
        divProducto += '</div>';
        divProducto += '</div>';

        divProducto += '<div class="datosProducto disponible_productoCarrito">';
        if (Oferta != "0%") {
            divProducto += ' <div class="mensajeOfertaNuevo_2"><label>Oferta</label></br><label>-' + Oferta + '</label></div> ';
        }
        else {
            divProducto += ' <div class="oferta6"></div> ';
        }
        divProducto += '<a class="icone-remove a_aumentarDisminuir" onclick="fnDisminuirCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'#lbl_codigo' + numero + '\',\'#lbl_iva' + numero + '\')"></a>';
        divProducto += '<input name="tb_cantidad" style="margin: auto 5px;" type="text" id="tb_cantidad' + numero + '" class="tb_cantidadProductoCatalogo" value="' + cantidad + '" onkeyup="fnCambiarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'#lbl_codigo' + numero + '\',\'#lbl_iva' + numero + '\')">';
        divProducto += '<a class="icone-add a_aumentarDisminuir" style="cursor: pointer;" onclick="fnAumentarCantidad(\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_preFin' + numero + '\',\'#lbl_codigo' + numero + '\',\'#lbl_iva' + numero + '\')"></a>';
        divProducto += '</div>';

        divProducto += '<div class="datosProducto botones_productoCarrito">';
        divProducto += '<a id="a_borrar' + numero + '" title="Eliminar"class="icone-delete a_delete_sync" onclick="fnBorrarProducto(\'#lbl_codigo' + numero + '\',\'#tb_cantidad' + numero + '\',\'#lbl_subTotal' + numero + '\',\'#lbl_iva' + numero + '\',this)")"></a>';
        divProducto += '</div>';

        // OFERTA NUEVO DISEÑO

        divProducto += ' </div> ';

        divProducto += ' </div> ';
        divProducto += ' </div> ';

        //if (numero == numProFin) {

        //    divProducto += '<div id="div_totalesCarrito"> ';
        //    divProducto += '<div style="color: white;" id="cnt_total_pedido_envio">';
        //    divProducto += '<div>';
        //    divProducto += '<span>SubTotal: </span><span id="sp_subTotal" class="lbl_preFin">' + 0 + '</span>';
        //    divProducto += '</div>';
        //    divProducto += '<div>';
        //    divProducto += '<span>IVA: </span><span id="sp_iva" class="lbl_subTotal">' + 0 + '</span>';
        //    divProducto += '</div>';
        //    divProducto += '<div>';
        //    divProducto += '<span>Total: </span><span id="sp_total">' + 0 + '</span>';
        //    divProducto += '</div>';
        //    // NO SALE BOTON ENVIAR??????
        //    if ($("#Bloqueo")[0] != null) {
        //        if ($("#Bloqueo")[0].value == "" && ($("#Web_Vendedor")[0].value != "Z98" || $("#Web_Vendedor")[0].value != "Z99")) {
        //            divProducto += '<div>';
        //            //divProducto += '<a class="boton2" onclick="fnEnviaPedido()">ENVIAR</a>';
        //            divProducto += '<a class="boton2" onclick="fnEnviaPedido(1)">ENVIAR</a>'; // enviar p
        //            divProducto += '</div>';
        //        }
        //        //alert($("#Web_Vendedor")[0].value);
        //    }
        //    divProducto += '</div>';
        //    divProducto += ' </div> ';
        //}

        var divProductoTotalesCarrito = "";

        if (document.getElementById("div_totalesCarrito") == null) {
            //alert("crear div");

            divProductoTotalesCarrito += '<div id="div_totalesCarrito" class="cnt_total_carrito">';

            divProductoTotalesCarrito += '<div>';
            divProductoTotalesCarrito += '<span>SubTotal: </span>';
            divProductoTotalesCarrito += '<span>IVA: </span>';
            divProductoTotalesCarrito += '<span style="color: red;">Total: </span>';
            divProductoTotalesCarrito += '</div>';
            divProductoTotalesCarrito += '<div id="cnt_total_pedido_envio">';
            // aqui
            divProductoTotalesCarrito += '<span id="sp_subTotal" class="">' + 0 + '</span>';
            divProductoTotalesCarrito += '<span id="sp_iva" class="lbl_subTotal">' + 0 + '</span>';
            divProductoTotalesCarrito += '<span id="sp_total" style="color: red;">' + 0 + '</span>';
            divProductoTotalesCarrito += '</br>';
            // NO SALE BOTON ENVIAR??????
            if ($("#Bloqueo")[0] != null) {
                if ($("#Bloqueo")[0].value == "" && ($("#Web_Vendedor")[0].value != "Z98" || $("#Web_Vendedor")[0].value != "Z99")) {
                    divProductoTotalesCarrito += '<div>';
                    //divProducto += '<a class="boton2" onclick="fnEnviaPedido()">ENVIAR</a>';
                    divProductoTotalesCarrito += '<a class="boton2" onclick="fnEnviaPedido(1)" style="padding: 10px; font-size: 12px;">Generar pedido</a>'; // enviar p
                    divProductoTotalesCarrito += '</div>';
                }
                //alert($("#Web_Vendedor")[0].value);
            }
            divProductoTotalesCarrito += '</div>';
            divProductoTotalesCarrito += ' </div> ';

        } else {
            //alert("no crear div");
        }

        $('#div_carritoProductos').append(divProducto);
        $('#div_totales_carrito_append').append(divProductoTotalesCarrito);

        if (numero == numProFin) {

            var pedido = localStorage.Pedido.split("//");
            var pedidoHF = "";

            for (var i = 0; i < pedido.length - 1; i++) {

                var item = JSON.parse(pedido[i]);

                if (item.cliente == $("#Cliente")[0].value) {
                    pedidoHF += item.codigo + "/" + item.cantidad + "/" + item.subTotal + "/" + item.cliente + "/" + item.iva + "&";
                }

            }

            $("#Pedido")[0].value = pedidoHF;

            var productosCarrito = $("#Pedido")[0].value.split("&");
            var total = 0;
            var iva = 0;
            for (var i = 0; i < productosCarrito.length - 1; i++) {
                var producto = productosCarrito[i].split("/");
                if (producto[3] == $("#Cliente")[0].value) {
                    total = total + parseFloat(producto[2]);
                    iva = iva + parseFloat(producto[4]);
                }
            }

            $('#sp_subTotal')[0].textContent = total.toFixed(2);
            $('#sp_iva')[0].textContent = iva.toFixed(2);
            $('#sp_total')[0].textContent = parseFloat(total + iva).toFixed(2);
        };

        setTimeout(function () {

            actualizar_producto_ls(
                $("#Cliente")[0].value,
                Codigo,
                cantidad,
                parseFloat(PreFinal.replace("$", "")).toFixed(2),
                (IVA == "16%" ? 16 : 0)
            );

        }, 1000);


    }
};
function fnBorrarProductoNoEncontrado(Codigo, Cantidad, SubTotal, Cliente, Iva) {

    var item = JSON.stringify({ cliente: Cliente, codigo: Codigo, cantidad: parseInt(Cantidad), subTotal: SubTotal, iva: Iva });
    var total = 0;
    var iva = 0;

    localStorage.Pedido = localStorage.Pedido.replace((item + "//"), "");

    $("#NumeroProductos")[0].value = (parseInt($('#sp_numProductos')[0].textContent) - 1);
    $('#sp_numProductos')[0].textContent = (parseInt($('#sp_numProductos')[0].textContent) - 1);

    productosCarrito = $("#Pedido")[0].value.split("&");

    if (productosCarrito[0] != "") {

        for (var i = 0; i < productosCarrito.length - 1; i++) {
            var producto = productosCarrito[i].split("/");
            total = total + parseFloat(producto[2]);
            iva = parseFloat(producto[4]);
        }
        $('#sp_totalCarrito')[0].textContent = "Total $" + parseFloat(total + iva).toFixed(2);

        $('#sp_subTotal')[0].textContent = total.toFixed(2);
        $('#sp_iva')[0].textContent = iva.toFixed(2);
        $('#sp_total')[0].textContent = parseFloat(total + iva).toFixed(2);

        $("#TotalCarrito")[0].value = (total).toFixed(2);
        $("#IVA")[0].value = (iva).toFixed(2);
    }

};
function fnMostrarCarrito() {
    $('#Contenedor_a_mostarCarrito')[0].click();
    fnBloquear();
};
function fnActualizarProducto(lbl_codigo, tb_control, lbl_preFin, lbl_iva, boton) {

    actualizar_producto_ls(
        $("#Cliente")[0].value,
        $(lbl_codigo)[0].textContent,
        $(tb_control)[0].value,
        parseFloat($(lbl_preFin)[0].textContent.replace("$", "")).toFixed(2),
        parseFloat($(lbl_iva)[0].textContent.replace("%", "")).toFixed(2),
    );

    //PageMethods.RegisterUser(document.getElementById(lbl_codigo.replace("#", "")).textContent, onSucess, onError);
    //function onSucess(result) {

    //    var bandera = true;

    //    if (parseInt(result) > 0) {
    //        if (parseInt(document.getElementById(tb_control.replace("#", "")).value) > parseInt(result)) {
    //            bandera = false;
    //        }
    //    }

    //    if (bandera == false) {
    //        fnGenerarMensaje("Favor de revisar", "Solo puede agregar un máximo de " + result + " piezas de este producto.", "error");
    //    } else {

    //        var productosCarrito = $("#Pedido")[0].value.split("&");
    //        var total = 0;
    //        var iva = 0;

    //        var cliente = $("#Cliente")[0].value;

    //        if (productosCarrito[0] != "") {

    //            for (var i = 0; i < productosCarrito.length - 1; i++) {

    //                var producto = productosCarrito[i].split("/");

    //                if (($(lbl_codigo)[0].innerHTML) == producto[0]) {

    //                    var cantidadTotal = (parseInt($(tb_control)[0].value));
    //                    var totalCarrito = (parseFloat($(lbl_subTotal)[0].textContent.replace("$", ""))).toFixed(2);
    //                    iva = parseFloat((parseFloat("0." + $(lbl_iva)[0].textContent.replace("%", "")) * (parseFloat($(lbl_subTotal)[0].textContent.replace("$", "")))).toFixed(2));

    //                    $("#Pedido")[0].value = $("#Pedido")[0].value.replace((producto[0] + "/" + producto[1] + "/" + producto[2] + "/" + cliente + "/" + producto[4] + "&"), (producto[0] + "/" + cantidadTotal + "/" + totalCarrito + "/" + cliente + "/" + iva.toString() + "&"));

    //                    var item = JSON.stringify({ cliente: cliente, codigo: producto[0], cantidad: parseInt(producto[1]), subTotal: producto[2], iva: producto[4] })
    //                    var itemActualizado = JSON.stringify({ cliente: cliente, codigo: producto[0], cantidad: cantidadTotal, subTotal: totalCarrito, iva: iva.toString() })

    //                    localStorage.Pedido = localStorage.Pedido.replace((item + "//"), (itemActualizado + "//"));
    //                }
    //            }
    //        }

    //        productosCarrito = $("#Pedido")[0].value.split("&");

    //        iva = 0;

    //        if (productosCarrito[0] != "") {

    //            for (var i = 0; i < productosCarrito.length - 1; i++) {

    //                var productoC = productosCarrito[i].split("/");

    //                total += parseFloat(productoC[2]);
    //                iva += parseFloat(productoC[4]);

    //            }

    //            $('#sp_totalCarrito')[0].textContent = "Total $" + parseFloat(total + iva).toFixed(2);

    //            $('#sp_subTotal')[0].textContent = total.toFixed(2);
    //            $('#sp_iva')[0].textContent = iva.toFixed(2);
    //            $('#sp_total')[0].textContent = parseFloat(total + iva).toFixed(2);

    //            $("#TotalCarrito")[0].value = (total).toFixed(2);
    //            $("#IVA")[0].value = (iva).toFixed(2);

    //        }
    //    }

    //}
    //function onError(result) {
    //    swal({ title: 'Error', text: 'Error desconocido al agregar el producto.', html: true, type: 'error' });
    //}

};
function fnBorrarProducto(lbl_codigo, tb_control, lbl_subTotal, lbl_iva, boton) {

    borrar_producto_carrito_sr(
        $("#Cliente")[0].value,
        $(lbl_codigo)[0].textContent,
        lbl_codigo
    );

    //var productosCarrito = $("#Pedido")[0].value.split("&");
    //var total = 0;
    //var iva = 0;
    //var cliente = $("#Cliente")[0].value;

    //if (productosCarrito[0] != "") {

    //    for (var i = 0; i < productosCarrito.length - 1; i++) {

    //        var producto = productosCarrito[i].split("/");

    //        if (($(lbl_codigo)[0].innerHTML) == producto[0]) {

    //            $("#Pedido")[0].value = $("#Pedido")[0].value.replace((producto[0] + "/" + producto[1] + "/" + producto[2] + "/" + cliente + "/" + producto[4] + "&"), "");
    //            //{cliente : "200317", codigo : "HER004", cantidad : 2, subTotal : "61.48"}//

    //            var item = JSON.stringify({ cliente: cliente, codigo: producto[0], cantidad: parseInt(producto[1]), subTotal: producto[2], iva: producto[4] });

    //            localStorage.Pedido = localStorage.Pedido.replace((item + "//"), "");

    //            $("#NumeroProductos")[0].value = (parseInt($('#sp_numProductos')[0].textContent) - 1);
    //            $('#sp_numProductos')[0].textContent = (parseInt($('#sp_numProductos')[0].textContent) - 1);
    //            //fnEfectoAgregarCarrito(boton);
    //        }
    //    }
    //}

    //productosCarrito = $("#Pedido")[0].value.split("&");

    //if (productosCarrito[0] != "") {

    //    for (var i = 0; i < productosCarrito.length - 1; i++) {

    //        var productoC = productosCarrito[i].split("/");
    //        total = total + parseFloat(productoC[2]);
    //        iva = parseFloat(productoC[4]);
    //    }

    //    $('#sp_totalCarrito')[0].textContent = "Total $" + parseFloat(total + iva).toFixed(2);

    //    $('#sp_subTotal')[0].textContent = total.toFixed(2);
    //    $('#sp_iva')[0].textContent = iva.toFixed(2);
    //    $('#sp_total')[0].textContent = parseFloat(total + iva).toFixed(2);

    //    $("#TotalCarrito")[0].value = (total).toFixed(2);
    //    $("#IVA")[0].value = (iva).toFixed(2);
    //}

    //if (productosCarrito[0] == "") {
    //    $('#Contenedor_a_regresarCatalogo')[0].click();
    //}
    //else {
    //    $('#a_carrito')[0].click();
    //}

    //fnBloquear();
};
function fnBorrarProducto2(codigo) {
    var productosCarrito = $("#Pedido")[0].value.split("&");
    var total = 0;
    var iva = 0;
    var cliente = $("#Cliente")[0].value;
    if (productosCarrito[0] != "") {
        for (var i = 0; i < productosCarrito.length - 1; i++) {
            var producto = productosCarrito[i].split("/")
            if (codigo == producto[0]) {

                $("#Pedido")[0].value = $("#Pedido")[0].value.replace((producto[0] + "/" + producto[1] + "/" + producto[2] + "/" + cliente + "/" + producto[4] + "&"), "")
                //{cliente : "200317", codigo : "HER004", cantidad : 2, subTotal : "61.48"}//

                var item = JSON.stringify({ cliente: cliente, codigo: producto[0], cantidad: parseInt(producto[1]), subTotal: producto[2], iva: producto[4] })

                localStorage.Pedido = localStorage.Pedido.replace((item + "//"), "");

                $("#NumeroProductos")[0].value = (parseInt($('#sp_numProductos')[0].textContent) - 1);
                $('#sp_numProductos')[0].textContent = (parseInt($('#sp_numProductos')[0].textContent) - 1);
                //fnEfectoAgregarCarrito(boton);
            }
        }
    }

    productosCarrito = $("#Pedido")[0].value.split("&");

    if (productosCarrito[0] != "") {
        for (var i = 0; i < productosCarrito.length - 1; i++) {

            var productoC = productosCarrito[i].split("/");
            total = total + parseFloat(productoC[2]);
            iva = parseFloat(productoC[4]);
        }
        $('#sp_totalCarrito')[0].textContent = "Total $" + parseFloat(total + iva).toFixed(2);
    };
};
function fnCrearPregunta(pregunta, respuesta, id) {

    var divPregunta = "";

    divPregunta += '<div>';
    divPregunta += ' <h4 onclick="fnOcultarMostrarRespuesta(this, ' + id + ');" title="Da click para mostrar la respuesta">' + "<label id='lbl_pregunta_" + id + "'>+</label> " + pregunta + '</h4>';
    divPregunta += '<div class="respuesta" style="display: none;">';
    divPregunta += '<span>' + respuesta + '</span>';
    divPregunta += '</div>';
    divPregunta += ' </div>';
    $('.div_contenedor.respuestas').append(divPregunta);

    $('#main2').css('height', $($('.div_contenedor')[1]).height() + 90);
};
function fnOcultarMostrarRespuesta(respuesta, id) {
    respuesta.returnValue = false;
    $($(respuesta).parent().children()[1]).slideToggle("slow");

    if (document.getElementById("lbl_pregunta_" + id).textContent == "+") {
        document.getElementById("lbl_pregunta_" + id).textContent = "-";
    } else {
        document.getElementById("lbl_pregunta_" + id).textContent = "+"
    }

};
function fnEnviaPedido(accion) {

    if (accion == 1) {

        var cntNoOrdenPedido = document.createElement("div");
        var lblTitulo = document.createElement("h3");
        var txtNoOrden = document.createElement("input");
        var btnEnviar = document.createElement("a");
        var btnCancelar = document.createElement("a");

        $(cntNoOrdenPedido).addClass("cnt_solicitud_orden_pedido");
        $(btnCancelar).addClass("btn_cancelar_envio_pedido");

        lblTitulo.appendChild(document.createTextNode("Ingrese su numero de orden, en caso de no contar con el deje el campo en blanco"));

        $(txtNoOrden).attr("type", "text");
        $(txtNoOrden).attr("placeholder", "Numero de orden");
        $(txtNoOrden).attr("maxLength", "10");
        $(btnEnviar).addClass("boton2");

        btnEnviar.appendChild(document.createTextNode("Aceptar"));
        btnCancelar.appendChild(document.createTextNode("Cancelar"));

        btnCancelar.onclick = function () {

            $(cntNoOrdenPedido).remove();

        };

        btnEnviar.onclick = function () {

            document.getElementById("Contenedor_hf_no_orden_pedido_envio").value = txtNoOrden.value;

            fnEnviaPedido(2);

            $(cntNoOrdenPedido).remove();

        };

        cntNoOrdenPedido.appendChild(lblTitulo);
        cntNoOrdenPedido.appendChild(txtNoOrden);
        cntNoOrdenPedido.appendChild(btnCancelar);
        cntNoOrdenPedido.appendChild(btnEnviar);

        document.body.appendChild(cntNoOrdenPedido);

        txtNoOrden.focus();

    } else {

        swal({
            title: "Confirmación de Pedido",
            text: "Sus productos serán enviados al Centro de Distribución ¿Ésta seguro de enviar su pedido? ",
            type: "warning", showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Enviar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: true,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                    $('#Contenedor_a_enviarPedido')[0].click();
                    fnBloquear();
                }
            });

    }

};
function fnResetear() {

    localStorage.Pedido = "";
    $("#Pedido")[0].value = "";
    $("#NumeroProductos")[0].value = "0";
    //fnMostrarOcultarCarrito();
    $('#tb_buscar')[0].value = "";
    fnBuscar();

};
function fnResetear2(titulo, mensaje, tipo) {
    localStorage.Pedido = "";
    $("#Pedido")[0].value = "";
    $("#NumeroProductos")[0].value = "0";
    //fnMostrarOcultarCarrito();
    $('#tb_buscar')[0].value = "";
    //fnBuscar();

    //var item = JSON.stringify({ Titulo: titulo, Mensaje: mensaje, Tipo: tipo })
    //localStorage.MensajePantalla = item;
    //if (navigator.appName == "Microsoft Internet Explorer") {
    //    localStorage.MensajePantallatest = 2;
    //}
    //else {
    //    localStorage.MensajePantallatest = 1;
    //}

    swal({
        title: titulo,
        text: mensaje,
        type: tipo, showCancelButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Aceptar",
        closeOnConfirm: true
    },
        function (isConfirm) {
            if (isConfirm) {
                fnBuscar();
            }
        });
};
function fnResetear3(titulo, mensaje, tipo, productos) {
    var split1 = productos.split("/");
    split1.forEach(function (m) {
        if (m != "") {
            fnBorrarProducto2(m);
        };
    });

    fnGenerarMensaje2(titulo, mensaje, tipo);
};
function fnResetear4(titulo, mensaje, tipo) {

    $('#tb_buscar')[0].value = "";

    swal({
        title: titulo,
        text: mensaje,
        type: tipo, showCancelButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Aceptar",
        closeOnConfirm: true
    },
        function (isConfirm) {
            if (isConfirm) {
                fnBuscar();
            }
        });

};
function fnGenerarMensaje(titulo, mensajes, tipo) {
    var mensajeScript = "";
    var listaMensajes = "";

    if (tipo == 'warning' || tipo == 'error') {
        listaMensajes = "";
        var split1 = mensajes.split("$");
        split1.forEach(function (m) {
            if (m.length > 0) {
                listaMensajes += "<li style='text-align:left;'>" + m;
            }
        });
        listaMensajes = listaMensajes + "</ul>";
        swal({ title: "<small>" + titulo + "</small>", text: "" + listaMensajes + "", html: true, type: tipo, customClass: null });
    }
    else {
        var split1 = mensajes.split("$");
        split1.forEach(function (m) {
            if (m.length > 0) {
                listaMensajes += "<span style='color:#0099CC'>" + m + "</span>";
            }
        });
        swal({ title: "<small>" + titulo + "</small>", text: "" + listaMensajes + "", html: true, type: tipo, timer: 10000 });
    }
}
function fnGenerarMensaje2(titulo, mensajes, tipo) {
    var listaMensajes = "";
    var split1 = mensajes.split("$");
    split1.forEach(function (m) {
        if (m.length > 0) {
            listaMensajes += "<li style='text-align:left;'>" + m;
        }
    });
    listaMensajes = listaMensajes + "</ul>";

    swal({
        title: "<small>" + titulo + "</small>", text: "" + listaMensajes + "", html: true, type: tipo, customClass: null,
        showCancelButton: false, confirmButtonColor: "#DD6B55", confirmButtonText: "Aceptar", closeOnConfirm: true
    },
        function (isConfirm) {
            if (isConfirm) {
                fnBuscar();
            }
        });
};
function cambiarContraseña() {
    $('#datosUsuario2').css('display', 'none');
    //$('#div_cambioContraseña').css('display', 'inline'); // NUEVO DISENO
    return false;
};
function fnActualizarDatosCliente() {
    var validacion = true;
    var errors = "";

    if ($("#Contenedor_tb_nombre").val().length < 1) {
        errors += "Favor de indicar su nombre.$";
        validacion = false;
    }
    if ($("#Contenedor_tb_nombre2").val().length < 1) {
        errors += "Favor de indicar sus apeidos.$";
        validacion = false;
    }
    if ($("#Contenedor_tb_telefono1").val().length < 1) {
        errors += "Favor de indicar un telefono.$";
        validacion = false;
    }

    valor = $("#Contenedor_tb_correo").val();
    re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.([a-z0-9-]+)*(.[a-z]{2,3})$/
    if (!re.exec(valor.toLowerCase())) {
        errors += "él e-mail no tiene un formato correcto.$";
        validacion = false;
    }
    //if ($("#Contenedor_tb_correo").val().length < 1) {
    //    errors += "Favor de indicar su correo.$";
    //    validacion = false;
    //}
    if ($('#Contenedor_ddl_dia :selected').val() == 0 || $('#Contenedor_ddl_mes :selected').val() == 0 || $('#Contenedor_ddl_año :selected').val() == 0) {
        errors += "Favor de indicar su fecha de nacimiento.$";
        validacion = false;
    }

    if ($('#Contenedor_tb_contraseña1').val() == 0) {
        errors += "Favor de indicar su contraseña.$";
        validacion = false;
    }

    if (validacion == false) {
        fnGenerarMensaje("Favor de revisar", errors, "warning");
        return false;
    }
    else {
        fnBloquear();
    }
};
function fnActualizarContraseña() {
    var validacion = true;
    var errors = "";

    if ($("#Contenedor_tb_contraseñaActual").val().length < 1) {
        errors += "Favor de indicar su contraseña actual.$";
        validacion = false;
    }

    if (!$("#sp_check1").hasClass('a_asteriskBlue')) {
        errors += "Favor de indicar un nueva contaseña valida.$";
        validacion = false;
    }

    if (!$("#sp_check2").hasClass('a_asteriskBlue')) {
        errors += "Favor de repetir su nueva contraseña.$";
        validacion = false;
    }

    if (validacion == false) {
        fnGenerarMensaje("Favor de revisar", errors, "warning");
        return false;
    }
    else {
        fnBloquear();
    }
};
function fnLeerPedido() {
    var storage;
    if (localStorage.Pedido) {
        storage = localStorage.Pedido;
        $("#PedidoCorreo")[0].value = storage;
        $('#Contenedor_a_enviarPedidoCorreo')[0].click();
        fnBloquear();
    }
}
function fnBorrarPedido() {
    localStorage.Pedido = "";
    $("#Pedido")[0].value = "";
    $("#NumeroProductos")[0].value = "0";
    $('#Contenedor_tb_buscar')[0].value = ""; $('#Contenedor_a_buscar')[0].click();
    fnBloquear();
}

// FUNCIONES PARA MOSTRAR / OCULTAR FILTROS ******************************************************************************************

function muestra_oculta_contenedores_filtros(contenedor) {

    var arregloFiltros = ["ul_laboratorio", "ul_ofertas", "ul_generico", "ul_patente", "ul_nacional", "ul_transnacional"];

    for (i = 0; i < arregloFiltros.length; i++) {

        if (contenedor == arregloFiltros[i]) {

            //$('#' + contenedor).slideToggle("fast");

            if (contenedor == "ul_laboratorio") {

                //alert(contenedor);

                if ($('#img_laboratorios_abajo').hasClass("img_flechas_laboratorios")) {

                    $('#img_laboratorios_abajo').removeClass("img_flechas_laboratorios");
                    $('#img_laboratorios_abajo').addClass("img_flechas_laboratorios_ocultas");

                } else if ($('#img_laboratorios_abajo').hasClass("img_flechas_laboratorios_ocultas")) {

                    $('#img_laboratorios_abajo').removeClass("img_flechas_laboratorios_ocultas");
                    $('#img_laboratorios_abajo').addClass("img_flechas_laboratorios");

                }

                // -------------------------------------------------------------------------------------------------------------------

                if ($('#img_laboratorios_arriba').hasClass("img_flechas_laboratorios")) {

                    $('#img_laboratorios_arriba').removeClass("img_flechas_laboratorios");
                    $('#img_laboratorios_arriba').addClass("img_flechas_laboratorios_ocultas");

                    $('#' + contenedor).hide();

                } else if ($('#img_laboratorios_arriba').hasClass("img_flechas_laboratorios_ocultas")) {

                    $('#img_laboratorios_arriba').removeClass("img_flechas_laboratorios_ocultas");
                    $('#img_laboratorios_arriba').addClass("img_flechas_laboratorios");

                    $('#' + contenedor).show();

                }

            }

        } else {
            $('#' + arregloFiltros[i]).hide("fast");
        }

    }

}
function mostrar_menu_filtros() {

    //if ($("#accionMenu")[0].value == "") {
    //    $(".cnt_filtros_catalogo").animate({ left: "-100%" }, 300); // NUEVO DISENO
    //    $("#accionMenu")[0].value = "1";
    //} else {
    //    $(".cnt_filtros_catalogo").animate({ left: "-100%" }, 300);
    //    $("#accionMenu")[0].value = "";
    //}

}
function activar_ofertas() {

    if ($("#hf_ofertas")[0].value == "") {
        $("#hf_ofertas")[0].value = "OFERTAS";
    } else {
        $("#hf_ofertas")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_generico() {

    if ($("#hf_generico")[0].value == "") {
        $("#hf_generico")[0].value = "GENERICO";
    } else {
        $("#hf_generico")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_patente() {

    if ($("#hf_patente")[0].value == "") {
        $("#hf_patente")[0].value = "PATENTE";
    } else {
        $("#hf_patente")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_herbolario() {

    if ($("#hf_herbolario")[0].value == "") {
        $("#hf_herbolario")[0].value = "HERBOLARIO";
    } else {
        $("#hf_herbolario")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_curacion() {

    if ($("#hf_curacion")[0].value == "") {
        $("#hf_curacion")[0].value = "CURACION";
    } else {
        $("#hf_curacion")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_higiene() {

    if ($("#hf_higiene")[0].value == "") {
        $("#hf_higiene")[0].value = "HIGIENE";
    } else {
        $("#hf_higiene")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_arribos() {

    if ($("#hf_arribos")[0].value == "") {
        $("#hf_arribos")[0].value = "ARRIBOS";
    } else {
        $("#hf_arribos")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function activar_nuevos_productos() {

    if ($("#hf_nuevos_productos")[0].value == "") {
        $("#hf_nuevos_productos")[0].value = "NUEVOS";
    } else {
        $("#hf_nuevos_productos")[0].value = "";
    }

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function buscar_laboratorios_nombre() {

    $("#hf_busqueda_laboratorios")[0].value = $("#txt_busca_laboratorio")[0].value;

    $('#Contenedor_a_buscar')[0].click();
    fnBloquear();

}
function mostrar_todos_laboratorios() {

    $("#hf_busqueda_laboratorios")[0].value = "";

    $('#btn_todos_productos')[0].click();
    fnBloquear();

}
function activa_casillas_filtros(imgNormal, imgSeleccionado) {

    $('#' + imgNormal).removeClass("img_flechas_laboratorios");
    $('#' + imgNormal).addClass("img_flechas_laboratorios_ocultas");

    $('#' + imgSeleccionado).removeClass("img_flechas_laboratorios_ocultas");
    $('#' + imgSeleccionado).addClass("img_flechas_laboratorios");

}
function muestra_menu_usuario() {

    //alert(document.getElementById("img_usuario_abajo").style.width);

    if (document.getElementById("img_usuario_abajo").style.width != "0px") {

        document.getElementById("img_usuario_abajo").style.width = "0px";
        document.getElementById("img_usuario_arriba").style.width = "35px";

    } else {

        document.getElementById("img_usuario_abajo").style.width = "35px";
        document.getElementById("img_usuario_arriba").style.width = "0px";

    }

}
var accionMenuAgentes = 0;
var accionUlAgentes = 0;
function mostrar_menu_agentes() {

    if (accionMenuAgentes == 0) {
        document.getElementById("ul_agentes").style.marginLeft = "0px";
        accionMenuAgentes = 1;
    } else {
        document.getElementById("ul_agentes").style.marginLeft = "-200px";
        document.getElementById("ul_laboratorio").style.marginLeft = "-100%";
        accionMenuAgentes = 0;
    }

}
function mostrar_ul_laboratorios_agentes() {

    //alert("");

    if (accionUlAgentes == 0) {
        document.getElementById("ul_laboratorio").style.marginLeft = "200px";
        document.getElementById("ul_laboratorio").style.display = "block";
        accionUlAgentes = 1;
    } else {
        document.getElementById("ul_laboratorio").style.marginLeft = "-100%";
        document.getElementById("ul_laboratorio").style.display = "none";
        accionUlAgentes = 0;
    }

}
function crear_popup_transferencias() {

    fnGenerarMensaje("Favor de revisar", "Transferencia Bancaria", "CITIBANAMEX <br/> <br/> Nombre: LEVIC SA DE CV <br/> Clabe interbancaria: 002180027878437036 <br/> Cuenta: 2787843703 <br/> <br/> $ BBVA <br/> <br/> Nombre: LEVIC SA DE CV <br/> Clabe interbancaria: 012180001699315709 <br/> Cuenta: 0169931570", "error");

}
function limpiar_local_storage(cliente, clienteSinCeros) {

    if (localStorage.Pedido.split('//')[0].includes(cliente) || localStorage.Pedido.split('//')[0].includes(clienteSinCeros)) {

        localStorage.clear();
        //window.location = "/test/Default.aspx";
        //window.location = "/Default.aspx";
        document.getElementById("sp_numProductos").textContent = "0";
        document.getElementById("sp_totalCarrito").textContent = "Total $ 0.00";

        if (window.location.href.includes("frm_Carrito")) {
            //window.location = "/test/frm_Catalogo_Levic.aspx";
            window.location = "/frm_Catalogo_Levic.aspx";
        }

    }

}

// NUEVO DISEÑO ******************************************************************************************

function crear_detalle_producto(Codigo, Nombre, SustanciaActiva, IndiceTerapeutico, Laboratorio, PrecioLista, Descuento, PrecioUnitario, PrecioOferta, Oferta, Iva, CodigoBarras, clasificacion, Exist) {

    var jsonProductoDetalle = {
        codigo: Codigo,
        nombre: Nombre,
        sustanciaActiva: SustanciaActiva,
        indiceTerapeutico: IndiceTerapeutico,
        laboratorio: Laboratorio,
        precioLista: PrecioLista,
        descuento: Descuento,
        precioUnitario: PrecioUnitario,
        precioOferta: PrecioOferta,
        oferta: Oferta,
        iva: Iva,
        codigoBarras: CodigoBarras,
        imgClasificacion: clasificacion,
        existencia: Exist
    }

    var jsonProductosDetalle;

    if (localStorage.getItem("productosDetalleLevic") != null) {
        jsonProductosDetalle = JSON.parse(localStorage.getItem("productosDetalleLevic"));
    } else {
        jsonProductosDetalle = [];
    }

    var existe = false;

    for (var i = 0; i < jsonProductosDetalle.length; i++) {

        if (jsonProductosDetalle[i].codigo == jsonProductoDetalle.codigo) {

            //console.log(jsonProductosDetalle[i].nombre);
            jsonProductosDetalle.splice(i, 1);
            jsonProductosDetalle.push(jsonProductoDetalle);
            //console.log("Se borro: " + jsonProductosDetalle[i].codigo);
            existe = true;
            break;

        }

    }

    if (!existe) {
        jsonProductosDetalle.push(jsonProductoDetalle);
        //console.log("Se agrego: " + jsonProductosDetalle[i].codigo);
    }

    localStorage.setItem("productosDetalleLevic", JSON.stringify(jsonProductosDetalle));

    console.log(JSON.parse(localStorage.getItem("productosDetalleLevic")));

    //window.location = "/test/frm_ProductoDetalle.aspx?codigo=" + jsonProductoDetalle.codigo;
    window.location = "/frm_ProductoDetalle.aspx?codigo=" + jsonProductoDetalle.codigo;

}
function fnMostrarDetalleProducto(codigo) {

    var jsonProductosDetalle = JSON.parse(localStorage.getItem("productosDetalleLevic"));
    var jsonProducto;
    var existe = false;

    for (var i = 0; i < jsonProductosDetalle.length; i++) {

        if (jsonProductosDetalle[i].codigo == codigo) {

            jsonProducto = jsonProductosDetalle[i];
            existe = true;
            break;

        }

    }

    document.getElementById("lbl_laboratorio_producto_detalle").textContent = jsonProducto.laboratorio;
    $("#img_clasificacion_detalle").attr("src", jsonProducto.imgClasificacion);
    $("#img_producto_detalle").attr("id", "img_" + jsonProducto.codigo);
    $("#img_" + jsonProducto.codigo).attr("src", "https://visoti.mx/imagenes/Grande/" + jsonProducto.codigo + ".webp");

    document.getElementById("lbl_oferta_producto_detalle").textContent = "-" + jsonProducto.oferta;
    document.getElementById("lbl_codigo_producto_detalle").textContent = jsonProducto.codigo;

    document.getElementById("lbl_existencia_producto_detalle").textContent = parseFloat(jsonProducto.existencia).toLocaleString('es-MX') + " pzas";

    document.getElementById("lbl_nombre_producto_detalle").textContent = jsonProducto.nombre;
    document.getElementById("lbl_sustancia_producto_detalle").textContent = jsonProducto.sustanciaActiva;
    document.getElementById("lbl_indice_producto_detalle").textContent = jsonProducto.indiceTerapeutico;

    document.getElementById("lbl_preciolista_producto_detalle").textContent = jsonProducto.precioLista;
    document.getElementById("lbl_descuento_producto_detalle").textContent = jsonProducto.descuento;
    document.getElementById("lbl_preciounitario_producto_detalle").textContent = jsonProducto.precioUnitario;

    if (jsonProducto.precioUnitario != jsonProducto.precioOferta) {
        $("#lbl_preciounitario_producto_detalle").css("text-decoration", "line-through");
    }

    document.getElementById("lbl_subtotal_producto_detalle").textContent = "$" + jsonProducto.precioOferta;
    document.getElementById("lbl_iva_producto_detalle").textContent = jsonProducto.iva;
    document.getElementById("lbl_preciooferta_producto_detalle").textContent = jsonProducto.precioOferta;

    document.getElementById("lbl_codigobarras_producto_detalle").textContent = jsonProducto.codigoBarras;

    document.getElementById("btn_restar_cantidad_producti_detalle").onclick = function () {

        if (document.getElementById("txt_cantidad_producto_detalle").value == "") {
            document.getElementById("txt_cantidad_producto_detalle").value = "1";
        } else {
            if (parseInt(document.getElementById("txt_cantidad_producto_detalle").value) > 1) {
                document.getElementById("txt_cantidad_producto_detalle").value =
                    (parseInt(document.getElementById("txt_cantidad_producto_detalle").value) - 1);
            }
        }

        document.getElementById("lbl_subtotal_producto_detalle").textContent = "$" +
            parseFloat(parseInt(document.getElementById("txt_cantidad_producto_detalle").value)
                *
                parseFloat(jsonProducto.precioOferta.replace("$", ""))).toFixed(2);

    }

    document.getElementById("btn_sumar_cantidad_producti_detalle").onclick = function () {

        if (document.getElementById("txt_cantidad_producto_detalle").value == "") {
            document.getElementById("txt_cantidad_producto_detalle").value = "1";
        } else {
            if (parseInt(document.getElementById("txt_cantidad_producto_detalle").value) >= 1) {
                document.getElementById("txt_cantidad_producto_detalle").value =
                    (parseInt(document.getElementById("txt_cantidad_producto_detalle").value) + 1);
            }
        }

        document.getElementById("lbl_subtotal_producto_detalle").textContent = "$" +
            parseFloat(parseInt(document.getElementById("txt_cantidad_producto_detalle").value)
                *
                parseFloat(jsonProducto.precioOferta.replace("$", ""))).toFixed(2);

    }

    if (jsonProducto.oferta == "0%") {
        $(".cnt_oferta_producto_detalle").hide();
        $("#cnt_precio_oferta_producto_detalle").hide();
    }

    document.getElementById("btn_agregar_producto_detalle").onclick = function () {

        agregar_producto_sr(
            $("#Cliente")[0].value,
            jsonProducto.codigo,
            parseInt(document.getElementById("txt_cantidad_producto_detalle").value),
            parseFloat(jsonProducto.precioOferta.replace("$", "")).toFixed(2),
            parseFloat(jsonProducto.iva.replace("%", "")).toFixed(2),
            ""
        );

    }

    localStorage.removeItem("productosDetalleLevic");

}