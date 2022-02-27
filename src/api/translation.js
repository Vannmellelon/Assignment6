import { createHeaders } from "./index";

const apiURL = process.env.REACT_APP_API_URL;

// update translations

// add translation
export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${apiURL}/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                username: user.username, // needed?
                translations: [...user.translations, translation]
            })
        })

        if (!response.ok) {
            throw new Error("Could not update the translations of user: ", user.username);
        }
        
        const result = await response.json();
        return [null, result];
    }
    catch (error) {
        return [error.message, null];
    }
}

// clear translations
export const translationClearHistory = (userId) => {

}