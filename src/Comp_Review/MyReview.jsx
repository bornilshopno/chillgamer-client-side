import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Comp_Core/AuthProvider";
import Swal from "sweetalert2";


const MyReview = () => {
    const allReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const myReviews = allReviews.filter(reviews => reviews.email === user?.email);
    console.log(myReviews);
    const navigate = useNavigate()
    const deleteHandler = (id) => {
        console.log(id);

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
                fetch(`http://localhost:4000/reviews/${id}`,
                    { method: "DELETE" }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
        <div className="lg:min-h-96">
            {myReviews.length !== 0 ?
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th>Change of Mind</th>
                            </tr>
                        </thead>
                        <tbody>

                            {myReviews.map(mine =>
                                <tr key={mine._id}>
                                    <td>{mine.title}</td>
                                    <td>{mine.genre}</td>
                                    <td>{mine.rating}</td>
                                    <td>
                                        <div className="join join-vertical lg:join-horizontal">
                                           <Link to={`/update-review/${mine._id}`} > <button className="btn join-item btn-info" >Update</button></Link>
                                            {/*  */}
                                            <button className="btn join-item btn-error" onClick={() => deleteHandler(`${mine._id}`)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
                :
                <h2>No Reviews from you here.<Link className="text-blue-500" to={"/add-review"}>Add Reviews</Link> now?</h2>}
        </div>
    );
};

export default MyReview;