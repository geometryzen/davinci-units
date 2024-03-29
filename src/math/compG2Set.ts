import GeometricE2 from './GeometricE2';

export default function compG2Set(m: GeometricE2, index: number, value: number): void {
    switch (index) {
        case 0:
            m.a = value
            break
        case 1:
            m.x = value
            break
        case 2:
            m.y = value
            break
        case 3:
            m.b = value
            break
        default:
            throw new Error("index => " + index)
    }
}
