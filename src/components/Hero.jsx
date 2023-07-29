import heroImage from "../assets/heroImage.png";

const Hero = () => {
    return (
        <section className="relative bg-yellow-300">
            <div className="flex  h-10 items-center justify-center">
                <img
                    src={heroImage}
                    className="h-40 md:h-60 lg:h-80"
                    alt="profile pic"
                />
            </div>

            <div className="px-4 py-16 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    GET START
                </h1>

                <p className="text-xl mt-4">Your favorite shopping</p>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mt-8">
                    <button
                        to="collection"
                        className="bg-black text-white border-2 border-black text-md px-6 py-3 font-bold uppercase hover:text-black rounded-md hover:bg-white duration-200 cursor-pointer"
                    >
                        buy now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
