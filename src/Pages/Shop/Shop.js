import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../LocalDB/localDB';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [category, setCategory] = useState('');
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="text-center my-3">
                        <button className="btn btn-light" onClick={() => setCategory('all')}>All</button>
                        <button className="btn btn-light mx-2" onClick={() => setCategory('shoes')}>Sneaker</button>
                        <button className="btn btn-light" onClick={() => setCategory('pants')}>Pants</button>
                        <button className="btn btn-light mx-2" onClick={() => setCategory('boot')}>Boots</button>
                        <button className="btn btn-light" onClick={() => setCategory('t-shirt')}>T-shirt</button>
                        <button className="btn btn-light mx-2" onClick={() => setCategory('bag')}>Bags</button>
                        <button className="btn btn-light" onClick={() => setCategory('cap')}>Caps</button>
                        <button className="btn btn-light mx-2" onClick={() => setCategory('earphones')}>Earphones</button>
                        <button className="btn btn-light" onClick={() => setCategory('bottle')}>Bottle</button>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            category === "" && products.map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "all" && products.map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "shoes" && products.slice(0, 10).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "pants" && products.slice(10, 20).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "boot" && products.slice(20, 30).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "t-shirt" && products.slice(30, 40).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "bag" && products.slice(40, 50).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "cap" && products.slice(50, 60).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "earphones" && products.slice(60, 66).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                        {
                            category === "bottle" && products.slice(66, 76).map((product) => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}></Product>)
                        }
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="cart-container">
                        <Cart cart={cart} setCart={setCart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;