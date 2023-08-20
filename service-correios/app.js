import express from "express"
import {rastrearEncomendas} from "correios-brasil"

const app = express()

app.get("/track", (request, response) => {
    const { code } = request.query

    rastrearEncomendas([code]).then((result) => {
        response.status(200)
        response.send(result)
    }).catch((error) => {
        response.status(500)
        response.send(error)
    })
})

app.listen(3002, () => {
    console.log("Microsserviço iniciado na portal 3002")
})