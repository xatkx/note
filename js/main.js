import { deleteNote } from './API.js'
import { createForm, notificationRender, printAllNote, editHandle } from './function.js'
import { btn_Create, btn_menu, content_menu, content_note } from './select.js'
(()=> {


    const initApp = () => {
        // llama la function del dir /js/function
        printAllNote()
        // crea un evet de escucha al boton de crear nueva nota cuando el documento carga
        btn_Create.addEventListener('click', createHandle);
        content_note.addEventListener('click', noteHnalde);
        btn_menu.addEventListener('click', menuH)
    }

    const menuH = (event) => {
        
        if(!event) 
        {
            content_menu.classList.add('hidden')
            return
        }

        if(content_menu.classList.contains('hidden'))
        {
            content_menu.classList.remove('hidden')
        } else 
        {
            content_menu.classList.add('hidden')
        }
    }

    

// maneja el boton de crear nueva nota
    const createHandle = event => createForm() // llama la function del dir /js/function
    const noteHnalde = event => {
        const mybtn = event.target;
        const id = mybtn.parentElement.getAttribute('data-id')
        if(mybtn.classList.contains('edit'))
        {
            editHandle(id)
        }
        if(mybtn.classList.contains('delete') && confirm('Deseas borrar esta nota'))
        {

            deleteNote(id)
            printAllNote()
            notificationRender('eliminado','error')
        }

    }


    document.querySelector('.main').addEventListener('click', event => {
        menuH(false)
    })

    // se activa al cargar el dom pd: es irrelevante ya que a la etiqueta script esta settiada para que se active al cargar el dom con  defer :u 
    document.addEventListener('DOMContentLoaded', initApp)
})()