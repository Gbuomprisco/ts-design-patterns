# Abstract Factory

The Abstract Factory pattern is similar to the Factory, but a little more complex. In fact, an abstract factory is a super-factory, or a factory that creates other factories.

- Abstract Product - declares an interface for a type of product objects.
- We have two Abstract Products A# and B#
- An Abstract Factory declares an interface for creating a family of Products (Product A# and Product B#)
- A Concrete Factory implements operations to create Concrete Products A$ and B$.
- Concrete Product - defines a product to be created by the corresponding Concrete Factory; it implements the AbstractProduct interface.
- Client - uses the interfaces declared by the AbstractFactory and AbstractProduct classes.

Pseudo code:

```
AbstractProduct A {}
AbstractProduct B {}

A1 implements AbstractProduct A {}
A2 implements AbstractProduct A {}
B1 implements AbstractProduct B {}
B2 implements AbstractProduct B {}

abstract AbstractFactory {
    createProductA(): AbstractProduct;
    createProductB(): AbstractProduct;
}

ProductFactoryNumberOne implements AbstractFactory {
    createProductA = () => new A1();
    createProductB = () => new B1();
}

ProductFactoryNumberTwo implements AbstractFactory {
    createProductA = () => new A2();
    createProductB = () => new B2();
}

static ProductsFactory implements AbstractFactory {
    factory1 = new ProductFactoryNumberOne();
    factory2 = new ProductFactoryNumberTwo();

    static getFactory(type) {
        if (type == 1) {
            return factory1;
        } else if (type == 2) {
            return factory2;
        }
    }

    abstract createProductA = () => new A2();
    abstract createProductB = () => new B2();
}

Client {
    constructor() {
        productFactoryOne = ProductsFactory.getFactory(1);
        productFactoryTwo = ProductsFactory.getFactory(2);

        productA = productFactoryOne.createProductA();
        productB = productFactoryOne.createProductB();
    }
}

```
