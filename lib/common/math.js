"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box3 = exports.Vec3 = void 0;
class Vec3 {
    constructor(x = 0.0, y = 0.0, z = 0.0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
exports.Vec3 = Vec3;
class Box3 {
    constructor(min, max) {
        this.min = min || new Vec3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this.max = max || new Vec3(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
    }
    addBox(box) {
        this.min.x = Math.min(this.min.x, box.min.x);
        this.min.y = Math.min(this.min.y, box.min.y);
        this.min.z = Math.min(this.min.z, box.min.z);
        this.max.x = Math.max(this.max.x, box.max.x);
        this.max.y = Math.max(this.max.y, box.max.y);
        this.max.z = Math.max(this.max.z, box.max.z);
    }
    addPoint(point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.min.z = Math.min(this.min.z, point.z);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        this.max.z = Math.max(this.max.z, point.z);
    }
    get empty() {
        return this.min.x >= this.max.x || this.min.y >= this.max.y || this.min.z >= this.max.z;
    }
    getCenter() {
        return new Vec3(0.5 * (this.min.x + this.max.x), 0.5 * (this.min.y + this.max.y), 0.5 * (this.min.z + this.max.z));
    }
}
exports.Box3 = Box3;
