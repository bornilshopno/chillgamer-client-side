
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import RatedReviews from "./RatedReviews";

import Subscribe from "./Subscribe";
import Faqs from "./Faqs";
import { useContext } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";

const Home = () => {
    const{dark}=useContext(AuthContext)
const ratedReviews=useLoaderData();

    return (
        <div className="dark:bg-gradient-to-b  dark:from-gray-800 dark:to-gray-200 text-gray-700 dark:text-white bg-gradient-to-b from-amber-200  to-gray-300 pb-10">
           <Banner></Banner>
           <RatedReviews ratedReviews={ratedReviews}></RatedReviews>
           <Faqs></Faqs>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;