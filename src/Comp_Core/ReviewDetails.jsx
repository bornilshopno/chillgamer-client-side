import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewDetails = () => {

    const seletedReview = useLoaderData();

    const {  thumbnail, title, review, rating, publication, genre, email, name } = seletedReview;
    const watchlistHandler=()=>{

        const selectedToWatch= {thumbnail, title, review, rating, publication, genre, email, name}
        fetch("http://localhost:4000/watchlist" , {
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(selectedToWatch)
        })
        .then(res=>res.json())
        .then(data=> {console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Noted!',
                    text: 'Game Added to Watchlist Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool!'
                  })}
        })


    }

    return (
        <div>
<Marquee pauseOnHover>{title}</Marquee>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
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
      

      <button className="btn btn-primary" onClick={watchlistHandler}>Add to Watchlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReviewDetails;