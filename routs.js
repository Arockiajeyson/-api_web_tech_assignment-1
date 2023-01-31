const express =require('express')
const app =express()
const CollSche =require('./schemaCre')
const OrderSch =require('./SchemsOrder')
const inventorSch =require('./schemaIn')
app.get('/',async(req,res)=>{
    try {
        const findOrder =await OrderSch.find()
        const finddel =await inventorSch.find()
        const findcre =await CollSche.find()
        res.render("hello.ejs",{findOrder,findcre,finddel})
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/createCustomer',async(req,res)=>{
    try {
        const creatingOrder =await inventorSch.create(req.body)
        return res.json(creatingOrder)
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/createInventory',async(req,res)=>{

    try {
        const creatingOrder =await CollSche.create(req.body)
        return res.json(creatingOrder)
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/createOrders',async(req,res)=>{
    try {
        const {customer_id,inventory_id,item_name,quantity}=req.body
        const inv =await CollSche.findOne({item_name:item_name})
        const updaQ =inv.available_quantity-quantity
        const inv1 =await CollSche.updateOne({item_name:item_name},{available_quantity:updaQ})
        // console.log(inv1)
        req.body.inventory_id =inv._id
        const creatingOrder =await OrderSch.create(req.body)
        return res.json(creatingOrder)
    } catch (error) {
        return res.json(error.message)
    }
})
app.get('/orders',async(req,res)=>{
    try {
        const findOrder =await OrderSch.find()
        res.render("oder.ejs",{findOrder})
    } catch (error) {
        return res.json(error.message)
    }
})
app.get('/inventory',async(req,res)=>{
    try {
        const findOrder =await CollSche.find()
        res.render("view.ejs",{findOrder})
    } catch (error) {
        return res.json(error.message)
    }
})
app.get('/customerDetails',async(req,res)=>{
    try {
        const findOrder =await inventorSch.find()
        console.log(findOrder)
        res.render("custom.ejs",{findOrder})
    } catch (error) {
        return res.json(error.message)
    }
})
app.get('/inventory/inventoryType',async(req,res)=>{
    try {
        const findOrder =await OrderSch.find()
        return res.json(findOrder)
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports =app