//ul contain application of using css , group modules,use index to simplify  importing in app.tx
//li contain application of using styled,

import { useState } from "react";
import styled from "styled-components"
import style from "./ListGroup.module.css"

//using styles css in js
//define the shap of the prop active we use interdace
//the goal is to select the clicked item
const ListItem = styled.li<ListItemProps>`
padding:5px;
background-color:${prop => prop.active ? 'blue' : 'white'}
`
interface ListItemProps{
    active : boolean;
}
interface ListProps {
    items: string[];
    heading: string;
    onSelectItems: (item: string) => void;
    
}
function ListGroup({ items, heading, onSelectItems  }: ListProps) {


    const [SelectedIndex, SetSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {/* true && 1 return 1 */}
            {items.length === 0 && <p>No item found</p>}
            <ul className={style.listGroup}>
                {items.map((item, index) => (
                    <ListItem key={index}
                        active = {index === SelectedIndex}
                        // className={
                        //     SelectedIndex === index ?
                        //         "listGroupItem active" :
                        //         "listGroupItem"}
                        onClick={() => { SetSelectedIndex(index); onSelectItems(item) }}>
                        {item}
                    </ListItem>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;
