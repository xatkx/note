
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