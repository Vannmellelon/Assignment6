const apiKey = process.env.REACT_API_KEY;

// helper code, creates header for api-requests
export const createHeaders = () => {
    return {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
    }
}