import { getAllNote } from "./API.js";
import { content_form, content_note } from "./select.js";



export const formRender = () => {
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

    content_form.appendChild(content)
    document.querySelector('.main').classList.add('blur')
    content.addEventListener('submit', formhandle);

}

export const formhandle = event => {
    event.preventDefault()

    console.log('hola')
}


export const printAllNote = async () => {

    const allNote = await getAllNote();

    for (let i = 0; i < allNote.length; i++) {
        const nota = allNote[i];
        const element = renderNote(nota)
        
        content_note.appendChild(element)
    }
}

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
        <h2 class="noteTitle">${title}</h2>
    </div>
        <div class="Cardbody">
        <span class="msj">${mensaje}</span>
    </div>
    
`
 
    return nota
}