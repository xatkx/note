import { createForm, printAllNote } from './function.js'
import { btn_Create } from './select.js'
(()=> {


    const initApp = () => {
        // llama la function del dir /js/function
        printAllNote()
        // crea un evet de escucha al boton de crear nueva nota cuando el documento carga
        btn_Create.addEventListener('click', createHandle);
    }

// maneja el boton de crear nueva nota
    const createHandle = event => {
        createForm() // llama la function del dir /js/function
    }


    // se activa al cargar el dom pd: es irrelevante ya que a la etiqueta script esta settiada para que se active al cargar el dom con  defer :u 
    document.addEventListener('DOMContentLoaded', initApp)
})()