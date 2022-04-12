import React from 'react';
import { deleteShoppingCart } from '../LocalDB/localDB';
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className="cart bg-light text-center">
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            <button className="btn btn-danger w-100" onClick={handleClearCart}>Clear Order</button>
        </div>
    );
};

export default Cart;