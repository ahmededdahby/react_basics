import React, { useState } from 'react'
//this ois used to show how to change values inside a nested array
function Nested() {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'john',
        }
    }
    )

        const handleClick = () => {
            setGame({ ...game, player: { ...game.player, name: 'roe' } })
        }
        return (
            <div>
                <h1>{game.player.name}</h1>
                <button onClick={handleClick}>change Name</button>
            </div>
        )
    }

    export default Nested
