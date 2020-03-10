const express=require('express')
const router=express.Router()
const {authenticateUser} = require('../app/middlewares/authentication')

const categoriesController=require('../app/controllers/categoriesController')
router.get('/category', categoriesController.list)
router.post('/category',categoriesController.create)
router.get('/category/:id',categoriesController.show)
router.put('/category/:id',categoriesController.update)
router.delete('/category/:id',categoriesController.destroy)

const costumesController=require('../app/controllers/costumesController')
router.get('/costume',authenticateUser, costumesController.list)
router.post('/costume', authenticateUser, costumesController.create)
router.put('/costume/:id',authenticateUser, costumesController.update)
router.get('/costume/:id',authenticateUser, costumesController.show)
router.delete('/costume/:id',authenticateUser, costumesController.destroy)

// const usersController= require('../app/controllers/UserController')
// router.post('/register', usersController)
// router.post('/login', usersController)


module.exports=router