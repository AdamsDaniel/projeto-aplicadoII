import express from 'express';
import routers from './routers.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Adicinado
import cors from 'cors'

dotenv.config()

const app = express()

// Adicionadoo CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3030'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}))

app.use(cookieParser(process.env.SECRET_COOKIES))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', routers)


app.listen(process.env.API_PORT, console.log('Servidor rodando'))