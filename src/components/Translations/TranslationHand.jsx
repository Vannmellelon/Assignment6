const TranslationHand = ({letter}) => {
    // Returns an image HTML tag with the hand matching the parameter "letter"
    console.log("TranslationHand, letter: ", letter);
    const imgPath = `LostInTranslation_Resources/individial_signs/${letter}.png`;
    return <li><img src={imgPath} alt={letter} /></li>;
}
export default TranslationHand;