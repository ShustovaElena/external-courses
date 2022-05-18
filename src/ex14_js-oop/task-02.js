class HomeDevices {
    constructor(power, name) {
        this.power = power;
        this.state = false;
        this.name = name;
    }

    turnOn() {
        this.state = true;
        console.log(this.state);
    }

    turnOf() {
        this.state = false;
        console.log(this.state);
    }

    getPower() {
        return this.power;
    }

    getState() {
        return this.state;
    }

    getName() {
        return this.name;
    }

    getInfo() {
        console.log('name', this.name);
        console.log('power', this.power);
        console.log('state', this.state);
    }
}

class Microwave extends HomeDevices {
    constructor(...args) {
        super(...args);
        this.mode = 'cook';
    }

    changeMode() {
        if (!this.state) {
            return;
        }
        if (this.mode === 'cook') {
            this.mode = 'defrosting';
        } else {
            this.mode = 'cook';
        }

        console.log(this.mode);
    }
}

class Oven extends HomeDevices {
    constructor(...args) {
        super(...args);
        this.isLight = false;
    }

    turnOnLight() {
        if (!this.state) {
            return;
        }
        if (!this.isLight) {
            this.isLight = true;
        } else {
            this.isLight = false;
        }
    }
}

class Laptop extends HomeDevices {
    constructor(screen, programmName, ...args) {
        super(...args);
        this.screen = screen;
        this.programmName = programmName;
    }

    runProgramm() {
        console.log(`${this.programmName} is run`);
    }
}

class Room {
    constructor(devices) {
        this.devices = devices;
        this.allPower = 0;
    }

    calculatePower() {
        this.devices.forEach((item) => {
            if (item.getState()) {
                console.log(item.getPower());
                this.allPower += item.getPower();
            }
        });
        console.log(this.allPower);
    }

    searchDevice(searchQuery) {
        console.log(this.devices.filter((item) => item.getName() === searchQuery));
    }
}

const microwave = new Microwave(220, 'microwave');
const oven = new Oven(180, 'oven');
const laptop = new Laptop('18inch', 'Google Chrome', 220, 'laptop');
const devices = [microwave, oven, laptop];
const room = new Room(devices, 'oven');

microwave.turnOn();
laptop.turnOn();

room.calculatePower();
room.searchDevice('oven');
