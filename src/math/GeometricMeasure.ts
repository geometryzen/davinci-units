import { Measure } from "./Measure";

export interface GeometricMeasure<T> extends Measure<T> {
    direction(): T;
    distanceTo(point: T): T;
    magnitude(): T;
}
