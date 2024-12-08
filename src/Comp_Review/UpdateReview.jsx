import { useContext, useState } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const UpdateReview = () => {
    const reviewToUpdate = useLoaderData();
    
    const { _id, thumbnail, title, review, rating, publication, genre, email, name } = reviewToUpdate;
    const [ratings, setRatings] = useState(rating)
    console.log(reviewToUpdate)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const updateReviewHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const review = form.review.value;
        const rating = ratings;
        const publication = form.publication.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const name = form.name.value;


        const updatedReview = { title,thumbnail, review, rating, publication, genre, email, name }

        console.log(updatedReview)

        fetch(`https://server-side-chil-gamer.vercel.app/reviews/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Review Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done!'
                    });
                    navigate("/my-reviews")
                }
            })
    }


    return (
        <div>
            <h2>Update Review on {title} </h2>

            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={updateReviewHandler}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Game Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="Game Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <Rating style={{ maxWidth: 250 }} value={ratings} onChange={setRatings} />
                            {/* <input type="number" name="rating" placeholder="Rate the Game" defaultValue={rating} className="input input-bordered" required /> */}
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Game Thumbnail</span>
                            </label>
                            <input type="url" name="thumbnail" placeholder="an URL for game cover" defaultValue={thumbnail} className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Detailed Review</span>
                            </label>
                            <textarea
                                placeholder="Detail Review" name="review" defaultValue={review}
                                className="textarea textarea-bordered textarea-md w-full"></textarea>

                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Publishing Year</span>
                            </label>
                            <input type="text" name="publication" placeholder="Ex: 2021 or 2024)" defaultValue={publication} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genres</span>
                            </label>
                            <select className="select w-full  input-bordered" name="genre" defaultValue={genre}>
                                <option disabled >Pick game Genre from dropdown</option>
                                <option>Action</option>
                                <option>RPG</option>
                                <option>Adventure</option>
                                <option>Others</option>

                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered bg-slate-100" value={user?.email || ""} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered bg-slate-100" value={name} readOnly />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update your Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;