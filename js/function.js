import { getAllNote, postNote } from "./API.js";
import { content_form, content_note, main, modalForm } from "./select.js";


 // render el formulario y lo muestra en la pag
const formRender = () => {
    const content = document.createElement('div');
    content.classList.add('modal-form')
    content.innerHTML = 
    `
    <form class="form" id="formulario">
        <legend>Notas</legend>
        <label for="title">
            <input class="formS" placeholder="Title" type="text" name="title" id="title">
        </label>
        <label>
            <textarea class="formS" cols="25" rows="10" name="mensaje" placeholder="Notas" id="msj"></textarea>
        </label>
        
        <label>
            <input class="formS" type="submit" value="Save">
        </label>
    </form>
    
    `

    document.body.appendChild(content)

}

export const createForm = () => {

    formRender()
    main.classList.add('blur')
    content.addEventListener('submit', formhandle);
}

// maneja el formulario para agregar notas nuevas
export const formhandle = async event => {
    event.preventDefault()

    // 

    const note = 
    {
        title: document.querySelector('#title').value,
        mensaje: document.querySelector('#msj').value
    }

    if(!validate(Object.values(note)))
    {
        console.log('todos los campos son necesarios')
        return
    }
    try {
        
        await postNote(note)
        event.target.parentElement.remove()
        main.classList.remove('blur')
        printAllNote()
    } catch (error) {
        console.log(error)
    }

}

// recorre una array de datos e imprime en  todos las notas
export const printAllNote = async () => {

    while(content_note.firstChild)
    {
        content_note.firstChild.remove()
    }

    const allNote = await getAllNote();

    for (let i = 0; i < allNote.length; i++) {
        const nota = allNote[i];
        const element = renderNote(nota)
        
        content_note.appendChild(element)
    }
}
 // devuelve una nota Html con los datos
const renderNote = dateNote => {

    const {title, mensaje} = dateNote;
    const nota = document.createElement('div');
    nota.classList.add('note')
    nota.innerHTML =
    `
    <div class="cardheader">
        <div class="handle">
            <a class="edit fa-solid fa-pen-to-square"></a>
            <a class="delete fa-solid fa-rectangle-xmark"></a>
        </div>
        <span class="noteTitle">${title}</span>
    </div>
        <div class="Cardbody">
        <span class="msj">${mensaje}</span>
    </div>
    
`
 
    return nota
}

// revisa si esta vaciao una array de string 
const validate = list => {
    for(let x = 0; x < list.length;x++)
    {
        if( list[x] !== '') continue
        return false
    }
    return true
}