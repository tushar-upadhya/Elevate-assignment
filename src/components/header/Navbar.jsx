import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

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
        console.log("Search Term:", searchTerm);
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        console.log("Selected Language:", selectedLanguage);
    };

    return (
        <nav className="bg-yellow-300 text-white gap-4 py-2 px-4 md:px-6 lg:px-12 xl:px-16 flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Left section */}
            <div className="text-2xl">
                <AiOutlineMenu />
            </div>

            <div className="flex items-center gap-4 md:gap-12 lg:gap-16 flex-grow mt-4 md:mt-0">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full md:w-auto bg-gray-700 text-white rounded-sm px-4 py-2"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                {/* Middle section */}
                <div className="relative flex items-center w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={handleSearch}
                        className="w-full text-black placeholder-gray-500 bg-white rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    <div className="bg-red-500 rounded-sm px-2 py-3">
                        <FaSearch className="text-white" />
                    </div>
                </div>
            </div>

            {/* Right section (language selection, cart icon, and profile icon) */}
            <div className="flex items-center gap-4 md:gap-8">
                <select
                    onChange={handleLanguageChange}
                    className="border-none border-yellow-500 text-black rounded-sm px-6 py-2"
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>

                <div className="flex gap-4 md:gap-8">
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
