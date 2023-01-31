const mongoose =require('mongoose')

const mod =new mongoose.Schema({
    customer_id:{type:String},
    customer_name:{type:String},
    email:{type:String}
})
const colle =mongoose.model('Invent',mod)

module.exports=colle