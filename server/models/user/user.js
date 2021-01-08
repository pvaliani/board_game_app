const User = function(name, id, score = 0) {
    this.name = name;
    this.id = id;
    this.score = score;
};


module.exports = User;