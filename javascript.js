// Obtener todos los elemento <li>
const items = document.querySelectorAll("#miLista li");

//Recorrer los elementos del array y agregar el evento de clic
items.forEach(item => {
    item.addEventListener("click", () => {
        //Primero quitamos la clase 'seleccionado' de todos
        items.forEach(el => el.classList.remove("seleccionado"));

        //Luego se la apregamos al item clicado
        item.classList.add("seleccionado")
    });
})