import './ScoreCounter.css';

const scoreCounter = ({ userScores }) => {
    console.log(userScores, 'ScoreCounter.js', 'line: ', '4');
    return (
        <div className="score-counter">
            <div>User1: {userScores['user1']}</div>
            <div>User2: {userScores['user2']}</div>
        </div>
    );
};

export default scoreCounter;