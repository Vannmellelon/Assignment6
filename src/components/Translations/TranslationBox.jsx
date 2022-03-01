import TranslationHand from "./TranslationHand";

const TranslationBox = ({someUser}) => {
    
    //console.log("TranslationBox, someUser.translations: ", someUser.translations);
    let lastTranslation = someUser.translations[someUser.translations.length-1] || "";
    //console.log("TranslationBox, lastTranslation: ", lastTranslation);
    let absolutelyLast = lastTranslation.split("");
    //console.log("TranslationBox, absolutelyLast: ", absolutelyLast);

    let hands = absolutelyLast.map((letter, index) => <TranslationHand key={index} letter={letter} />);
    //console.log("TranslationBox, hands", hands);
    return (
        <section>
            <ul>
                {hands}
            </ul>
        </section>
    )
}
export default TranslationBox;