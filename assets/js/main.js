// NAV MOBILE
/* Variables: cámbialas por los id y clase correspondiente */
/* id del enlace que despliega el menú */
var callNav = "#nav-link";

/* id del menú que será desplegado */
var openNav = "#nav";

/* clase (sin el punto) que muestra el menú */
var viewNav = "nav-open";

/* declaramos las funciones */
function nav(){
	var call = document.querySelector(callNav);
	call.addEventListener("click", openNavegation, false);
}

function openNavegation(e){
	e.preventDefault();
	var open = document.querySelector(openNav);
	open.classList.toggle(viewNav);
}

/* Agregamos la clase js a la etiqueta html para saber que JS está funcionando */
document.querySelector("html").classList.add("js");

/* ejecutamos la función principal */
nav();

// SCROLL
// Decimos que dentro de nuestro html buscamos "a" (enlaces) y con el click a ellos hacemos una función
$("a:not(#nav-link)").on('click', function(event) {
  // El hash es el contenido de una url que parte desde el signo de numero(#)
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
    // Animamos el scroll dentro del html y body
		$('html, body').animate({
			scrollTop: $(hash).offset().top
      // 800 es la velocidad
		}, 800, function(){
      // La ventana 'localizará' el hash, o sea, la ruta del enlace
			window.location.hash = hash;
		});
	}
});
