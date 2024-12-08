import RatedReviewCard from "./RatedReviewCard";


const RatedReviews = ({ratedReviews}) => {


    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                { ratedReviews.map(rReviews=> <RatedReviewCard key={rReviews._id} rReviews={rReviews}></RatedReviewCard>)}
            </div>
        </div>
    );
};

export default RatedReviews;