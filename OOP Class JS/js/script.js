class Computer {
    constructor(title, price, color, storage, size, gamer , programming) {
        this.iTitle = title;
        this.iPrice = price;
        this.iColor = color;
        this.iStorage = storage;
        this.iSize = size;
        this.iGamer = gamer;
        this.iProgram = programming;
    }
}

const myComp = new Computer("Lenovo", 2500, "Blue", "512GB", 15.4, "NO", "YES");
console.log(myComp);

class Phone extends Computer {
    constructor(title, price, color, storage, size, gps) {
        super(title, price, color, storage, size);
        this.iGps = gps;
    }

    callNumbers(num) {
        if (num == 1) {
            return `Nezrin is calling...`;
        } else if (num == 2) {
            return `Aysu is calling...`;
        } else if (num == 3) {
            return `Meryem is calling...`;
        } else if (num == 4) {
            return `Naile is calling...`;
        } else if (num == 5) {
            return `Minure is calling...`;
        } else if (num == 6) {
            return `Firuze is calling...`;
        } else if (num == 7) {
            return `Hasan is calling...`;
        } else {
            return `Number wasn't available!`;
        }
    }
}

const myPhone = new Phone("Samsung", 1000, "White", "128GB", 5.6, "YES");
console.log(myPhone);
console.log(myPhone.callNumbers(3));

class Tablet extends Phone {
    
}

const myTablet = new Tablet ("iPad", 1500, "Black", "128GB", 15.2, "NO")
console.log(myTablet);
console.log(myTablet.callNumbers(6));