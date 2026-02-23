import Visa from "./1";

export default class BorderGuard {
    public checkVisa(visa: Visa): string {
        if (this.isHostileCountry(visa.country)) {
            return "[⛔] Враждебная страна";
        }

        if (!visa.isValid) {
            return "[🚨] ПОДДЕЛКА!";
        }

        if (this.isInvalidYear(visa.year)) {
            return "[🕑] Некорректный год выпуска";
        }

        return "[✅] Въезд разрешен";
    }

    private isHostileCountry(country: string): boolean {
        const allowedCountries = ["Арстоцка", "Орбистан"];
        return !allowedCountries.includes(country);
    }

    private isInvalidYear(year: number): boolean {
        const currentYear = 2026;
        const maxAge = 5;
        return year > currentYear || year < currentYear - maxAge;
    }
}
