import React, { useContext, useEffect } from "react";

import { ProductContext } from "../context/productContext";

const ProductList = () => {
    const {
        products,
        filteredProducts,
        category,
        handleSearch,
        handleCategoryChange,
        setProducts, // Destructure setProducts from the context
        setFilteredProducts, // Destructure setFilteredProducts from the context
    } = useContext(ProductContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                // Update products state using setProducts from the context
                setProducts(data);

                // Update filteredProducts state using setFilteredProducts from the context
                if (category === "all") {
                    setFilteredProducts(data);
                } else {
                    const filtered = data.filter(
                        (product) => product.category === category
                    );
                    setFilteredProducts(filtered);
                }
            });
    }, [category, setProducts, setFilteredProducts]); // Add setProducts and setFilteredProducts as dependencies

    return (
        <div className="container mx-auto mt-8">
            {/* <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={handleSearch}
                    className="border rounded px-4 py-2 w-64"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="border rounded px-4 py-2 ml-2"
                >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded p-4 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-32 object-contain mb-4"
                        />
                        <p className="font-bold">{product.title}</p>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
