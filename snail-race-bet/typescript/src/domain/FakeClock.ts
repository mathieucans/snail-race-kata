export class FakeClock {
    constructor(private number: number) {

    }

    setDate(number: number) {
        this.number = number;

    }

    now() {
        return this.number;
    }
}