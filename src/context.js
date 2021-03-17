import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalIsOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.copyProducts();
  }

  copyProducts = () => {
    let copiedProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      copiedProducts = [...copiedProducts, singleItem];
    });
    this.setState(() => {
      return { products: copiedProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const indexOfProduct = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[indexOfProduct];
    let taxes = product.price * 0.14;
    product.inCart = true;
    product.count++;
    product.total = product.count * product.price + taxes;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.calcTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalIsOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalIsOpen: false };
    });
  };

  incrementCount = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find((item) => item.id === id);
    const indexOfProduct = tempCart.indexOf(selectedProduct);

    const product = tempCart[indexOfProduct];

    product.count++;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.calcTotals();
      }
    );
  };

  decrementCount = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find((item) => item.id === id);
    const indexOfProduct = tempCart.indexOf(selectedProduct);

    const product = tempCart[indexOfProduct];

    if (product.count !== 1) {
      product.count--;
      product.total = product.count * product.price;
    } else {
      return;
    }

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.calcTotals();
      }
    );
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const indexOfProduct = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[indexOfProduct];

    tempCart = tempCart.filter((item) => item.id !== id);
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.calcTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.copyProducts();
        this.calcTotals();
      }
    );
  };

  calcTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const totalBeforeTaxes = subTotal / 1.14;
    const taxes = parseFloat(totalBeforeTaxes * 0.14).toFixed(2);
    this.setState(() => {
      return {
        cartSubtotal: parseFloat(totalBeforeTaxes.toFixed(2)),
        cartTax: taxes,
        cartTotal: subTotal,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
