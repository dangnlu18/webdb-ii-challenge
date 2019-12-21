const express = require('express')
const db = require('../utils/db')

const router = express.Router()

router.get('/', async (req, res, next)=>{
    try{
        res.json(await db("cars"))
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        res.json(await db("cars").where("id", req.params.id).first())
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next)=>{
    try{
        const payload ={
            make: req.body.make,
            model: req.body.model,
            vin: req.body.vin,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            status: req.body.status
        }
        const [id] = await db("cars").insert(payload)
        res.json(await db("cars").where("id", id).first())
    } catch(err){
        next(err)
    }
})

router.put('/:id', async (req, res, next)=>{
    try{
        const payload ={
            make: req.body.make,
            model: req.body.model,
            vin: req.body.vin,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            status: req.body.status
        }
        await db("cars").where("id", req.params.id).update(payload)
        res.json(await db("cars").where("id", req.params.id).first())
    } catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        await db("cars").where("id", req.params.id).del()
        res.status(204).end()
    } catch(err){
        next(err)
    }
})


module.exports = router;