const express = require('express')
const recipes = express.Router()
const Recipe = require('../models/recipes.js')

//Index Page
recipes.get('/', (req, res) => {
    Recipe.find()
        .then(foundRecipe => {
            res.render('index', {
                recipe: foundRecipe
            })
        })
})

recipes.get('/new', (req, res) => {
    Recipe.find()
        .then(foundRecipe => {
            res.render('new', {
                recipes:foundRecipe
            })
        })
}) //TODO: DOUBLE CHECK THIS ROUTE LATER

recipes.delete('/:id', (req, res) => {
    // Recipe.findByIdAndDelete(req.params.id)
    //     .then(deletedRecipe =>{
    //         res.status(303).redirect('/recipes')
    // })
})

recipes.put('/:id', (req,res) =>{
    // Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
    //     .then(updateRecipe => {
    //         console.log(updateRecipe)
    //     })
})

//SHOW
recipes.get('/:id', (req, res) => {
    // Recipe.findById(req.params.id)
    //     .then(foundRecipe => {
    //         res.render('show', {
    //             recipe: foundRecipe
    //         })
    //     })
    //     .catch(err => {
    //         res.send('404')
    //     })
})

//CREATE
recipes.post('/', (req, res) =>{
    // if(!req.body.image) {
    //     req.body.image = undefined
    // }
    // Recipe.create(req.body)
    // res.redirect('/recipes')
})

module.exports = recipes