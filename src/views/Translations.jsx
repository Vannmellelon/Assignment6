import TranslationForm from "../components/Translations/TranslationForm";
import withAuth from "../hoc/withAuth";

const Translations = () => {
    return (
        <>
            <h1>Translations</h1>
            <section id="input-field">
                <TranslationForm />
            </section>
        </>
    )
}
export default withAuth(Translations);