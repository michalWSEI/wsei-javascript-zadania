class Robot {
    constructor(name) {
        this.name = name;
        this.isFunctional = true
    }
}

const robot = new Robot('ieava');

robot.sayHi = function (fromPerson) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + fromPerson);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

robot.changeName = function (newName) {
    console.log("Robot " + this.name + " changes name to " + newName);
    this.name = newName;
};

robot.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

console.log(robot.name);
robot.changeName('edmundo');
robot.sayHi('Lina');
