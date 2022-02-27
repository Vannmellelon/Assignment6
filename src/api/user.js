import { createHeaders } from "./index";

const apiURL = process.env.REACT_APP_API_URL;

// TODO refactor function names to user*

const userCheckFor = async (username) => {

    try {
        const response = await fetch(apiURL + "?username=" + username);
        if (!response.ok) {
            throw new Error("Could not find user.");
        }
        const data = await response.json();
        return [null, data];
    }
    catch (error) {
        return [error.message, []];
    }
}

const userCreate = async (username) => {
    // POST req
    try {
        const response = await fetch(apiURL, {
            method: "POST", // create a resource (new user)
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        });
        if (!response.ok) {
            throw new Error("Could not create user with username: " + username);
        }
        const data = await response.json();
        return [null, data];
    }
    catch (error) {
        return [error.message, []];
    }
}

export const loginUser = async (username) => {

    const [checkError, user] = await userCheckFor(username);
    
    // if checkError
    if (checkError !== null) {
        return [checkError, null];
    }
    
    // return the existing user, they are "logged in"
    if (user.length > 0) {
        return [null, user.pop()];
    }

    // user does not exist, create user
    return await userCreate(username);
}

export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiURL}/${userId}`);

        if (!response.ok) {
            throw new Error("Could not fetch user with ID: ", userId);
        }
        const user = await response.json();
        return [null, user];

    }
    catch (error) {
        return [error.message, null];
    }
}