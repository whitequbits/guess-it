import Card from "./card";
import CardShuffler from "./card_shuffler";

function Footer(props: any) {
    return (
    <footer className="z-10 fixed inset-x-0 bottom-0">
        <div className="relative overflow-hidden bg-gray-400 text-white flex flex-col">
        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer" />
            <div className="h-10 w-full flex flex-col justify-center items-center">
                <div className="transition-transform duration-500 rotate-90 peer-checked:-rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="overflow-hidden bg-gray-300 transition-all duration-500 max-h-0 peer-checked:max-h-72 flex justify-center">
                <CardShuffler />
            </div>
        </div>
    </footer>);
}

export default Footer;