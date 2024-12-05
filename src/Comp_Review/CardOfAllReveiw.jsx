import { Link } from "react-router-dom";


const CardOfAllReveiw = ({ reviews }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, thumbnail, title, review, rating, publication, genre, email, name } = reviews;
    return (
        <div className="card bg-base-100 shadow-xl" >
            <figure>
                <img
                    src={thumbnail}
                    className="w-full h-60"
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                <h2 className="card-title">{title}</h2>
                <p>Genre : {genre} </p>

                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Explore Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardOfAllReveiw;