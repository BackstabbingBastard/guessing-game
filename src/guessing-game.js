class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = (this.max + this.min) / 2;
        this.mid = Math.round(this.mid);
        return this.mid;
    }

    lower() {
        // this.max = this.mid + 1;
        this.max = this.mid;

    }

    greater() {
        // this.min = this.mid - 1;
        this.min = this.mid;

    }
}

module.exports = GuessingGame;
