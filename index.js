let express    = require('express');        // Utilizaremos express, aqui lo mandamos llamar

let app        = express();                 // definimos la app usando express
let bodyParser = require('body-parser'); //

// configuramos la app para que use bodyParser(), esto nos dejara usar la informacion de los POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;        // seteamos el puerto

let router = express.Router();   //Creamos el router de express

// Seteamos la ruta principal
router.get('/', (req, res) => {
    res.json({ message: 'Hooolaa :)'});
});

// Le decimos a la aplicación que utilize las rutas que agregamos
app.use('/api', router);

// Iniciamos el servidor
app.listen(port);
console.log('Aplicación creada en el puerto: ' + port);