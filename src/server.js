import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// Controllers
import UserController from './controllers/UserController'

const app = express()

app.use(bodyParser.json())

// DB setup
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-kxsvr.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

// User routes
app.get('/users', UserController.index)
app.get('/user/:id', UserController.show)
app.post('/user', UserController.store)
app.put('/user/:id', UserController.update)
app.delete('/user/:id/delete', UserController.delete)
app.post('/login', UserController.login)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Running on localhost:${PORT}`))
