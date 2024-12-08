import { Link } from "react-router-dom";


const RatedReviewCard = ({ rReviews }) => {
    const { _id, thumbnail, title, review, rating, publication, genre, email, name } = rReviews;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src={thumbnail}
                        alt="Thumbnail"
                        className="w-full h-44" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-end">{title}</h2>
                    <div className="flex justify-between">
                    <div className="badge badge-secondary">Rating : {rating}</div>
                    <div className="badge badge-secondary">Genre : {genre}</div>
                    </div>
                  
                    <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Explore Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatedReviewCard;