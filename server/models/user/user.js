const User = function(userName, wins = 0, losses = 0) {
    this.userName = userName;
    this.wins = wins;
    this.losses = losses;
};

module.exports = User;