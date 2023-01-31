const mongoose =require('mongoose')

const mod =new mongoose.Schema({
    inventory_id:{type:String},
    inventory_type:{type:String},
    item_name:{type:String},
    available_quantity:{type:Number}
})
const colle =mongoose.model('Collec',mod)

module.exports=colle