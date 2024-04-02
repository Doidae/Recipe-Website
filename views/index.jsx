const React = require('react');
const Default = require('./layouts/default');

function Index({ recipes }) {
    return (
        <Default>
            <h2>Index Page</h2>
            <ul>
                {recipes && recipes.map((recipe, index) => (
                    <li key={index}>
                        <a href={`/recipes/${recipe.id}`}>
                            {recipe.name}
                        </a>
                    </li>
                ))}
            </ul>
        </Default>
    );
}

//TODO: Check this page later

module.exports = Index;