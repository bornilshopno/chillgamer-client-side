import { useLoaderData } from "react-router-dom";
import CardOfAllReveiw from "./CardOfAllReveiw";


const AllReview = () => {
    const allReviews= useLoaderData()
 
    return (
        <div>
           <h1 className="text-5xl mx-16 text-center font-semibold py-10">Explore All the Reviews Here</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{allReviews.map(reviews=> <CardOfAllReveiw key={reviews._id} reviews={reviews}></CardOfAllReveiw>
)}
           </div>
        </div>
    );
};

export default AllReview;