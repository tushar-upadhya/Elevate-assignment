import React, { useContext, useEffect } from "react";

import { ProductContext } from "../context/productContext";

const ProductList = () => {
    const { filteredProducts, category, setProducts, setFilteredProducts } =
        useContext(ProductContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);

                if (category === "all") {
                    setFilteredProducts(data);
                } else {
                    const filtered = data.filter(
                        (product) => product.category === category
                    );
                    setFilteredProducts(filtered);
                }
            });
    }, [category, setProducts, setFilteredProducts]);

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded p-4 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <p className="text-gray-600 text-center pb-6 font-semibold">
                            {product.title}
                        </p>

                        <p className="text-gray-600 text-center pb-6 ">
                            <span className="text-orange-600 font-semibold">
                                ₹ Price
                            </span>{" "}
                            {product.price}
                        </p>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-32 object-contain mb-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
