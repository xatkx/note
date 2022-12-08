
const Api = {
    url: 'http://127.0.0.1:9999/Notas'
}



export const getAllNote = async () => {
    try {

        return await (await fetch(`${Api.url}`)).json()
        
    } catch (error) {
        console.log(error)
    }
}

export const postNote = async nota => {
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