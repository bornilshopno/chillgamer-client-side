import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Comp_Core/AuthProvider";


const AddReview = () => {
  const { user } = useContext(AuthContext);
  const addReviewHandler = (e) => {
    e.preventDefault();
    console.log('Click Maicche')
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const publication = form.publication.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const name = form.name.value;

    const newReview = { thumbnail, title, review, rating, publication, genre, email, name }

    console.log(newReview)

    fetch('http://localhost:4000/reviews', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Review Added Successfully',
            icon: 'success',
            confirmButtonText: 'Done!'
          })
        }
      })

  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-center lg:w-5/12">
            <h1 className="text-5xl font-bold">Add Review</h1>
            <p className="py-6">
              Reviews help to get idea real time experience. It both helps the users to assume the project also the developer to know the loopholes and options to improve.
            </p>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={addReviewHandler}>

              <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Game Title</span>
                  </label>
                  <input type="text" name="title" placeholder="Game Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input type="number" name="rating" placeholder="Rate the Game" className="input input-bordered" required />
                </div>
                <div className="form-control lg:col-span-2">
                  <label className="label">
                    <span className="label-text">Game Thumbnail</span>
                  </label>
                  <input type="url" name="thumbnail" placeholder="an URL for game cover" className="input input-bordered" required />
                </div>
                <div className="form-control lg:col-span-2">
                  <label className="label">
                    <span className="label-text">Review Description</span>
                  </label>
                  <textarea
                    placeholder="Detail Review" name="review"
                    className="textarea textarea-bordered textarea-md" required></textarea>
                  {/* <input type="text" name="review" placeholder="Detail Review" className="input input-bordered" required /> */}
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
                  <input type="email" name="email" className="input input-bordered bg-slate-100" value={user.email} readOnly />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input type="text" name="name" className="input input-bordered bg-slate-100" value={user.displayName} readOnly />

                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit your Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;