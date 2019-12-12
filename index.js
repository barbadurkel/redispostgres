const express = require('express');
const { Client } = require('pg');
const redis = require('redis');
const { SERVERPORT, PSQLUSERNAME, PSQLPASSWORD, HOST, PSQLPORT, DBNAME, REDISPASSWORD } = require('./config.json');

    /* 
    
        Connect to PostgreSQL Database
        Modifier ./config.json en fonction de la configuration de postgresq 

    */  

const postgresClient = new Client({
    user: PSQLUSERNAME,
    password: PSQLPASSWORD,
    host: HOST,
    port: PSQLPORT,
    database: DBNAME
})


const app = express()

/*

app.get('/', (req, res) => 

    postgresClient.connect()
    .then( () => console.log("Connecté à la base de données Postgres"))
    //.then( () => client.query("insert into mytable(id, data) values (DEFAULT, '{ \"name\" : \"Sanchez\" }')"))
    .then( () => postgresClient.query("select * from mytable"))
    .then( results => res.send(results.rows))
    .catch( e => res.send(e))
    .finally( () => postgresClient.end())



); */




    /* 
    
        Connect to PostgreSQL Database
        Modifier ./config.json en fonction de la configuration de postgresq 

    */     
   
const redisClient = redis.createClient();

    redisClient.on('connect', () => {
        console.log('Connecté à la base de données Redis')
    })

    redisClient.on('error', (err) => {
        console.log(console.log(err))
        
    })

    redisClient.auth(REDISPASSWORD, () => {
        console.log('Authentifié à Redis')
    })

    app.get('/', (req, res) => {
        redisClient.hgetall('mydata', (err, data) => {
            if (err) console.log(err)
            else res.send(data)
        })

    })



    app.listen(SERVERPORT, () => console.log(`Listening on port ${SERVERPORT}`));