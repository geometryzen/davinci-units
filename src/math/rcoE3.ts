export function rcoE3(
    a0: number,
    a1: number,
    a2: number,
    a3: number,
    a4: number,
    a5: number,
    a6: number,
    a7: number,
    b0: number,
    b1: number,
    b2: number,
    b3: number,
    b4: number,
    b5: number,
    b6: number,
    b7: number,
    index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
): number {
    switch (index) {
        case 0: {
            return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7;
        }
        case 1: {
            return a1 * b0 + a4 * b2 - a6 * b3 - a7 * b5;
        }
        case 2: {
            return a2 * b0 - a4 * b1 + a5 * b3 - a7 * b6;
        }
        case 3: {
            return a3 * b0 - a5 * b2 + a6 * b1 - a7 * b4;
        }
        case 4: {
            return a4 * b0 + a7 * b3;
        }
        case 5: {
            return a5 * b0 + a7 * b1;
        }
        case 6: {
            return a6 * b0 + a7 * b2;
        }
        case 7: {
            return a7 * b0;
        }
        default: {
            throw new Error("index must be in the range [0..7]");
        }
    }
}
