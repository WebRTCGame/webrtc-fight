var Player = function Player(playerNum,playerLvl, settings) {
    this.maxLife = settings.maxLife || 100;
    this.currentLife = this.maxLife;
    this.maxTime = settings.maxTime || 10000;
    this.currentTime = this.maxTime;
    this.attack = settings.attack || {
        high: 10, 
        med: 10,
        low: 10
    };
    this.defense = settings.defense || 5;
    this.num = playerNum || 1;
    this.turnAttack = true;
    this.turnDefend = false;
    this.level = playerLvl || 1;
    this.accuracy = settings.accuracy || 50;
    this.rate = settings.rate || 1;
};
Player.prototype.canAttack = function canAttack() {};
Player.prototype.canDefend = function canDefend() {};
Player.prototype.damage = function damage(attackType, otherPlayer) {
    return (this.attack[attackType] * this.level) / (otherPlayer.defense * otherPlayer.level);
};
Player.prototype.update = function update() {};
Player.prototype.render = function render() {};
Player.prototype.createAveragePlayer = function createAveragePlayer(playerNum,playerLvl){
  return new Player(playerNum,playerLvl,playerAverage);  
};

var playerAverage = {
    maxLife: 100,
    maxTime: 10000,
    attack: {
        high: 10,
        med: 10,
        low: 10
    },
    defense: 5,
    accuracy: 50,
    rate: 1
};

