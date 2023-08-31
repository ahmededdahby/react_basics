import React, { FormEvent, useRef, useState } from "react";

//we handle the inputs value in a form using the state or the useref both examples are provided below
const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  const [personState, setPersonState] = useState({
    name: "",
    age: 0,
  });


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (nameRef.current !== null) person.name = nameRef.current.value;
    // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(personState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name :
        </label>
        <input
          // ref={nameRef}
          onChange={(event) =>
            setPersonState({ ...personState, name: event.target.value })
          }
          value={personState.name}
          id="Name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="form-label">
          Age :
        </label>
        <input
          // ref={ageRef}
          onChange={(event) =>
            setPersonState({
              ...personState,
              age: parseInt(event.target.value),
            })
          }
          type="number"
          id="Age"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
