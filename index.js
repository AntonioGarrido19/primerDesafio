class ProductManager {
  constructor(nombre) {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    const existingProduct = this.products.find(
      (product) => product.code === code
    );
    if (existingProduct) {
      console.log(`Ya existe un producto con el código ${code}.`);
      return;
    }

    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id,
    };
    this.products.push(newProduct);
    console.log("Producto agregado correctamente.");
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log("Producto no encontrado.");
      return;
    }
    return product;
  }
}

const manager1 = new ProductManager();
manager1.getProducts();
manager1.addProduct(
  "producto prueba",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
manager1.addProduct(
  "producto prueba",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

console.log(manager1.getProducts());
console.log(manager1.getProductById(5));
