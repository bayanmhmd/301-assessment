'use strict'
require ('Dotenv'),config();
const express = require ('express');
const cors = require('cors');
const PORT = process.env.PORT;
const server = express();
server.use (cors());
server.get ('/',(request,response)) =>
{
    respone.status="(200),Home Page "
    respone.write (response.status)
}