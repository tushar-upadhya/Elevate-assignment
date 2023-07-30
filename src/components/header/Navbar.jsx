import { useState } from "react";
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
        console.log("Search Term:", searchTerm);
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        console.log("Selected Language:", selectedLanguage);
    };

    return (
        <nav className="bg-yellow-300 text-white py-2 px-6 md:flex md:justify-between md:items-center">
            {/* Left section */}
            <div className="flex items-center justify-between mb-4 md:mb-0">
                <img
                    className="h-8 w-24"
                    src="../images/amazon.png"
                    alt=" logo"
                />
            </div>

            {/* Middle section (search bar and category dropdown) */}
            <div className="flex items-center gap-12 justify-center md:justify-start flex-grow">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="ml-4 bg-gray-700 text-white rounded-sm px-4 py-2"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={handleSearch}
                        className="text-black placeholder-gray-500 w-96 bg-white rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    <div className="bg-red-500 rounded-sm px-2 py-3">
                        <FaSearch className="text-white" />
                    </div>
                </div>
            </div>

            {/* Right section (language selection, cart icon, and profile icon) */}
            <div className="flex justify-center items-center gap-8 ">
                <select
                    onChange={handleLanguageChange}
                    className="text-black mx-auto rounded-sm px-8 py-2"
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>

                <div className="flex gap-8">
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
