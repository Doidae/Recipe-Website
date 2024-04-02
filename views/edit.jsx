const React = require('react')
const Default = require('./layouts/default')
const { options } = require('../controllers/recipes.')

function Edit ({recipe}){
    return(
        <Default>
            <h2>Edit The Recipe</h2>
            <form action={`/breads/${recipes.id}?_method=PUT`} method='POST'>
                <input type="text" 
                name = "name"
                id = "name"
                required
                defaultValue = {recipe.name}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={recipe.image}
                />
                <br />
                <input type="submit"/>
            </form>
        </Default>
    )
}

module.exports = Edit;