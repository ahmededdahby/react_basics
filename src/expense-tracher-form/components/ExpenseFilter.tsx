import React from 'react'
import Cateogories from "../Categories";


interface Props {
    onSelectCategory: (Category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="">All Categories</option>
            {Cateogories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
    )
}

export default ExpenseFilter
