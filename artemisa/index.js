
const dbMadronos = require('./db/db');
const express = require('express');
const bodyP = require ('body-parser');
var cors = require('cors');


const app = express();
var routerM = express.Router();
var routerP = express.Router();

app.use('/Madrono',routerM);
app.use('/Pregunta', routerP);

routerM.route('/').get((req, res) => {
    dbMadronos.galleryArbustus().then(result => {
        res.json(result[0]);
    });
});

routerP.route('/').get((req, res) => {
    dbMadronos.Preguntas().then(result => {
        res.json(result[0]);
    });
});

app.use(bodyP.urlencoded({extended: true}));
app.use(bodyP.json());
app.use(cors());

var portconn = process.env.PORT || 3000;
app.listen(portconn);