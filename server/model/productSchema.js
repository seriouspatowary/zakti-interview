import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    
  
 
    name:{
        type:String,
        required:true,
       
    }, 
    quantity:{
        type:String,
        required:true,
    }, 
    price:{
        type:String,
        required:true,
    }, 

    
   

});


const product = mongoose.model('product', productSchema);

export default product;