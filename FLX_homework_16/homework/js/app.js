//Task 1
function assign(target, ...sources) {
    let result = Object(target);
    for (let i = 0; i < sources.length; i++) {
        for (const key in sources[i]) {
            if (sources[i].hasOwnProperty(key)) {
                result[key] = sources[i][key];
            }
        }
    }
    return result;
}

//Task 2
let Bot = function (obj) {
    this.name = obj.name;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
    this.defaultSpeed = obj.speed;
};
Bot.prototype.getName = function () {
    return this.name;
};
Bot.prototype.setName = function (name) {
    this.name = name;
};
Bot.prototype.getSpeed = function () {
    return this.speed;
};
Bot.prototype.setSpeed = function (speed) {
    this.speed = speed;
};
Bot.prototype.getDefaultSpeed = function () {
    return this.defaultSpeed;
};
Bot.prototype.getCoordinates = function () {
    return {x: this.x, y: this.y};
};
Bot.prototype.setCoordinates = function (coordinates) {
    this.x = coordinates.x;
    this.y = coordinates.y;
};
Bot.prototype.move = function (action) {
    switch (action) {
        case 'up':
            this.y += this.speedController(action);
            break;
        case 'down':
            this.y -= this.speedController(action);
            break;
        case 'right':
            this.x += this.speedController(action);
            break;
        case 'left':
            this.x -= this.speedController(action);
            break;
        default:
            console.log('Incorrect input data ');

    }
};
Bot.prototype.showPosition = function () {
    console.log(`i am ${this.constructor.name} ${this.name}. I am located at: ${this.x}:${this.y} `);
};
Bot.prototype.speedController = function () {
    return this.getSpeed();
};
let Racebot = function (obj) {
    Bot.call(this, obj);
    this.checkAction = [];
    this.counter = 0;
};
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
Racebot.prototype.speedController = function (action) {
    if (this.checkAction[this.checkAction.length - 1] === action) {
        return this.getSpeed() + ++this.counter;
    } else {
        this.checkAction.push(action);
        this.counter = 0;

        return this.getSpeed();
    }
};
let Speedbot = function (obj) {
    Bot.call(this, obj);
    this.isPrepareEngine = false;
};
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.speedController = function () {
    if (this.getSpeed() !== this.defaultSpeed) {
        this.setSpeed(this.getSpeed() - 1);
    }
    if (this.isPrepareEngine) {
        this.isPrepareEngine = false;
        this.setSpeed(this.getSpeed() + 2);
        return this.getSpeed();
    } else {
        return this.getSpeed();
    }
};
Speedbot.prototype.prepareEngine = function () {
    this.speedController();
    this.isPrepareEngine = true;
};

// //Task 1
// var defaults = {a: 123, b: 777};
// var options = {a: 456};
// var configs = assign({}, defaults, options); // {a: 456, b: 777}
//
// //Task 2
// let Botty = new Bot({name: 'Betty', speed: 2, x: 0, y: 1});
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
// Botty.move('left');
// Botty.move('down');
// Botty.move('up');
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.
//
// let Zoom = new Racebot({name: 'Lightning', speed: 2, x: 0, y: 1});
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
// Zoom.move('left');
// Zoom.move('down');
// Zoom.move('up');
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.
//
// let Broom = new Speedbot({name: 'Thunder', speed: 2, x: 0, y: 1});
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
// Broom.prepareEngine();
// Broom.move('left');
// Broom.move('down');
// Broom.move('up');
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.
