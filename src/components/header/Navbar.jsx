import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
    const categories = [
        "All Categories",
        "Electronics",
        "Jewelry",
        "Men's Clothing",
        "Women's Clothing",
    ];

    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        // Implement your search logic here
        console.log("Search Term:", searchTerm);
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        // Implement your language selection logic here
        console.log("Selected Language:", selectedLanguage);
    };

    return (
        <nav className="bg-gray-800 text-white py-4 px-8 md:flex md:justify-between md:items-center">
            {/* Left section */}
            <div className="flex items-center justify-between mb-4 md:mb-0">
                <img
                    className="h-8 w-24"
                    src="../images/amazon.png"
                    alt="Amazon logo"
                />
                <div className="hidden md:flex flex-col text-xs">
                    <span>Deliver to</span>
                    <span className="font-bold">United Kingdom</span>
                </div>
            </div>

            {/* Middle section (search bar and category dropdown) */}
            <div className="flex items-center justify-center md:justify-start flex-grow">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={handleSearch}
                        className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <FaSearch className="text-gray-500" />
                    </div>
                </div>

                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="ml-4 bg-gray-700 text-white rounded-md px-4 py-2"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Right section (language selection, cart icon, and profile icon) */}
            <div className="flex items-center space-x-4">
                <select
                    onChange={handleLanguageChange}
                    className="bg-gray-700 text-white rounded-md px-4 py-2"
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>

                <div className="flex space-x-4">
                    <div className="text-2xl">
                        <FaShoppingCart />
                    </div>
                    <div className="text-2xl">
                        <FaUser />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
