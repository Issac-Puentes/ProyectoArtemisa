const conn = require('../config/conn');
const sql = require('mssql');

async function galleryArbustus() {
    try {
        let pool = await sql.connect(conn);
        let out = await pool.request().query('SELECT * FROM madronos_Arbustus');
        return out.recordsets; 
    } catch (err){
        console.log(err);
    }
}

async function galleryComarostaphylis() {
    try {
        let pool = await sql.connect(conn);
        let out = await pool.request().query('SELECT * FROM madronos_Comarostaphylis');
        return out.recordsets; 
    } catch (err){
        console.log(err);
    }
}

async function Preguntas(N) {
    try {
        let pool = await sql.connect(conn);
        let out = await pool.request()
        .input('id',sql.Int, N)
        .query("select value, descripcion, pregunta from preguntas cross apply string_split(respuesta, ';') where id ="+N);
        return out.recordsets; 
    } catch (err){
        console.log(err);
    }
}

async function searchArbustus(filter) {
    try {
        let pool = await sql.connect(conn);
        let out = await pool.request()
        .input('filter',sql.VarChar, filter)
        .query('SELECT * FROM madronos_Arbustus WHERE '+filter);
    } catch (err){
        console.log(err);
    }
}

module.exports = {
    galleryArbustus: galleryArbustus,
    galleryComarostaphylis: galleryComarostaphylis,
    Preguntas: Preguntas,
}
