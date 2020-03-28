import React from 'react'

function Child({childCallback , hello} ) {
    const [counter , setCounter] = React.useState(0)
    childCallback(counter)
    return (
        <div>
            count in child - {counter} {hello}
            <br/>
            <button onClick={() =>{setCounter(counter + 1)}}>Click Me</button>
        </div>
    )
}

export default Child
