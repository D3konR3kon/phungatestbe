module.exports = (app)=>{
    const router = require("express").Router()
    const controller = require('../controllers/products.controller')
    const con = require('../controllers/items.controller')

    router.get('/', con.getAll)
    router.get('/:id', controller.getOne)
    router.post('/', con.create)
    router.delete('/:id', controller.deleteAll)
    router.delete("/", controller.deleteAll)
    router.patch('/:id', controller.update)
    
app.use("/api/products/", router)
}