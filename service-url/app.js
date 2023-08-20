import express from "express"
import Kurzer from "kurzer-url"

const app = express();
const kurzer = new Kurzer()

app.get("/short", (request, response) => {
    const { url } = request.query

    kurzer.short(url).then((result) => {
        response.status(200)
        response.send(result)
    }).catch((error) => {
        response.status(500)
        response.send(error)
    })
})

app.listen(3001, () => {
    console.log("Microsserviço iniciado na porta 3001")
})