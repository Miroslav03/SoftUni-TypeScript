class Person {
    @watchChanges
    accessor project: string = "Simple Project";
}

const person = new Person();
person.project = 'More complexed project!';

type Accessor<T, V> = {
    get: (this: T) => V;
    set: (this: T, value: V) => void;
}


function watchChanges<T, V>(
    accessor: Accessor<T, V>,
    context: ClassAccessorDecoratorContext
) {
    return {
        get: function (this: T) {
            return accessor.get.call(this);
        },
        set: function (this: T, value: V) {
            accessor.set.call(this, value);
        }
    }
}