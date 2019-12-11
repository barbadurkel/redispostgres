const express = require('express');
const { Client } = require('pg');
const { SERVERPORT, USERNAME, PASSWORD, HOST, PSQLPORT, DBNAME } = require('./config.json');

    /* 
    
        Connect to PostgreSQL Database
        Modifier ./config.json en fonction de la configuration de postgresq 

    */  

const client = new Client({
    user: USERNAME,
    password: PASSWORD,
    host: HOST,
    port: PSQLPORT,
    database: DBNAME
})


const app = express()

app.get('/', (req, res) => 

    client.connect()
    .then( () => console.log("Connecté à la base de données"))
    //.then( () => client.query("insert into mytable(id, data) values (DEFAULT, '{ \"name\" : \"Sanchez\" }')"))
    .then( () => client.query("select * from mytable"))
    .then( results => res.send(results.rows))
    .catch( e => res.send(e))
    .finally( () => client.end())



);



// Connect to Redis Database

app.listen(SERVERPORT, () => console.log(`Listening on port ${SERVERPORT}`));