import { stringFromCoordinates } from "./stringFromCoordinates";
import { Unit } from "./Unit";

export function toStringCustom(coordinates: number[], uom: Unit, coordToString: (x: number) => string, basisLabels: string[]): string {
    const quantityString: string = stringFromCoordinates(coordinates, coordToString, basisLabels);
    if (uom) {
        // Hard-wired, but this function is not currently used.
        const unitString = uom.toString(["kg", "m", "s", "C", "K", "mol", "cd"]).trim();
        if (unitString) {
            return quantityString + " " + unitString;
        } else {
            return quantityString;
        }
    } else {
        return quantityString;
    }
}
