import './ScoreCounter.css';

const scoreCounter = ({ userScores }) => {

    let scoresJSX;
    if (userScores['user1']) {
        scoresJSX = (
            <>
                <div>Captures</div>
                <div className="hr"> </div>
                <div className="score-name">
                    <div>{userScores['user1'].userName}:</div>
                    <div>{userScores['user1'].score}</div>
                </div>
                <div className="score-name">
                    <div>{userScores['user2'].userName}:</div>
                    <div>{userScores['user2'].score}</div>
                </div>
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