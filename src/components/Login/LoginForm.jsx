import { useForm } from "react-hook-form";

// config for username, specifies
const usernameConfig = {
    required: true,
    minLength: 2,
}

const LoginForm = () => {

    // destructure stuff from useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(errors);

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
            </form>
        </>
    )
}
export default LoginForm;