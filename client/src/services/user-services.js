const baseURL = 'http://not-checkers.herokuapp.com/api/users/';

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

export const fetchAll = () => {
    return fetch(baseURL).then(res => res.json());
};

export const increaseWinOrLosses = (userName, type, updatedScore) => {
    /* 
        This function updates the back-end user object
        so as to either increase the wins or the losses
        of the user.
    */
    return fetch(baseURL + userName, { 
        method: 'PATCH',
        body: JSON.stringify({ [type]:  updatedScore}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json()) // returning the result of the first promise (just the request) 
    .catch(console.error);
};
