export function lcoE3(
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
            return a0 * b1 - a2 * b4 + a3 * b6 - a5 * b7;
        }
        case 2: {
            return a0 * b2 + a1 * b4 - a3 * b5 - a6 * b7;
        }
        case 3: {
            return a0 * b3 - a1 * b6 + a2 * b5 - a4 * b7;
        }
        case 4: {
            return a0 * b4 + a3 * b7;
        }
        case 5: {
            return a0 * b5 + a1 * b7;
        }
        case 6: {
            return a0 * b6 + a2 * b7;
        }
        case 7: {
            return a0 * b7;
        }
    }
}
