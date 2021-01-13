import './PlayerStats.css';

const playerStats = ({ playerStats }) => {
    let playerStatsJSX;
    if (playerStats && Object.keys(playerStats).length) {
        playerStatsJSX = (
            <>
                <div>{playerStats.user1.userName}: 🏆{playerStats.user1.wins}☠️{playerStats.user1.losses}</div>
                <div>{playerStats.user2.userName}: 🏆{playerStats.user2.wins}☠️{playerStats.user2.losses}</div>
            </>
        );
    }

    return (
        <div className="player-stats">
            {playerStatsJSX}
        </div>
    );
};

export default playerStats;