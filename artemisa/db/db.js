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
        var array = [];
        let temp = filter.replace(/, /g,'°');
        let temp2 = temp.split(',');
        for(var i = 0; i<temp2.length; i++){
            let poi = temp2[i].replace(/°/g,', ')
            array.push(poi);
        }
        let pool = await sql.connect(conn);
        let out = await pool.request()
        .input('filter',sql.VarChar, filter)
        .query("select * from madronos_Arbustus where contains(estado,'"+array[0]+"') AND habito LIKE '%"+array[1]+"%' AND corteza_Alta LIKE '%"+array[2]+"%' AND corteza_Ramillas like '%"+array[3]+"%' AND peciolos LIKE '%"+array[4]+"%' AND hojas_Enves LIKE '%"+array[5]+"%' AND flores LIKE '%"+array[6]+"%'");
        return out.recordsets;
    } catch (err){
        console.log(err);
    }
}

module.exports = {
    galleryArbustus: galleryArbustus,
    galleryComarostaphylis: galleryComarostaphylis,
    Preguntas: Preguntas,
    searchArbustus:searchArbustus
}
