import './UserForm.css';
import Button from '../Button/Button';

const UserForm = () => {

    return (
        <div className="user-form">
            <div className="user-input">
                <input type="text" name="user1-input" placeholder="Player 1 name" />
                <Button title="Confirm"/>
            </div>
            <div className="user-input">
                <input type="text" name="user2-input" placeholder="Player 2 name"/>
                <Button title="Confirm"/>
            </div>
        </div>
    );
};

export default UserForm;