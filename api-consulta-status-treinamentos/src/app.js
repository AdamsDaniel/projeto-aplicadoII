/**
 * @file Arquivo principal da API de consulta de status de treinamentos.
 * @author Omitted
 * @description Este arquivo configura o servidor Express, middlewares, rotas e inicia a aplicação.
 */

//Bibliotecas
const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const session = require('express-session')
const flash = require('connect-flash')
const db = require('./database')
const cors = require('cors')

//Modulos externos
const routes = require('./routes/routes')
const erro404 = require('./middlewares/404')
const routerColaborador = require('./routes/colaborador/colaboradorRoute')
const routerStatus = require('./routes/status/statusRoute')
const routerTreinamento = require('./routes/treinamentos/treinamentosRoute')
const routerTreinamentoColaborador = require('./routes/treinamento-colaborador/treinamentoColaboradorRoute')
const routerUsers = require('./routes/users/users')
const autenticationRoute = require('./routes/users/autentication')
const cookieParser = require('cookie-parser')
const downloadsRoute = require('./routes/downloads/downloads')
const exportRoute = require('./routes/export/exportRoute')

const app = express()

/**
 * Configuração do Dotenv para carregar variáveis de ambiente do arquivo .env.
 * @see {@link https://www.npmjs.com/package/dotenv}
 */
dotenv.config()

/**
 * Configuração do CORS (Cross-Origin Resource Sharing) para permitir requisições de origens específicas.
 * @see {@link https://www.npmjs.com/package/cors}
 */
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3031'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

/**
 * Configuração do express-session para gerenciamento de sessões.
 * @see {@link https://www.npmjs.com/package/express-session}
 */
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true
}));

/**
 * Utilização do connect-flash para mensagens flash (mensagens temporárias armazenadas na sessão).
 * @see {@link https://www.npmjs.com/package/connect-flash}
 */
app.use(flash());
app.use(cookieParser())

/**
 * Middleware para passar mensagens flash para as views (templates EJS).
 * @param {import('express').Request} req - O objeto de requisição.
 * @param {import('express').Response} res - O objeto de resposta.
 * @param {import('express').NextFunction} next - A próxima função de middleware.
 */
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

/**
 * Utilização do body-parser para analisar corpos de requisições JSON e URL-encoded.
 * @see {@link https://www.npmjs.com/package/body-parser}
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Configuração do EJS como view engine.
 * @see {@link https://www.npmjs.com/package/ejs}
 */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/**
 * Definição do diretório `public` para servir arquivos estáticos.
 */
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Definição das rotas da aplicação.
 */
app.use('/', routes)
app.use('/', routerColaborador)
app.use('/', routerStatus)
app.use('/', routerTreinamento)
app.use('/', routerTreinamentoColaborador)
app.use('/', routerUsers)
app.use('/', autenticationRoute)
app.use('/', downloadsRoute)
app.use('/', exportRoute)

//Middleware 404
app.use(erro404);

const PORT = Number(process.env.API_PORT)
app.listen(PORT, console.log('Servidor rodando!'))
