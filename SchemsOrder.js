const mongoose =require('mongoose')

const mod =new mongoose.Schema({
    customer_id:{type:String},
    inventory_id:{type:mongoose.Types.ObjectId,ref:'Collec'},
    item_name:{type:String},
    quantity:{type:Number}
})
const colle =mongoose.model('Order',mod)

module.exports=colle