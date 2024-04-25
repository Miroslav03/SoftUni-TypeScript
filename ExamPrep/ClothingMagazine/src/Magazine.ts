import { Cloth } from "./Cloth";

export class Magazine {

    private type: string;
    private capacity: number;
    private clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        const filtred = this.clothes.findIndex((object: Cloth) => object.color === color);

        if (filtred === -1) {
            return false;
        } else {
            this.clothes = this.clothes.filter((obj: Cloth, index: number) => index !== filtred)
            return true;
        }
    }

    getSmallestCloth(): Cloth {
        const sortedBySmallest: Cloth[] = this.clothes.sort((obj1: Cloth, obj2: Cloth) => obj1.size - obj2.size);
        return sortedBySmallest[0];
    }

    getCloth(color: string): Cloth {
        const found: Cloth = this.clothes.find((obj: Cloth) => obj.color === color);
        return found;
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        const sortedBySmallest: Cloth[] = this.clothes.sort((obj1: Cloth, obj2: Cloth) => obj1.size - obj2.size);

        const arrString: string[] = [];

        sortedBySmallest.forEach((obj: Cloth) => {
            arrString.push(obj.toString())
        });

        return `${this.type} magazine contains:\n${arrString.join('\n')}`;
    }
}