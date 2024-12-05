

const AddReview = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left lg:w-5/12">
      <h1 className="text-5xl font-bold">Add Review</h1>
      <p className="py-6">
        Reviews help to get idea real time experience. It both helps the users to assume the project also the developer to know the loopholes and options to improve.
      </p>
    </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <form className="card-body">
        {/*row*/}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddReview;