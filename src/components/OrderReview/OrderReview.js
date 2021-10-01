import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, ssetCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        ssetCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                    >

                    </ReviewItem>)
                }


            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>

            </div>
        </div>
    );
};

export default OrderReview;