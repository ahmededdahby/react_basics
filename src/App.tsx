
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";
import { ExpandableText, ImmerExample, Nested } from "./components/ManagingComponentState";
import { ObjetArray } from "./components/ManagingComponentState";
import Form from "./components/Forms-part/Form";
import ReactForms from "./components/Forms-part/ReactForms";
import ExpenseList from "./expense-tracher-form/components/ExpenseList";
import ExpenseFilter from "./expense-tracher-form/components/ExpenseFilter";
import ExpenseForm from "./expense-tracher-form/components/ExpenseForm";
import Users from "./components/Using_API/users";

//mention categories in the head cause in real apps it brings the data frm api


function App() {
  const [alert, setAlert] = useState(false)

  var items = ["oujda", "taza", "fes", "casa", "berkan"];
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

//expense List
  const [expensesList, setExpenseList] = useState([
    { id: 1, description: "aaaaaaaa", amount: 50, category: "Utilities" },
    { id: 2, description: "bbbbbb", amount: 50, category: "Groceries" },
    { id: 3, description: "cccccccc", amount: 50, category: "Utilities" },
    { id: 4, description: "dddddddd", amount: 50, category: "Entertainement" },
    { id: 5, description: "dddddddd", amount: 50, category: "Entertainement" }
  ])
  const [selectedCategory, setSelectedCategory] = useState("")
  const List = selectedCategory ? expensesList.filter(exp => exp.category === selectedCategory) : expensesList;
  return (

    <div>
      {/* {alert && <Alert onClose={()=>setAlert(false)}>My Alert</Alert>}
      <Button onClick={()=>setAlert(true)} color="danger">My button</Button> */}

      {/* <ListGroup items={items} onSelectItems={handleSelectItem} heading="List"></ListGroup> */}

      {/* <Like onClick={()=>console.log('clicked')} /> */}
      {/* <ExpandableText max={100}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eveniet vitae culpa porro possimus odio perspiciatis nihil, voluptatem consectetur, natus quis consequatur unde repellat beatae. Delectus voluptatem repudiandae accusamus quidem!
      </ExpandableText> */}



      {/* <div className="mb-5">
        <ExpenseForm onSubmit={exp => setExpenseList([...expensesList, { ...exp, id: expensesList.length + 1 }])} />
      </div>

      <div className="py-4">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={List} onDelete={(id) => setExpenseList(expensesList.filter(expense => expense.id != id))} /> */}
     <Users />
    </div>
  )
}
export default App; 