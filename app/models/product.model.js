
 module.exports= mongoose=>{
    var schemaProduct = mongoose.Schema({
        itemname: {
                  type: String,
                  require: true
          },
        image:{
                  type: String,
                  require: true
          },
        description:{
                  type: String,
                  require: true
          },
        price:{
                type: Number,
                require: true
          },
          quantity:{
                type: Number,
                require: true,
                default: 1
          },
        type:{
                type: String,
                require: true
            },
        
              })
      
          schemaProduct.method("toJSON", function() {
                          const { __v, _id, ...object } = this.toObject();
                          object.id = _id;
                          return object;
                      });
  
  let Product = mongoose.model('Product',schemaProduct );
  return Product
  }