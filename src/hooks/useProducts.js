import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://blooming-anchorage-25739.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);
    //return necessary things
    return [products, setProducts];
}

export default useProducts;