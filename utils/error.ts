export const handleError = (message: string, err: Error) =>{
    console.log(`Error: `, message)
    console.error(err)
}

export default handleError
