import './ScoreCounter.css';

const scoreCounter = ({ userScores }) => {

    let scoresJSX;
    if (userScores['user1']) {
        scoresJSX = (
            <>
                <div>Current Game Score</div>
                <hr/>
                <div className="score-name">{userScores['user1'].userName}: {userScores['user1'].score} captures</div>
                <div className="score-name">{userScores['user2'].userName}: {userScores['user2'].score} captures</div>
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