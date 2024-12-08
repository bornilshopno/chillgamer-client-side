import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Comp_Core/AuthProvider";

const ReviewDetails = () => {

  const{watchlisted,setWatchListed,user,userWatchList, setUserWatchList}=useContext(AuthContext)

  const seletedReview = useLoaderData();
  const navigate = useNavigate()
 const watchlistedBy= user.email;


  const { thumbnail, title, review, rating, publication, genre, email, name } = seletedReview;
  const watchlistHandler = () => {

    const selectedToWatch = { thumbnail, title, review, rating, publication, genre, email, name, watchlistedBy }
    fetch("https://server-side-chil-gamer.vercel.app/watchlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(selectedToWatch)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {
          Swal.fire({
            title: 'Noted!',
            text: 'Game Added to Watchlist Successfully',
            icon: 'success',
            confirmButtonText: 'Cool!'
          });
         
          navigate("/reviews")
        }
      })


  }

  return (
    <div>
      <Marquee pauseOnHover>{title}</Marquee>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={thumbnail}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
              {review}
            </p>
            <p>Rating : {rating} out of 10</p>
            <p>Genre : {genre}</p>
            <p>Reviewer :<br></br>
              Name: {name} <br></br>
              Email Id: {email}</p>


            <button className={`btn btn-primary `}  onClick={watchlistHandler}>
             Add to WatchList 
             {/* {watchlisted ? "Already in Watchlist" : " Add to Watchlist"} */}
             {/* ${watchlisted ? "text-blue-600 bg-green-500 cursor-not-allowed pointer-events-none" : ""} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;