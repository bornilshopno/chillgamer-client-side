import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ReviewDetails = () => {

  const { watchlisted, setWatchListed, user, userWatchList, setUserWatchList } = useContext(AuthContext)

  const seletedReview = useLoaderData();
  const navigate = useNavigate()
  const watchlistedBy = user?.email;


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
  const Heart = (
    <path
      d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
      c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
      c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
      c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
      C152.4,108.4,143.5,117.2,132.5,117.2z"
    />
  ); // Source: https://www.svgrepo.com/svg/40627/heart
    
  const customStyles = {
    itemShapes: Heart,
    activeFillColor: 'white',
    activeBoxColor: '#696969',
    inactiveFillColor: 'white',
    inactiveBoxColor: '#E0E0E0',
  };

  return (
    <div className="dark:bg-gray-700 bg-gray-300 py-1">
      <Marquee pauseOnHover={true} autoFill={true}>
        <h2 className="font-bold text-xl text-gray-400 dark:text-gray-400">{title}</h2>
        <h2 className="font-bold text-xl text-gray-400 dark:text-gray-400"> ** Reviewed By :
              {name} 
              ** </h2>
      </Marquee>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row gap-5 lg:gap-20">
          <img
            src={thumbnail}
            className="max-w-xl rounded-lg shadow-2xl cover" />
          <div>
            <h1 className="text-5xl font-bold text-gray-700">{title}</h1>
            <div className="badge badge-neutral">{genre}</div>
           
         <div className="text-center mx-auto">
         <Rating  style={{ maxWidth: 250, margin: "auto", 

          }} value={rating} itemStyles={customStyles}
          transition="position"
          radius="medium"
          spaceInside="large"
          spaceBetween="small" readOnly/>
       
         </div>
            
            <p className="py-6">
             <span className="font-semibold">  </span>  {review}
            </p>
            
            <p>Reviewed By :<br></br>
              {name} <br></br>
             {email}</p>


            <button className='btn btn-neutral mt-5 lg:mt-10 text-lg' onClick={watchlistHandler}>
              Add to WatchList

            </button>
          </div>
        </div>
      </div>
   <div>
   <Marquee pauseOnHover={true} autoFill={true}>
        <h2 className="font-bold text-xl  text-gray-400 dark:text-gray-400">{title}</h2>
        <h2 className="font-bold text-xl text-gray-400 dark:text-gray-400"> ** Review Details** </h2>
        <h2 className="font-bold text-xl text-gray-400 dark:text-gray-400"> ** By {name}** </h2>
      </Marquee>
   </div>
    </div>
  );
};

export default ReviewDetails;