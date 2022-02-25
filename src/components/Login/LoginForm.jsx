import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { useState, useEffect } from "react";
import { storageRead } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
 
// config for username, specifies
const usernameConfig = {
    required: true,
    minLength: 2,
}

const LoginForm = () => {

    // hooks
    // destructure from useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const {user, setUser} = useUser();
    const navigate = useNavigate();

    // local state
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    // side-effects
    // empty dependency [] -> only run once
    useEffect(() => {
        console.log("user", user);
        if (user !== null) {
            navigate("/profile");
        }
    }, [user, navigate]);

    const onSubmit = async ({username}) => {

        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error);
        }
        // store user in local storage
        if (userResponse !== null) {
            storageRead(STORAGE_KEY_USER, userResponse);
            setUser(userResponse);
        }
        setLoading(false);
    }

    // render func
    // wrapped and objectified -> invoke every time it renders
    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === "required") {
            return <span>Username is required!</span>;
        }
        if (errors.username.type === "minLength") {
            return <span>Username is too short!</span>;
        }
    })(); 

    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input 
                    type="text" 
                    placeholder="Anne" 
                    { ...register("username", usernameConfig) } />
                    
                    { errorMessage }
                    </fieldset>

                <button type="submit">Continue</button>

                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}
export default LoginForm;