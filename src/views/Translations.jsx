import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

// maybe(?) importere de siste x oversettelsene
// lage knapper/shortcuts? video 012

const Translations = () => {

    const {user} = useUser();

    const handleTranslateClick = (input) => {
        console.log(input);
        // Translate
        // Display images
        // Send HTTP req
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