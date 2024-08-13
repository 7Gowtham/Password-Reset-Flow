import express from 'express'
import userRoutes from './userLogin.js'


const routes = express.Router()

routes.get('/', (req, res)=>{
    res.status(200).send({
        message:"Hi, Welcome to password Reset Demo"
    })
})

routes.use('/user', userRoutes)

export default routes