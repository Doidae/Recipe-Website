const React = require('react')
const Default = require('./layouts/default')

function New ({}) {
    return(
        <Default>
            <h2>Add A New Recipe</h2>
            <form action="/recipes">Name
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                    />
                    <br />
                <input type='submit'/>
            </form>
            <div>
                <a href='/recipes'><button>Return</button></a>
            </div>
        </Default>
    )
}

module.exports = New;