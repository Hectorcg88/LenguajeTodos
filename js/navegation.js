/**
 * Con esta funcion aparece un mensaje en pantalla al darle al boton deseado para indicar que todo ha fincionado correctamente
 */

function hola(){
  swal("Gracias jefe!", "Te responderé en cuanto pueda", "success");
}

/**
 * Esta funcion indica al cliente que el objeto se ha añadido correctamente a la cesta
 */

function agregarCesta(){
  swal("Producto agregado", "Accede a la cesta para terminar la compra", "success");
}

/**
 * Declaración de constantes para hacer los menus
 */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/**
 * Funcion para desplegar el menu
 */
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

/**
 * Funcion para cerrar el menu
 */
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/**
 * Esta funcion muestra un mensaje en pantalla al darle a un boton
 */

function mostrarMensaje() {
  alert("Enhorabuena, has encontrado un descuento especial, con el codigo QWER-HFAS-IAFJ tendras un 10% de descuento en tu proxima compra");
}

/**
 * Esta funcion sirve para que al seleccionar el apartado se cambie al elegido
 * @param {*} contentId 
 */

function mostrarContenido(contentId) {
  const contents = document.getElementsByClassName('content');
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }

  const content = document.getElementById(contentId);
  content.classList.add('active');
  
}