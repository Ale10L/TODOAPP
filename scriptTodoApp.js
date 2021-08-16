
var listaItems = ['Tomate', 'Lechuga'];
var lista = document.getElementById('lista');
var itemNombre = document.getElementById('itemNombre');
var botonAgregar = document.getElementById('btnAgregar');

botonAgregar.addEventListener('click', () => {
    agregarItem();
});

//  FUNCION PARA AGREGAR ITEMS A LA LISTA
const agregarItem = () => {
    let unItem = document.getElementById('itemNombre').value;
    listaItems.push(unItem);
    itemNombre.value = '';
    dibujarLista();
}

//  FUNCION PARA IMPRIMIR ITEMS Y BOTONES "EDITAR" Y "ELIMINAR"
const dibujarLista = () => {
    lista.innerHTML = '';

    //  RECORRE LA LISTA DE ITEMS PARA IMPRIMIR EN PANTALLA
    listaItems.forEach((nombre, index) => {
        let elementoLi = document.createElement('li');
        let spanLi = document.createElement('span');
        spanLi.innerText = nombre;
        //spanLi.classList.add("d-inline-block","w-50", "pt-3","fw-bold", "mx-5", MIOS:  'm-2', 'p-2', 'text-center');
        spanLi.classList.add('d-inline-block', 'w-50', "pt-3", 'fw-bold', 'mx-5');
        elementoLi.append(spanLi);
        //elementoLi.classList.add("d-inline-block", "w-75", "border", "border-1" ,"m-0");
        elementoLi.classList.add('d-inline-block', "w-75", "border", "border-1", "m-0", 'd-sm-flex');
        lista.append(elementoLi);

        //  BOTON EDITAR
        let btnEditar = document.createElement('Button');
        //let spanBtnEditar = document.createElement('span');
        //spanBtnEditar.innerText = "Editar";
        //btnEditar.append(spanBtnEditar);
        btnEditar.innerText = "Editar";
        btnEditar.classList.add('btn', 'btn-warning', 'm-2');
        btnEditar.addEventListener('click', () => {
            editarItem(index);
        });

        //  BOTON ELIMINAR
        let btnEliminar = document.createElement('Button');
        //let spanBtnEliminar = document.createElement('span');
        //spanBtnEliminar.innerText = "Eliminar";
        btnEliminar.innerText = "Eliminar";
        //btnEliminar.append(spanBtnEliminar);
        btnEliminar.classList.add('btn', 'btn-danger', 'm-2');
        btnEliminar.addEventListener('click', () => {
            eliminarItem(index);
        });
        elementoLi.append(btnEditar);
        elementoLi.append(btnEliminar);
        console.log(nombre + index);
    });
}

//  FUNCION PARA ELIMINAR ITEMS
function eliminarItem(index) {
    listaItems.splice(index, 1);
    dibujarLista();
}

//  FUNCION PARA EDITAR ITEMS
function editarItem(index) {
    var unItem = prompt('Ingrese el nuevo ítem', 'ej. Batata');
    if (unItem == "" || unItem == " " || unItem == null) {
        return;
    } else {
        listaItems[index] = unItem;
        dibujarLista();
    }
}

//  LLAMO AL METODO DIBUJAR LISTA PARA IMPRIMIR ITEMS EN PANTALLA
dibujarLista();