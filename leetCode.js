const express = require('express')
const router = express.Router()
const { undead } = require('../models');

//Index
router.get('', async (req, res, next) => {
    try {
        const myUndead = await undead.find({});
        res.render('undead/index.ejs', {monsters: myUndead})
    } catch(err) {
        console.log(err);
        next();
    }
})

//New
router.get('/new', (req, res) => {
    res.render('undead/new.ejs')
})

//Delete Page
router.get('/delete/:id', async (req, res, next) => {
    try {
    let undeadID = req.params.id
    let myUndead = await undead.findById(undeadID)
    res.render('undead/delete.ejs', {monster: myUndead})
    } catch(err) {
        console.log(err)
        next()
    }
})

//Show page
router.get('/:id', async (req, res, next) => {
    try {
        const myUndead = await undead.findById(req.params.id)
        console.log(myUndead)
        res.render('undead/show.ejs', {monster: myUndead})
    } catch(err) {
        console.log(err)
        next();
    }
})

//Edit
router.get('/:id/edit', async (req, res, next) => {
    try {
    myUndead = await undead.findById(req.params.id)
    res.render('undead/edit.ejs', {monster: myUndead})
    } catch(err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
    let id = req.params.id
    let undeadEdit = req.body
    undeadEdit.attacks = undeadEdit.attacks.split(',').map(a => a.trim())
    console.log(undeadEdit)
    const myUndead = await undead.findByIdAndUpdate(id, undeadEdit, { new: true })
    console.log(myUndead)
    res.redirect('/undead')
    } catch(err) {
        console.log(err)
        next()
    }
})

//POST New
router.post('/', async (req, res, next) => {
    try {
    let newUndead = req.body
     newUndead.attacks = newUndead.attacks.split(',').map(a => a.trim())
    let myUndead = await undead.create(newUndead)
    console.log(myUndead)
    res.redirect('/undead')
    } catch(err) {
        console.log(err)
        next()
    }
})



//DELETE route

router.delete('/:id', async (req, res, next) => {
    try {
    let undeadID = req.params.id
    await undead.findByIdAndDelete(undeadID)
    res.redirect('/undead')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router