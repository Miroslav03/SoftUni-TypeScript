@withEmmploymentDate
@withDatePrototype
class Maneger {
    task: string = "Simple Task";
    project: string = "Simple Project";

    constructor() {
        console.log('Class has been initted!');
    }
};

const manager = new Maneger();


function withDatePrototype(value: Function, context: ClassDecoratorContext) {
    value.prototype.employmentDate = new Date().toISOString();
}

type Args = { new(...args: any[]): {} };

function withEmmploymentDate<T extends Args>(baseClass: T, context: ClassDecoratorContext) {
    return class extends baseClass {
        employmentDate = new Date().toISOString();

        constructor(...args: any[]) {
            super(...args);
        }
    }
}