import app from "./app"

const port = 3000
app.listen(port, ()=> {
    console.log(`Servidor Iniciado na Porta ${port}`)
    console.log(`http://localhost:${port}`)
})