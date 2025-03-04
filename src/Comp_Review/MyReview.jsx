import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Comp_Core/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyReview = () => {
    const allReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const myReviews = allReviews.filter(reviews => reviews.email === user?.email);

    const navigate = useNavigate()
    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-chil-gamer.vercel.app/reviews/${id}`,
                    { method: "DELETE" }
                )
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate("/my-reviews")
                        }
                    }
                    )



            }
        });


    }

    return (
        <div className="lg:min-h-96 py-10 lg:py-20 bg-gradient-to-br from-amber-200 to-gray-200 dark:from-gray-700 dark:to-black">
            <Helmet>
                <title>ChillGamer || MyReview</title>
            </Helmet>
            {myReviews.length !== 0 ?
                <div className="overflow-x-auto w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex items-center">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-400 text-white">
                            <tr>
                                <th className="text-center">Game</th>
                                <th className="text-center">Genre</th>
                                <th className="text-center">Rating</th>
                                <th className="text-center">Change of Mind</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-800">

                            {myReviews.map(mine =>
                                <tr key={mine._id}>
                                    <td className="text-center">{mine.title}</td>
                                    <td className="text-center">{mine.genre}</td>
                                    <td className="text-center">{mine.rating}</td>
                                    <td className="text-center">
                                        <div className="join join-vertical lg:join-horizontal">
                                            <Link to={`/update-review/${mine._id}`} > <button className="btn join-item" >Update</button></Link>
                                            {/*  */}
                                            <button className="btn join-item" onClick={() => deleteHandler(`${mine._id}`)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
                :
                <h2 className="text-4xl text-center dark:text-white">No reviews from you here yet. <br></br><Link className="text-blue-500" to={"/add-review"}>Add Reviews</Link> now?</h2>}
        </div>
    );
};

export default MyReview;