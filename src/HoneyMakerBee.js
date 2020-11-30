var HoneyMakerBee = function() {
    Bee.call(this);
    this.age = 10;
    this.job = 'make honey';
    this.color = this.color;
    this.food = this.food;
    this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
    this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
    if (this.honeyPot > 0) {
        this.honeyPot -= 1;
    }
};