// API (Application Programming Interface)
// Definicion: conjunto de reglas y protocolos que permiten comunicarnos entre distintas aplicaciones web. 

// - Manejo de APIs 

// - APIs REST (HTTP + URLs + JSON)

// - Metodos HTTP
// 1. GET (Solicitar datos)
// 2. POST (Enviar datos o crear datos)
// 3. PUT (Actualizar un recurso)
// 4. DELETE (Eliminar un resurso)

// - Codigos de respuesta HTTP
// - 200 OK (Exito)
// - 201 OK + Aviso info
// - 400 Error del lado cliente (yo)
// - 404 No encontrado
// - 500 Error del lado servidor

// Consumir una API 

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Transforma la respuesta a JSON.
        return response.json()
    })
    .then(data =>{
        // Procesa y muestra los datos.
        console.log(data)
    })
    .catch(error => {
        // Captura de errores si falla la peticion. 
        console.log("Error", error)
    })


// Uso de Async/Await
async function getPosts() {

    try { 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json()

    console.log(data)

    } catch (error) {
        console.log("Error", error)
    }
}

getPosts()

// Solicitud POST 

async function createPost() {

    try { 

        const newPost = {
            userId: 1,
            title: "Este es el titulo de mi post",
            body: "Este es el cuerpo de mi post"
        }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })

    const data = await response.json()
    console.log(data)

    } catch (error) {
        console.log("Error", error)
    }
}

createPost()


// ----- Herramientas -----
// POSTMAN
// THUNDER CLIENT (extension de VSC)
// APIDOG (Servicio de documentacion de API)

// Manejo de errores

fetch("https://jsonplaceholder.typicode.com/noexisteestaRuta")
    .then(response => {
        if (!response.ok) {
            throw Error(`Status Error HTTP: ${response.status}`)
        }
        return response.json()
    })
    
    .catch(error => {
        // Captura de errores si falla la peticion. 
        console.log("Error", error)
    })


// Metodos HTTP adicionales 
// - PATCH (ACTUALIZAR PARCIALMENTE UN RECURSO)
// - OPTIONS (QUE METODOS HTTPS ESTAN DISPONIBLES PARA EL RECURSO)

// Autenticacion mediante API Key



async function getWeather(city) {
    
    const apiKeyOpenWheater = "3583908baea138f39a1c8f9c7198b9ea" // Mi API key Personal
    const url = `https://api.openweathermap.org/data/4.0/onecall/current?q=${city}&appid=${apiKeyOpenWheater}`

    try { 

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    } catch (error) {
        console.log("Error", error)
    }

}

getWeather("Madrid")


// Otros metodos de autenticacion y autorizacion
// - Bearer Tokens
// - JWT (Jason Web Tokens) - encriptado y mas seguro


// --- Versionado de APIs ---
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras APIs
// PokeAPI -> GRATUITA para practicar 