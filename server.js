import app from "./app"

const port = 3304
app.listen(port, ()=> {
    console.log(`Servidor Iniciado na Porta ${port}`)
    console.log(`http://localhost:${port}`)
})