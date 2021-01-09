import './UserForm.css';
import Button from '../Button/Button';
import { useState } from 'react';
import { verifyUser } from '../../services/user-services';


const UserForm = ({ onSetUsers }) => {
    const [user1, setUser1] = useState('');
    const [user2, setUser2] = useState('');

    const nameHandler = (e, userTitle) => {
        /*
            This function updates the state
            with regards to the user input. 
            We differentiate between user1 
            and user2 by using the argument
            userTitle. If userTitle === 'user1'
            then we update the state for the user1.
        */
        if (userTitle === 'user1') {
            setUser1(e.target.value);
        } else {
            setUser2(e.target.value);
        }
    };

    const onButtonPress = (buttonTitle) => {
        /*
            This function is triggered each
            time the user clicks on either submit button.
            It is responsible for sending the 
            user name back to the backend. 
            The backend sends back the user object {username, wins, losses}
            and then we set the state of the GameBox
        */
        if (user1 === user2) {
            // if user1 is the same as user2 then we get out of here
            // (not sending data to back-end)
            return
        }
        if (buttonTitle === 'user1') {
            // this will be run when the first "submit button" is pressed
            verifyUser(user1) 
                .then(backEndUser => onSetUsers(prevState => {
                    // Appending the current user (user1) to the previous
                    // state (not overwitting the existing state)
                    return { ...prevState, user1: backEndUser }
                }))
                .catch(console.error);
        } else { // is for user2
            verifyUser(user2)
                .then(backEndUser => onSetUsers(prevState => {
                    // Appending the current user (user2) to the previous
                    // state (not overwitting the existing state)
                    return { ...prevState, user2: backEndUser }
                }))
                .catch(console.error);
        }
    };

    return (
        <div className="user-form">
            <div className="user-input">
                <input
                    type="text"
                    name="user1-input"
                    placeholder="Player 1 name"
                    value={user1}
                    onChange={e => nameHandler(e, 'user1')}
                    required
                />
                <Button title="Confirm" onSubmit={() => onButtonPress('user1')} />
            </div>
            <div className="user-input">
                <input
                    type="text"
                    name="user2-input"
                    placeholder="Player 2 name"
                    value={user2}
                    onChange={e => nameHandler(e, 'user2')}
                    required
                />
                <Button title="Confirm" onSubmit={() => onButtonPress('user2')} />
            </div>
        </div>
    );
};

export default UserForm;