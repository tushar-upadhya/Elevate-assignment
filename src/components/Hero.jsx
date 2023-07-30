import heroImage from "../assets/heroImage.png";
// import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div className="bg-yellow-300 ">
            <div
                className="bg-contain bg-no-repeat bg-center "
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="px-8 py-16 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center text-gray-800">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl  uppercase font-bold">
                        get start <br /> your favorites shopping
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mt-8">
                        <button
                            to="collection"
                            className="bg-gray-800 text-white border-none text-md px-6 py-3 font-bold uppercase hover:text-gray-800 hover:bg-white duration-200 cursor-pointer"
                        >
                            buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
