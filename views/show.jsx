const React = require('react')
const Default = require('./layouts/default')

function Show ({recipe, index}) {
    return (
        <Default>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <li><a href="/recipes">Go home</a></li>
            <form action={`/recipes/${recipe.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <a href={`/recipes/${recipe.id}/edit`}><button>Edit</button></a>
        </Default>
    )
}

module.exports = Show