import { useContext } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { useLoaderData } from "react-router-dom";


const UpdateReview = () => {
    const reviewToUpdate = useLoaderData();
    const { thumbnail, title, review, rating, publication, genre, email, name } = reviewToUpdate;
    console.log(reviewToUpdate)
    const { user } = useContext(AuthContext)
    const updateReviewHandler = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <h2>Update Review on {title} </h2>

            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={updateReviewHandler}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Game Thumbnail</span>
                            </label>
                            <input type="url" name="thumbnail" placeholder="an URL for game cover" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Game Thumbnail</span>
                            </label>
                            <textarea
                                placeholder="Detail Review" name="review"
                                className="textarea textarea-bordered textarea-md w-full"></textarea>
                           
                        </div>

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review Description</span>
                            </label>
                            <input type="text" name="review" placeholder="Detail Review" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="Rate the Game" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Publishing Year</span>
                            </label>
                            <input type="text" name="publication" placeholder="Ex: 2021 or 2024)" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genres</span>
                            </label>
                            <select className="select w-full  input-bordered" name="genre" defaultValue={"Pick game Genre from dropdown"}>
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
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered bg-slate-100" value={user?.displayName || ""} readOnly />

                        </div> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit your Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;