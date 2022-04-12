import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, category, ratings } = product;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title">{name}</h6>
                    <p class="card-text">{category}</p>
                    <h6 class="card-text">$ {price} ({ratings}/5)</h6>
                </div>

                <button className="btn btn btn-dark w-100" onClick={() => handleAddToCart(product)}>Add to cart</button>

            </div>
        </div>
    );
};

export default Product;