import { useState, createContext, useContext } from "react";
import { STOORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

// context -> exposing the state

const UserContext = createContext()

// custom hook
export const useUser = () => {
    return useContext(UserContext);
}

// provider -> managing state
const UserProvider = (props) => {

    const [user, setUser] = useState(storageRead(STOORAGE_KEY_USER));
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