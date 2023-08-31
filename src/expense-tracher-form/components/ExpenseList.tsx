import React from 'react'

interface expense{
    id: number,
    description : string,
    amount: number,
    category : string
}
interface Props{
    expenses: expense[],
    onDelete: (id: number) => void;
}
const ExpenseList = ({ onDelete, expenses }: Props) => {
    if(expenses.length === 0) return <h1>rak khwitu azaml</h1>
    return (
        
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button onClick={()=>onDelete(expense.id)} className='btn btn-outline-danger'>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>${expenses.reduce((acc,expense)=> acc+=expense.amount,0).toFixed(2) }</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        
    )
}

export default ExpenseList
