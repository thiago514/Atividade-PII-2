const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')

//routes
const despesasRoutes = require('./routes/despesasRouter')

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

//Middlewares para transformar formulario em JSON
app.use(
    express.urlencoded({
        extended : true
    })
)
app.use(express.json())


// app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded()); 


//definicao da pasta estatica
app.use(express.static('public'))

//Chama as rotas
app.use('/despesas', despesasRoutes)

//roda o servidor se conseguir conectar ao bd
conn.sync()
    .then(()=> {
        app.listen(3000)
    }).catch((err) => console.log(err))
