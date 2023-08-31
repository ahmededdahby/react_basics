import   {CanceledError} from "./services/ApiClient";
import React, { useEffect, useState } from "react";
import userService,{User} from "./services/userService";
import useUsers from "../Hooks/useUsers";


const Users = () => {
    const { usersList,error,isLoading,setError,setUsers } = useUsers();
    const ondelete = (user: User) => {
        const originalUsers = [...usersList]
        setUsers(usersList.filter(u => u.id !== user.id))
        userService.Delete(user.id)
            .catch(err => {
                setError(err.message);
                setUsers(originalUsers);
            })
    }
    const addUser = () => {
        // a good practice is to update the UI interface first then update the server side 
        const newUser = { id: 0, name: "ahmed" }
        setUsers([newUser, ...usersList])

        const originalList = [...usersList]
        userService.Create(newUser)
            //then is used to update the id in the ui comming from the server
            .then(newuser => setUsers([newuser.data, ...usersList]))
            .catch((err) => {
                setError(err.message);
                setUsers(originalList);
            })
    }
    const onupdate = (user: User) => {
        const updatedUser = { ...user, name: user.name + "!" }
        setUsers(usersList.map(u => u.id === user.id ? updatedUser : u))
        const originalList = [...usersList]

        userService.update<User>(updatedUser)
            .catch((err) => {
                setError(err.message);
                setUsers(originalList);
            })


    }
    return (
        <div>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
            <ul className="list-group">
                {usersList.map((user) => (
                    <li className="list-group-item d-flex justify-content-between" key={user.id}>
                        {user.name}
                        <div>
                            <button className="btn btn-outline-danger" onClick={() => ondelete(user)}>Delete</button>
                            <button className="btn btn-outline-secondary" onClick={() => onupdate(user)}>Update</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
