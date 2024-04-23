namespace Greeter {
    export interface Greeting<T> {
        introduction();
        sayGoodbye(name: T);
    }
}

export { Greeter };