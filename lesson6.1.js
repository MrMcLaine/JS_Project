//functional style

function Robot() {
    var self = this;

    self.job = 'Я Robot – я просто працюю';

    self.setBrandName = function (value) {
        self.job = value;
    }

    self.work = function () {
        return self.job;
    }
}

function CoffeeRobot() {
    Robot.call(this);

    var self = this;
    self.job = 'Я CoffeeRobot – я варю каву';
}

function RobotDancer() {
    Robot.call(this);

    var self = this;
    self.job = 'Я RobotDancer – я просто танцюю';
}

function RobotCooker() {
    Robot.call(this);

    var self = this;
    self.job = 'Я RobotCooker – я просто готую';
}

var robot = new Robot();
console.log(robot.work());

var coffeeRobot = new CoffeeRobot();
console.log(coffeeRobot.work());

var robotDancer = new RobotDancer();
console.log(robotDancer.work());

var robotCooker = new RobotCooker();
console.log(robotCooker.work());

var arrRobots = [robot, coffeeRobot, robotDancer, robotCooker];

for (var i = 0; i < arrRobots.length; i++) {
    console.log(arrRobots[i].work());
}


