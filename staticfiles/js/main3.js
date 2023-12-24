$(document).ready(function () {

    //var imgItems = $('.slider li').length; // Numero de Slides
    //var imgPos = 1;

    //// Agregando paginacion --
    //for(i = 1; i <= imgItems; i++){
    //       $('.pagination').append('<li></li>');
    //} 
    ////------------------------

    //$('.slider li').hide(); // Ocultanos todos los slides
    //$('.slider li:first').fadeIn(1300); // Mostramos el primer slide
    //   $('.pagination li:first').css({ 'background-color': 'var(--azulSecundario)' }); // Damos estilos al primer item de la paginacion

    //// Ejecutamos todas las funciones
    //$('.pagination li').click(pagination);
    //$('.right span').click(nextSlider);
    //$('.left span').click(prevSlider);


    //setInterval(function(){
    //	nextSlider();
    //}, 7000);

    //// FUNCIONES =========================================================

    //function pagination(){
    //	var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

    //	$('.slider li').hide(); // Ocultamos todos los slides
    //	$('.slider li:nth-child(' + paginationPos + ')').fadeIn(1300); // Mostramos el Slide seleccionado

    //	// Dandole estilos a la paginacion seleccionada
    //       $('.pagination li').css({ 'background-color': 'rgb(177, 179, 179)' });
    //       $(this).css({ 'background-color': 'var(--azulSecundario)' });

    //	imgPos = paginationPos;

    //}
    //function nextSlider(){
    //	if( imgPos >= imgItems){imgPos = 1;} 
    //	else {imgPos++;}

    //       $('.pagination li').css({ 'background-color': 'rgb(177, 179, 179)' });
    //       $('.pagination li:nth-child(' + imgPos + ')').css({ 'background-color': 'var(--azulSecundario)' });

    //	$('.slider li').hide(); // Ocultamos todos los slides
    //	$('.slider li:nth-child(' + imgPos + ')').fadeIn(1300); // Mostramos el Slide seleccionado

    //}
    //function prevSlider(){
    //	if( imgPos <= 1){imgPos = imgItems;} 
    //	else {imgPos--;}

    //       $('.pagination li').css({ 'background-color': 'rgb(177, 179, 179)'});
    //       $('.pagination li:nth-child(' + imgPos + ')').css({ 'background-color': 'var(--azulSecundario)' });

    //	$('.slider li').hide(); // Ocultamos todos los slides
    //	$('.slider li:nth-child(' + imgPos + ')').fadeIn(1300); // Mostramos el Slide seleccionado
    //}

    $('.slider li').hide();

});

var imgItems = 0; // Numero de Slides
var imgPos = 0;

function agregar_imagenes_slider(nombreImagen, enlace) {

    var liSlider = document.createElement("li");
    var btnSlider = document.createElement("a");
    var imgSlider = document.createElement("img");

    var urlImagen = "https://visoti.mx/imagenes/banners_levic/" + nombreImagen;

    if (enlace != "") {
        $(btnSlider).attr("href", enlace);
        $(btnSlider).attr("target", "_blank");
    }

    $(imgSlider).attr("src", urlImagen);
    if (enlace != "") {
        $(btnSlider).attr("cursor", "pointer");
    }

    btnSlider.appendChild(imgSlider);
    liSlider.appendChild(btnSlider);

    document.getElementById("ul_imagenes_banner").appendChild(liSlider);

    $('.slider li').hide();

    //animar_slider();

}

function agregar_imagenes_slider_pie(nombreImagen) {

    var cntImagen = document.createElement("div");
    var imgSlider = document.createElement("img");

    var urlImagen = "https://visoti.mx/imagenes/banners_levic/pie/" + nombreImagen;

    $(cntImagen).addClass("cnt_scroll_div_item");
    $(imgSlider).attr("src", urlImagen);

    cntImagen.appendChild(imgSlider);

    document.getElementById("cnt_banners_pie").appendChild(cntImagen);

}

function animar_slider() {

    imgItems = $('.slider li').length;

    $('.pagination').empty();

    // Agregando paginacion --
    for (i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li></li>');
    }

    $('.slider li').hide(); // Ocultanos todos los slides
    $('.slider li:first').fadeIn(1300); // Mostramos el primer slide
    $('.pagination li:first').css({ 'background-color': 'var(--azulSecundario)' }); // Damos estilos al primer item de la paginacion

    // Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    nextSlider();

    setInterval(function () {
        nextSlider();
    }, 7000);

}

// FUNCIONES =========================================================

function pagination() {

    var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

    $('.slider li').hide(); // Ocultamos todos los slides
    $('.slider li:nth-child(' + paginationPos + ')').fadeIn(1300); // Mostramos el Slide seleccionado

    // Dandole estilos a la paginacion seleccionada
    $('.pagination li').css({ 'background-color': 'rgb(177, 179, 179)' });
    $(this).css({ 'background-color': 'var(--azulSecundario)' });

    imgPos = paginationPos;

}
function nextSlider() {

    if (imgPos >= imgItems) { imgPos = 1; }
    else { imgPos++; }

    $('.pagination li').css({ 'background-color': 'rgb(177, 179, 179)' });
    $('.pagination li:nth-child(' + imgPos + ')').css({ 'background-color': 'var(--azulSecundario)' });

    $('.slider li').hide(); // Ocultamos todos los slides
    $('.slider li:nth-child(' + imgPos + ')').fadeIn(1300); // Mostramos el Slide seleccionado

}
function prevSlider() {
    if (imgPos <= 1) { imgPos = imgItems; }
    else { imgPos--; }

    $('.pagination li').css({ 'background-color': 'rgb(177, 179, 179)' });
    $('.pagination li:nth-child(' + imgPos + ')').css({ 'background-color': 'var(--azulSecundario)' });

    $('.slider li').hide(); // Ocultamos todos los slides
    $('.slider li:nth-child(' + imgPos + ')').fadeIn(1300); // Mostramos el Slide seleccionado
}