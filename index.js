const  express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el Servidor
const app = express();

//Conectar a la Base de Datos
conectarDB();

//Habilitar CORS
app.use(cors());

//Habilitar Express.json
app.use(express.json({ extended: true}));

//Puerto de la App
const port = process.env.port || 5000;

//Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//Arracar la app
app.listen(port, '0.0.0.0',  () =>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
