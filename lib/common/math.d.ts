export declare class Vec3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
}
export declare class Box3 {
    min: Vec3;
    max: Vec3;
    constructor(min?: Vec3, max?: Vec3);
    addBox(box: Box3): void;
    addPoint(point: Vec3): void;
    get empty(): boolean;
    getCenter(): Vec3;
}
//# sourceMappingURL=math.d.ts.map