require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { checkSchema } = require('express-validator')
const configureDB = require('./config/db')
const userRegisterValidationSchema = require('./app/validations/user-register-validations')
const userLoginValidationSchema = require('./app/validations/user-login-validation')
const usersCltr = require('./app/controllers/users-cltr')
const authenticateUser = require('./app/middlewares/authenticateUser')

const app = express() 
const port = 3333 
configureDB()

app.use(express.json())
app.use(cors())


app.use(function(req, res, next){
    console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()}`)
    next()
})


app.post('/users/register', checkSchema(userRegisterValidationSchema), usersCltr.register)
app.post('/users/login', checkSchema(userLoginValidationSchema), usersCltr.login)

app.get('/users/account', authenticateUser, usersCltr.account)
app.get('/users/checkemail', usersCltr.checkEmail)




app.listen(port, () => {
    console.log('server running on port', port)
})

