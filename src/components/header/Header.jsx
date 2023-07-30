import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";

const Header = () => {
    return (
        <>
            <Navbar1 />

            <div class="flex justify-center items-center bg-yellow-300">
                <h2 class="text-4xl font-bold text-white m-8 max-w-325px">
                    Eflyer
                </h2>
            </div>

            <Navbar />
        </>
    );
};

export default Header;
