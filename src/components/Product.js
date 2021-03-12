import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ProductCard } from './componentsStyles'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductCard className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container embed-responsive embed-responsive-16by9" onClick={() => {console.log('you clicked image container')}}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top embed-responsive-item"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart} onClick={() => {console.log('added to cart')}}>
                            {inCart ? <p className="mb-0" disabled>توجه للسلة لتحديد الكمية</p> : <svg className="w-6 h-6" width="36px" fill="none" stroke="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> }
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-bright mb-0">
                            {price}
                            <span className="ms-1">جنيه</span>
                        </h5>
                    </div>
                </div>
            </ProductCard>
        )
    }
}
