## Factory

When you have a set of common objects that the client uses (using the "new" keyword), you may want to use a Factory Pattern. The implementation of the products is hidden from the client, which will instead use a common interface.

- The client uses the factory to provide an object (or product) without knowing about their implementation, providing the information the factory needs.
- The new concrete product is created and returned to the client (internally using the new keyword) and casted to abstract product class.
