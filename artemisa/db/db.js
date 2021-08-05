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
        console.log(out.recordsets); 
    } catch (err){
        console.log(err);
    }
}

async function Preguntas() {
    try {
        let pool = await sql.connect(conn);
        let out = await pool.request().query("select value, descripcion,pregunta from preguntas cross apply string_split(respuesta, ';') where id = 1 AND tipo = 1");
        return out.recordsets; 
    } catch (err){
        console.log(err);
    }
}

async function searchComarostaphylis(filter) {
    try {
        let pool = await sql.connect(conn);
        let out = await pool.request().query('SELECT * FROM madronos_Comarostaphylis WHERE estado='+filter+' AND habito='+filter+' AND');
    } catch (err){
        console.log(err);
    }
}

module.exports = {
    galleryArbustus: galleryArbustus,
    galleryComarostaphylis: galleryComarostaphylis,
    Preguntas: Preguntas,
}
