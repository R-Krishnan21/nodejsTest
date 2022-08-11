const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const User = require("./model/User")
const auth = require('./middleware/auth');

dotenv.config();

const app = express()

app.use(cors('*'))
app.use(express.json())

mongoose.connect(process.env.DB_CONNECT,
    ()=> {console.log("connect to db")}
);

app.get('/', async (req, res) =>  {
  res.send('Hello World')
})

app.post('/register', async (req, res) => {
    const user = new User(req.body)
    try {
        console.log("user save begin")
        user.save()
        console.log("user save end")
        //const token = await user.generateAuthToken()
        //console.log("token generated")
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.status(200).send()
    } catch (e) {
        res.status(500).send(e)
    }
})


app.listen(4000, () => {console.log("Server is running")})