import Visa from "./1";
import BorderGuard from "./2";

function main(): void {
    const visas = [new Visa(), new Visa(), new Visa()];
    const guard = new BorderGuard();

    for (const visa of visas) {
        visa.showInfo();
        console.log(guard.checkVisa(visa));
        console.log();
    }
}

main();