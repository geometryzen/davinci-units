import { GeometricCoords } from "./GeometricCoords";

export default function (m: GeometricCoords): boolean {
    return m.x === 0 && m.y === 0 && m.z === 0 && m.xy === 0 && m.yz === 0 && m.zx === 0 && m.b === 0;
}
