import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { toast } from "react-toastify";


const MyReview = () => {
    const allReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const myReviews = allReviews.filter(reviews => reviews.email === user?.email);
    console.log(myReviews)

    const deleteHandler = (id) => {
console.log(id);
        fetch(`http://localhost:4000/reviews/${id}`,
            {method:"DELETE"}
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.info("Review Deleted Successfully")
                }}
            )

    }

    const updateHandler=(id)=>{
console.log(id)
    }




    return (
        <div>
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
                                        <button className="btn join-item btn-info" onClick={()=>updateHandler(`${mine._id}`)}>Update</button>
                                        <button className="btn join-item btn-error" onClick={()=>deleteHandler(`${mine._id}`)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;