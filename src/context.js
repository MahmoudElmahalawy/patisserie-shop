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
        console.log(this.state.cart);
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

  incrementCount = () => {
    console.log("increment fn");
  };

  decrementCount = () => {
    console.log("decrement fn");
  };

  removeItem = () => {
    console.log("remove fn");
  };

  clearCart = () => {
    console.log("clear cart");
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
