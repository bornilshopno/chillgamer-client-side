import { useTypewriter } from "react-simple-typewriter";


const SlideOne = () => {
    const [text] = useTypewriter({
        words: ["Game Review Application"],
        loop: false,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <div className="bg-gray-700 ">
            <div className="max-w-md mx-auto flex flex-col gap-10 items-center justify-center  min-h-80">
                <h1 className="text-5xl font-bold text-white">Chill Gamer</h1>
                <h2 className="text-2xl font-semibold text-white">{text}</h2>

            </div>
        </div>
    );
};

export default SlideOne;