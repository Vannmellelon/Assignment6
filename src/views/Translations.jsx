import { translationAdd } from "../api/translation";
import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

// maybe(?) importere de siste x oversettelsene
// lage knapper/shortcuts? video 012

const Translations = () => {

    const {user} = useUser();

    const handleTranslateClick = async (input) => {
        console.log(input);
        // trim input ?

        // Translate
        // & Display images

        // Send HTTP req to save translation (text only)
        // Works, but can only add one at the time
        // bc local state does not get updated with the newest addition and it then gets overwritten (?)
        // user data only gets fetched from database on login
        const [error, result] = await translationAdd(user, input);
        console.log("Error ", error);
        console.log("Result ", result);
        // yey!
    }

    return (
        <>
            <h1>Translations</h1>
            <section id="input-field">
                <TranslationForm onTranslate={handleTranslateClick} />
            </section>
        </>
    )
}
export default withAuth(Translations);