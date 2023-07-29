import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { title: "Product 1", category: "Category 1" },
        { title: "Product 2", category: "Category 2" },
    ]);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState("all");

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        );
        setFilteredProducts(filtered);
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);

        if (selectedCategory === "all") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.category === selectedCategory
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                category,
                handleSearch,
                handleCategoryChange,
                setProducts,
                setFilteredProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
