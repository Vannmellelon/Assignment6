import { useForm } from "react-hook-form";


// config for input-field
const inputConfig = {
    required: true,
    maxLength: 40,
}
const TranslationForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    }= useForm();

    const onSubmit = (data) => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <fieldset>
                <label htmlFor="input-field">Text to translate: </label>
                <input 
                type="text"
                placeholder="Text to translate..."
                {...register("input-field", inputConfig)} />
            </fieldset>

            <button type="submit">Translate!</button>
        </form>
    )

}
export default TranslationForm;