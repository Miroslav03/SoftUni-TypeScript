"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const filtred = this.clothes.findIndex((object) => object.color === color);
        if (filtred === -1) {
            return false;
        }
        else {
            this.clothes = this.clothes.filter((obj, index) => index !== filtred);
            console.log(this.clothes);
            return true;
        }
    }
    getSmallestCloth() {
        const sortedBySmallest = this.clothes.sort((obj1, obj2) => obj1.size - obj2.size);
        return sortedBySmallest[0];
    }
    getCloth(color) {
        const found = this.clothes.find((obj) => obj.color === color);
        return found;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sortedBySmallest = this.clothes.sort((obj1, obj2) => obj1.size - obj2.size);
        const arrString = [];
        sortedBySmallest.forEach((obj) => {
            arrString.push(obj.toString());
        });
        return `${this.type} magazine contains:\n${arrString.join('\n')}`;
    }
}
exports.Magazine = Magazine;
