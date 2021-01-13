import './ScoreCounter.css';

const scoreCounter = ({ userScores }) => {

    let scoresJSX;
    if (userScores['user1']) {
        scoresJSX = (
            <>
                <div>{userScores['user1'].userName}: {userScores['user1'].score}</div>
                <div>{userScores['user2'].userName}: {userScores['user2'].score}</div>
            </>
        );
    }

    return (
        <div className="score-counter">
            {scoresJSX}
        </div>
    );
};

export default scoreCounter;