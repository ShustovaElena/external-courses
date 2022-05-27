class VacuumCleaner {
    constructor() {
        this.power = '220V';
        this.state = 'turnOf';
        this.cleaningMode = 'dry';
    }

    turnOn() {
        this.state = 'turnOn';
        console.log(this.state);
    }

    turnOf() {
        this.state = 'turnOf';
        console.log(this.state);
    }

    changeCleaningMode() {
        if (this.state === 'turnOf') {
            return;
        }
        if (this.cleaningMode === 'dry') {
            this.cleaningMode = 'wet';
        } else {
            this.cleaningMode = 'dry';
        }

        console.log(this.cleaningMode);
    }

    getInfo() {
        console.log('power', this.power);
        console.log('cleaningMode', this.cleaningMode);
    }
}

class RobotCleaner extends VacuumCleaner {
    constructor() {
        super();
        this.map = false;
    }

    scan() {
        if (this.state === 'turnOf') {
            return;
        }
        this.map = true;
        console.log(this.map);
    }

    getInfo() {
        console.log('power', this.power);
        console.log('cleaningMode', this.cleaningMode);
        console.log('isMap', this.map);
    }
}

class RobotSoldier extends RobotCleaner {
    constructor() {
        super();
        this.shoot = false;
    }

    shootOn() {
        if (this.state === 'turnOf') {
            return;
        }
        this.shoot = true;
        console.log(this.shoot);
    }

    shootOf() {
        if (this.state === 'turnOf') {
            return;
        }
        this.shoot = false;
        console.log(this.shoot);
    }

    getInfo() {
        console.log('power', this.power);
        console.log('isShoot', this.shoot);
        console.log('isMap', this.map);
    }

    getShootState() {
        console.log('isShoot', this.shoot);
    }
}

const robotSoldier = new RobotSoldier();
robotSoldier.turnOn();
