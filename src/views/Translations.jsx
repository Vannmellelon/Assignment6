import { translationAdd } from "../api/translation";
import TranslationForm from "../components/Translations/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

// maybe(?) importere de siste x oversettelsene
// lage knapper/shortcuts? video 012

const Translations = () => {

    const {user, setUser} = useUser();

    const handleTranslateClick = async (input) => {
        console.log(input);
        // trim input ?

        // Translate
        // & Display images

        // Send HTTP req to save translation (text only)
        // Works, but can only add one at the time
        // bc local state does not get updated with the newest addition and it then gets overwritten (?)
        // user data only gets fetched from database on login
        const [error, updatedUser] = await translationAdd(user, input);
        if (error !== null) {
            return;
            // TODO, display error message(?)
        }

        // sync UI and server state
        storageSave(STORAGE_KEY_USER, updatedUser);
        // update context state
        setUser(updatedUser);

        console.log("Error ", error);
        console.log("Result ", updatedUser);
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