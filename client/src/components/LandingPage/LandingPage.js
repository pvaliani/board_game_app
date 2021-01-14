import './LandingPage.css';
import UserForm from '../UserForm/UserForm';
import { fetchAll } from '../../services/user-services';
import { useEffect, useState } from 'react';

const LandingPage = () => {
    const [allUsers, setAllUsers] = useState([]);
    const sortUsersByWins = users => {
        const len = users.length;
        for (let i = len-1; i>=0; i--){
          for(let j = 1; j<=i; j++){
              const userScorex = users[j-1].wins / users[j-1].losses || 0;
              const userScorej = users[j].wins / users[j].losses || 0;
            if(userScorex<userScorej){
                const temp = users[j-1];
                users[j-1] = users[j];
                users[j] = temp;
             }
          }
        }
        return users;
    };

    useEffect(() => {
        fetchAll()
            .then(users => {
                const sortedUsers = sortUsersByWins(users);
                setAllUsers(sortedUsers);
            });
    }, [])

    const usersJSX = allUsers.map((user, i) => {
        const userScore = user.wins / user.losses === Infinity ? user.wins : user.wins / user.losses || 0 ;
        return (
            <div key={user.userName} className={`user-row user-row${i % 2}`}>
                <div className="user-name">{user.userName}</div>
                <div className="user-score">🏆{user.wins}&nbsp;&nbsp; ☠️{user.losses} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score ({userScore.toFixed(2)})</div>
            </div>
        );
    })

    return (
        <main className="landing-container">
            <div className="scores-table-container">
                <h1>Scores Board</h1>
                <div className="scores-table">
                    {usersJSX}
                </div>
                <div className="player1-form">
                    <UserForm />
                </div>
            </div>
        </main>
    );
};

export default LandingPage;