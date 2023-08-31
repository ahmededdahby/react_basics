import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

interface LikeProp {
    onClick :  () => void;
}
const Like = ({ onClick }: LikeProp) => {
    const [Full, SetFull] = useState(true);
    const toggle = () => {
        SetFull(!Full);
        onClick();
    }
    if (Full) {
        return (
            <div>
                <AiFillHeart  color='#ff6b81' size ={20} onClick={toggle} />
            </div>
        )
    }
    return (
        <div>
                <AiOutlineHeart  color='#ff6b81' size ={20} onClick={toggle}/>
        </div>
    )

}

export default Like
