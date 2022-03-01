import { useEffect } from "react";
import { translationAdd } from "../api/translation";
import TranslationBox from "../components/Translations/TranslationBox";
import TranslationForm from "../components/Translations/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translations = () => {

    const {user, setUser} = useUser();

    const handleTranslateClick = async (input) => {
        console.log(input);
        // trim input ?

        // Translate
        // & Display images

        // Send HTTP req to save translation (text only)
        const [error, updatedUser] = await translationAdd(user, input);
        if (error !== null) {
            console.log("Error ", error);
            return;
        }

        // sync UI and server state
        storageSave(STORAGE_KEY_USER, updatedUser);
        // update context state
        setUser(updatedUser);
    }

    /*
    useEffect(() => {

    },[]);
    */

    return (
        <>
            <h1>Translations</h1>
            <section id="input-field">
                <TranslationForm onTranslate={handleTranslateClick} />
                <TranslationBox  someUser={user} />
            </section>
        </>
    )
}
export default withAuth(Translations);