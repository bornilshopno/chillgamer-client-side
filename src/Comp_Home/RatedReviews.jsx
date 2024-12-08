import RatedReviewCard from "./RatedReviewCard";


const RatedReviews = ({ratedReviews}) => {


    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <h2 className="text-center text-2xl md:text-5xl font-bold py-5 md:py-10 border-2 border-x-white border-y-black rounded-lg w-2/3 md:w-1/2 mx-auto mt-5">Highest Rated Games</h2>
            <p className="py-3 lg:py-7"> Experience the thrill of gaming excellence with the highest-rated games, celebrated for their captivating stories, breathtaking visuals, and innovative gameplay. From epic adventures to competitive challenges, these games redefine entertainment, delivering unforgettable moments. Perfectly crafted for casual players and hardcore enthusiasts alike, they set the benchmark for gaming perfection worldwide. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                { ratedReviews.map(rReviews=> <RatedReviewCard key={rReviews._id} rReviews={rReviews}></RatedReviewCard>)}
            </div>
        </div>
    );
};

export default RatedReviews;