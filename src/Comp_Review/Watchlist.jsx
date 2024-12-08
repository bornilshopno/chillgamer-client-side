import { Link, useLoaderData } from "react-router-dom";
import GameData from "./GameData";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";

//need to sort wishlist array
const Watchlist = () => {
  const { user, userWatchList, setUserWatchList } = useContext(AuthContext)
  
  useEffect(() => {
    fetch(`https://server-side-chil-gamer.vercel.app/watchlist/${user.email}`)
    .then (res=>res.json())
    .then (data=>{
      setUserWatchList(data)})

  }, [user])

  if(userWatchList.length>0){return (
    <div className="min-h-96 w-11/12 md:10/12 lg:9/12 mx-auto">
      <div className="overflow-x-auto  my-20">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-700 text-white">
            <tr>
              <th></th>
              <th>Game</th>
              <th>Rating</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

            {userWatchList?.map((game,idx) => <GameData key={game._id} idx={idx} game={game}></GameData>)}


          </tbody>
        </table>
      </div>
    </div>
  );}
  else return (
    <div className="min-h-96">
      <div className="flex flex-col gap-5 justify-center items-center my-auto min-h-96">
        <h2 className="text-4xl text-center">No Games in your Watchlist yet!</h2>
        <h2 className="text-4xl text-center">Explore <Link to={"/reviews"} className="text-blue-700 font-semibold">Reviews</Link> and add to your Watchlist?</h2>
      </div>
    </div>
  );
};

export default Watchlist;