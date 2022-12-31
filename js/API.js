
const Api = {
    url: 'http://127.0.0.1:9000/notas'
}


// trae los datos del server
export const getAllNote = async () => {
    try {

        return await (await fetch(`${Api.url}`)).json()
        
    } catch (error) {
        console.log(error)
    }
}
// envia los datos al server
export const postNote = async nota => {
    console.log(nota)
    const option = {
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota),
        method: 'POST'
    }

    try {
        console.log(JSON.stringify(nota))
        return await fetch(`${Api.url}`,option);

    } catch (err) { console.log(err)}
}

// borra los datos del server

export const deleteNote = async id => {

    const option = {
        method: 'DELETE'
    }
    try {
        return await ( await fetch(`${Api.url}/${id}`, option)).json()

    } catch (err) {console.log(err)}
}

// edita un dato especifico DEL server
export const putOneNote = async (nota,id) => {

    const option = {
        headers: { 'Content-Type': 'Application/json'},
        body: JSON.stringify(nota),
        method: 'PUT'
    }

    try {
        return await (await fetch(`${Api.url}/${id}`, option))
    } catch (error) {
        console.log(error)
    }
}
// trae un dato especifico del server

export const getOneNote = async id => {
    try {
        return await ( await fetch(`${Api.url}/${id}`)).json()
    } catch(err) {console.log(err)}
}