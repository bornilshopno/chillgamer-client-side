import { useLoaderData } from "react-router-dom";
import CardOfAllReveiw from "./CardOfAllReveiw";
import { useState } from "react";


const AllReview = () => {
    const allReviews = useLoaderData()
    const[showReviews,setShowReviews]=useState(allReviews);
    const[sort,setSort]=useState("");
    const[filter,setFilter]=useState("")

    const handleSorting=(sortBy)=>{
        setFilter("");
        setSort(sortBy);
 if(sortBy==="Rating"){
    const sortedReview= [...allReviews].sort((a,b)=>b.rating-a.rating)
    setShowReviews(sortedReview)
 }

 else if(sortBy==="Publishing Year"){
    const sortedReviw= [...allReviews].sort((a,b)=>b.publication-a.publication);
    setShowReviews(sortedReviw)
 }
    }
    const handleFilter=filterBy=>{
        setSort("");
        setFilter(filterBy)

        const filteredReview=allReviews.filter(review=>review.genre===filterBy)
        setShowReviews(filteredReview);

       

    }

    return (
       <div className="bg-gradient-to-br from-amber-200 to-gray-200 dark:from-gray-600 dark:to-black">
         <div className="w-11/12 md:w-10/12 mx-auto">
            
            <h1 className="text-5xl mx-16 text-center font-semibold py-10  dark:text-gray-200">Explore All the Reviews Here</h1>
            <div className="flex gap-5 justify-end mb-5">
                <div className="dropdown dropdown-bottom dropdown-end focus:bg-blue-500">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">
                       { sort ? `Sorted by ${sort}` : 'Sort by'}
                        </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleSorting("Rating")}><a>Rating</a></li>
                        <li onClick={()=>handleSorting("Publishing Year")}><a>Publishing Year</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">
                       { filter? `Filtered by ${filter}` : "Filter by Genre"}
                        </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleFilter("Action")}><a>Action</a></li>
                        <li onClick={()=>handleFilter("Adventure")}><a>Adventure</a></li>
                        <li onClick={()=>handleFilter("RPG")}><a>RPG</a></li>
                    </ul>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-5 lg:pb-10 ">
                {showReviews?.map(reviews => <CardOfAllReveiw key={reviews._id} reviews={reviews}></CardOfAllReveiw>
                )}
            </div>
        </div>
       </div>
    );
};

export default AllReview;