import express from 'express'
import { login, isAuthenticated, logout} from './auth.js'

const routers = express.Router()

// Adicionado
routers.get('/', (req, res) => {
  res.json({ message: 'Client Auth API funcionando!' })
})

routers.post('/login', async (req, res) => {
    login(req, res)
})


routers.get('/is-authenticated', (req, res) => {
    isAuthenticated(req, res)
})

routers.get('/logout', (req, res) => {
    logout(req, res)
})


export default routers