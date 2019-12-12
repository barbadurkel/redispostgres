const express = require('express');
const { Client } = require('pg');
const redis = require('redis');
const { SERVERPORT2, PSQLUSERNAME, PSQLPASSWORD, HOST, PSQLPORT, DBNAME, REDISPASSWORD } = require('./config.json');

const app = express()
const redisClient = redis.createClient();

let KEY = 'mydata';
const json = JSON.stringify({ name: "Rick" })

    redisClient.on('connect', () => {
        console.log('Connecté à la base de données Redis')
        console.log('Initiating insertion...')
        for (let i = 0; i < 25 ; i++) {
            redisClient.hset(KEY, 'field ' + i , json , (err, data) => {
                if (err) console.log(err);  
                else console.log('object ' + i + 1 +' insertion..' )
            })
        }

       

    })

    redisClient.on('error', (err) => {
        console.log(console.log(err))
        
    })

    redisClient.auth(REDISPASSWORD, () => {
        console.log('Authentifié à Redis')
    })




    app.listen(SERVERPORT2, () => console.log(`Listening on port ${SERVERPORT2}`));