import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    //products to be render on UI
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 15;

    useEffect(() => {
        fetch(`https://blooming-anchorage-25739.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)

            })

    }, [page])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = []

            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);

                }
            }
            setCart(storedCart)
        }

    }, [])


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];


        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage for now 
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);

    }
    return (
        <div>
            <div className='search-container'>
                <input type="text"
                    onChange={handleSearch}
                    placeholder='search product' />

            </div>


            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}>

                        </Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </div>

                <div >
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn-regular'>Review Your Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;