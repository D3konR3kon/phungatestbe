
const db = require("../models")
const Product = db.product


exports.getAll = (req, res)=>{
      
        Product.find()
            .then(data=>{
                res.send("Total:"+data.length + "\n" + data)
                console.log(data)
            })
            .catch(error=>{
                res.status(500).send("Could not find user", error)
                console.log("Could not find user", error)
            })
}


exports.create = async (
    req, res)=>{
        if(!req.body){
                res.status(400).send("Cannot add without info")
                return;
        }
        // let results;
        
        // await fetch('https://randomuser.me/api/')
        //         .then(res=>res.json())
        //         .then(data=>{
        //         console.log(results=data.results[0].email)})

        const product = new Product({
                itemname : req.body.itemname,
                image: req.body.image,
                description: req.body.description,
                price: req.body.price,
                type: req.body.type
        })
        
      try{
        product.save()
        .then(user=>{
            
            console.log(user)
            res.send(user)
        })
        return
      }catch (err){
                res.status(500).send('Could not create new user')
                console.log(`Some err occured : ${err.message}`)
      }
    }
           
        
//Clear all
exports.deleteAll = (req, res)=>{
      
    Product.deleteMany()
        .then(data=>{
            res.send(data)
            console.log(data)
        })
        .catch(error=>{
            res.status(500).send("Could not delete all products", error)
            console.log("Could not delete all ", error)
        })
}

//Delete a user
exports.deleteOne =  (req, res)=>{
    
    const id = req.params.id

    Product.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if(!data) {
                res.status(404).send({
                    msg: `Cannot delete Product with id=${id}. Maybe it was not exit`
                })
            } else res.status(201).send({ msg: "User was deleted successfully." })
        })
        .catch(err => {
            res.status(500).send({ msg: `Error deleting User with id=${id}, Error:  ${err}`})
        })

}

//Update a user
exports.update =  (req, res)=>{
    if(!req.body){
        res.status(400).send("Cannot update user")
        return;
    }
    const id = req.params.id

    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data) {
                res.status(404).send({
                    msg: `Cannot update User with id=${id}. Maybe it was not found`
                })
            } else res.status(201).send({ msg: "Hero was updated successfully." })
        })
        .catch(err => {
            res.status(500).send({ msg: `Error updating hero with id=${id} ${err}`})
        })

}
exports.getOne =  (req, res)=>{
    if(!req.body){
        res.status(400).send("Cannot get hero") 
    }
    const id = req.params.id

    Product.findById(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data) {
                res.status(404).send({
                    msg: `Cannot get User with id=${id}. Maybe it was not found`
                })
            } else res.status(201).send( data )
        })
        .catch(err => {
            res.status(500).send({ msg: `Error getting User with id=${id} ${err}`})
        })

}