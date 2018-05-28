# Builder

As the complexity of an application increases, so does the complexity of classes and objects.
The builder pattern allows a client to construct a complex object by only specifying its type and content, without knowing the representation details of the object.

In this pattern, we have:

- a Product, which is the complex object being built
- an Abstract Builder class that specifies an interface for creating parts of a Product
- a Builder (or Concrete Builder), that gets a Product as a parameter and abstracts the construction of the final object from the product. It simply puts together parts of the Product. It's the Director's responsibility to actually build it.
- a Director, that takes the builder as a parameter, and constructs the Product using the builder. Will be used by the factory to create a new built Product.

Pseudo-Code:

```
class Product {
    setPropertyOne(property);
    setPropertyTwo(property);
}

abstract class ProductBuilder {
    abstract getProduct(): Product;
}

class ConcreteBuilder (product: Product) {
    setPropertyOne(property) {
        product.setPropertyOne(property);
    }

    setPropertyTwo(property) {
        product.setPropertyTwo(property);
    }

    buildComplexProductObject() {
        // impl details
    }
}

class Director (builder: Builder) {
    buildProduct(props) {
        builder.setPropertyOne(props.one);
        builder.setPropertyTwo(props.two);
        builder.buildComplexProduct();
    }

    getProduct(): Product {
        return builder.product;
    }
}

static class Factory {
    Factory {
        builder = new ConcreteBuilder(new Product());
        director = new Director(builder);
    }

    static getProduct(props): Product {
        director.buildProduct(props);
        return director.getProduct();
    }
}
```
