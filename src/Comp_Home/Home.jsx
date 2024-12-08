
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import RatedReviews from "./RatedReviews";

import Subscribe from "./Subscribe";
import Faqs from "./Faqs";

const Home = () => {
const ratedReviews=useLoaderData();

    return (
        <div>
           <Banner></Banner>
           <RatedReviews ratedReviews={ratedReviews}></RatedReviews>
           <Faqs></Faqs>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;