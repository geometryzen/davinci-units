import Measure from './Measure';

interface ImmutableMeasure<T> extends Measure<T> {
    direction(): T;
}

export default ImmutableMeasure;
