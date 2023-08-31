//imagine we have another component where we call our user list , we will create a custom hppk to make the call of the users list reusable

import { useEffect, useState } from "react";
import userService, { User } from "../Using_API/services/userService";
import { CanceledError } from "axios";


const useUsers = () => {
    const [usersList, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        
        setLoading(true);
        const { result, cancel } = userService.GetAll<User[]>()
            result.then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        //finally is not working in dev mode because of the strict mode
        return () => cancel();
    }, []);
    return {usersList, setUsers,error,isLoading,setLoading,setError}
}
export default useUsers;