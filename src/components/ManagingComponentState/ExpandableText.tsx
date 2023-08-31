import React, { Children, ReactNode, useState } from 'react'


interface Props{
    children: string,
    max : number
}
function ExpandableText({ children , max = 10}: Props) {
    const [isFullDisplay, setFullDisplay] = useState(false)
    const text = isFullDisplay  ? children.substring(0, max) + "..." : children 
    if(children.length < max) return <div>{children}</div>
    return (
        <p>{text}<button onClick={()=>setFullDisplay(!isFullDisplay)}>{isFullDisplay ? 'More' : 'Less' }</button></p>
    )
}

export default ExpandableText
