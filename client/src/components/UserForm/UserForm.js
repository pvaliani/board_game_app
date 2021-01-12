import './UserForm.css';
import Button from '../Button/Button';
import { useState } from 'react';
import { verifyUser } from '../../services/user-services';
import { useHistory } from 'react-router-dom';


const UserForm = () => {
    const [user, setUser] = useState('');
    const history = useHistory();
    const nameHandler = e => {
        setUser(e.target.value);
    };

    const onButtonPress = () => {
        verifyUser(user)
            .then(backEndUser => {
                history.push('/welcome', backEndUser);
            })
            .catch(console.error);
        
    }


    return (
        <div className="user-form">
            <div className="user-input">
                <input
                    type="text"
                    name="user-input"
                    placeholder="Player name"
                    value={user}
                    onChange={nameHandler}
                    required
                />
                <Button title="Confirm" onSubmit={onButtonPress} />
            </div>
        </div>
    );
};

export default UserForm;