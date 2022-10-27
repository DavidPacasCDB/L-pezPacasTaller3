function addProducto(){

var producto=document.getElementById('producto').value;


var numero=document.getElementById('numero').value;

var fecha=document.getElementById('fecha').value;

var cantidad=document.getElementById('cantidad').value;

var fecha2=document.getElementById('fecha2').value;

var valor;

valor = document.formulario.dato[document.formulario.dato.SelectedIndex].value;

sessionStorage.setItem(producto,valor,numero,fecha,cantidad,fecha2); //ó sessionStorage[producto]=precio

mostrarDatos(producto);

}

 

function mostrarDatos(){

var datosDisponibles=document.getElementById('datosDisponibles');

datosDisponibles.innerHTML='';

for(var i=0;i<sessionStorage.length;i++){



                var producto=sessionStorage.key(i);

                var precio=sessionStorage.getItem(producto);

                var numero=sessionStorage.getItem(numero);

                var fecha2=sessionStorage.getItem(valor);

                var cantidad=sessionStorage.getItem(cantidad);

                var fecha=sessionStorage.getItem(fecha);


                datosDisponibles.innerHTML += '<div>'+producto+  ' - '+numero+' - ' +valor+ ' - ' +cantidad+ ' - ' +fecha+ '</div>';

                }

}

 

function limpiarVista() {

var datosDisponibles=document.getElementById('datosDisponibles');

datosDisponibles.innerHTML='Limpiada vista. Los datos permanecen.';

}

 

function borrarTodo() {sessionStorage.clear(); mostrarDatos(); }