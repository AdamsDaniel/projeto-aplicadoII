/**
 * @file Arquivo principal do serviço de autenticação de cliente.
 * @author Omitted
 * @description Este arquivo configura o servidor Express, middlewares e rotas para o serviço de autenticação.
 */

import express from 'express';
import routers from './routers.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Adicinado
import cors from 'cors'

dotenv.config()

const app = express()

/**
 * Configuração do CORS para permitir requisições de origens específicas.
 * @see {@link https://www.npmjs.com/package/cors}
 */
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3030'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}))

/**
 * Utilização do cookie-parser para analisar cookies das requisições.
 * @see {@link https://www.npmjs.com/package/cookie-parser}
 */
app.use(cookieParser(process.env.SECRET_COOKIES))

/**
 * Utilização do body-parser para analisar corpos de requisições JSON e URL-encoded.
 * @see {@link https://www.npmjs.com/package/body-parser}
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Definição das rotas do serviço de autenticação.
 */
app.use('/', routers)


app.listen(process.env.API_PORT, console.log('Servidor rodando'))