import { formRender, printAllNote } from './function.js'
import { btn_Create } from './select.js'
(()=> {


    const initApp = () => {
        printAllNote()
        btn_Create.addEventListener('click', createHandle);
    }


    const createHandle = event => {
        formRender()
    }





    document.addEventListener('DOMContentLoaded', initApp)
})()