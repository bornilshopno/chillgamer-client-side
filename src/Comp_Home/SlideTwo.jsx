import { Fade } from "react-awesome-reveal";


const SlideTwo = () => {

    return (
        <div className="bg-gray-700 ">

            <div className="grid grid-cols-2 min-h-80 place-items-center gap-10 lg:w-10/12 mx-auto">
                <h1 className="text-2xl lg:text-5xl font-bold text-white text-right">Stay Connected with ChillGamer Community</h1>
                <div>
                    <Fade cascade>
                        <h2 className="text-2xl font-semibold text-white text-left">Check Reviews</h2>
                        <h2 className="text-2xl font-semibold text-white text-left">Play Games</h2>
                        <h2 className="text-2xl font-semibold text-white text-left">Share Reviews</h2>
                    </Fade>
                    </div>
            </div>

        </div>
    );
};

export default SlideTwo;