const baseURL = 'http://localhost:5000/api/users/';

export const verifyUser = (userName) => {
    /* 
        Verifycation method posting the current user
        to the back end (where it will be decided whether
            to create new user or fetch an existing one)
    */
    return fetch(baseURL + 'verify-user', { 
        method: 'POST',
        body: JSON.stringify({ userName }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json()) // returning the result of the first promise (just the request) 
    .catch(console.error);
};
