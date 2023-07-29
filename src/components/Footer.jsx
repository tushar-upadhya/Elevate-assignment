import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex gap-y-6 mx-auto mt-8 items-center justify-between bg-yellow-300 text-center  text-gray-600 py-4 ">
            <p className="text-[15px] ml-2 gap-5">
                &copy; {new Date().getFullYear()}{" "}
                <a
                    href="https://tusharupadhyay.vercel.app/"
                    className="text-black-300  font-semibold hover:underline duration-100 transition-all ml-2"
                >
                    TUSHAR UPADHYAY
                </a>
            </p>
            <div className="flex justify-center space-x-4 mt-4 mr-4">
                <a
                    href="https://github.com/tushar-upadhya/e-com-full"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub
                        size={20}
                        className="text-gray-500 opacity-[.6] hover:opacity-100 duration-300"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin
                        size={20}
                        className="text-gray-500 opacity-[.6] hover:opacity-100 duration-300 mr-4"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
