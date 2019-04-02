(function () {
    $(document).ready(function () {

        $("#titulo").fadeToggle(2500);
        $("#descripcion").slideToggle(1000);
        $("#conBanners").hover(
            function () {
                $(".flechas-carrusel").css('display', 'block');
            },
            function () {
                $(".flechas-carrusel").css('display', 'none');
            }
        );
        $(".ingresar").click(function () {
            $("#conBanners").slideUp(1000);
            $(".contenedor-formularios").slideDown(1000);
            $("#login").delay('750').fadeIn();
        });
        $(".ocultarLogin").click(function () {
            $("#conBanners").slideDown(1000);
            $(".contenedor-formularios").slideUp(1000);
            $("#login").delay('750').fadeOut();
        });
        $("#regreso").click(function () {
            $("html, body").stop().animate({ scrollTop: 0 }, '1000');
        });
        $("#enviar").click(function(event){            
            if($("#codigo").val() === "" || $("#password").val() === ""){
                event.preventDefault();
                alert("Alguno de los campos esta vacio");
            }
        });      
    });//Fin de la funcion principal de jquery
}());