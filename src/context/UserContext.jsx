import { useState, createContext, useContext } from "react";

// context -> exposing the state

const UserContext = createContext()

// custom hook
export const useUser = () => {
    return useContext(UserContext);
}

// provider -> managing state
const UserProvider = (props) => {

    const [user, setUser] = useState(null);
    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;