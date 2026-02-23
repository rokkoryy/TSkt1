export default class Visa {
    private _country: string;
    private _isValid: boolean;
    private _year: number;

    constructor() {
        const countries = ["Арстоцка", "Колечия", "Орбистан"];
        this._country = countries[Math.floor(Math.random() * countries.length)];
        this._isValid = Math.random() < 0.5;
        this._year = Math.floor(Math.random() * (2050 - 2000) + 2000);

    }

    get country(): string {
        return this._country;
    }

    get isValid(): boolean {
        return this._isValid;
    }

    get year(): number {
        return this._year;
    }

    showInfo(): void {
        console.log(`Страна: ${this._country}`);
        console.log(`Валидность: ${this._isValid}`);
        console.log(`Год выдачи: ${this._year}`);
    }
}
