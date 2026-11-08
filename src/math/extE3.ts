export function extE3(
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
            return a0 * b0;
        }
        case 1: {
            return a0 * b1 + a1 * b0;
        }
        case 2: {
            return a0 * b2 + a2 * b0;
        }
        case 3: {
            return a0 * b3 + a3 * b0;
        }
        case 4: {
            return a0 * b4 + a1 * b2 - a2 * b1 + a4 * b0;
        }
        case 5: {
            return a0 * b5 + a2 * b3 - a3 * b2 + a5 * b0;
        }
        case 6: {
            return a0 * b6 - a1 * b3 + a3 * b1 + a6 * b0;
        }
        case 7: {
            return a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0;
        }
    }
}
