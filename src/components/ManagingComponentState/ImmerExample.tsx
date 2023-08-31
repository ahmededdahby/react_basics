import React, { useState } from 'react'
import produce from 'immer'

const ImmerExample = () => {
    const [bugs, setBugs] = useState([
        { id: 0, title: 'Bug1', fixed: false },
        { id: 1, title: 'Bug2', fixed: false },
    ])
    const handleclick = (value : number) => {
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === value);
            if (bug) bug.fixed = !bug.fixed
        }))
    }
    return (
        <div>
            <ul>{bugs.map(bug => <><li key={bug.id}>{bug.title} : {bug.fixed ? 'fixed' : 'notfixed'}</li> <button onClick={() => handleclick(bug.id)}>{ bug.fixed ? 'unfix' : 'fix'}</button></>)}</ul>
        </div>
    )
}

export default ImmerExample
