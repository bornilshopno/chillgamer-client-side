import { Link } from "react-router-dom";
import GameData from "./GameData";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Helmet } from "react-helmet-async";


const Watchlist = () => {
  const { user, userWatchList, setUserWatchList,setLoading } = useContext(AuthContext)
  
  useEffect(() => {
    fetch(`https://server-side-chil-gamer.vercel.app/watchlist/${user.email}`)
    .then (res=>res.json())
    .then (data=>{
      setUserWatchList(data);
      setLoading(false);})
  }, [user])

  if(userWatchList.length>0){return (
    <div className="min-h-60 lg:min-h-96 py-10 lg:py-20  bg-gradient-to-br from-amber-200 to-gray-200 dark:from-gray-700 dark:to-black">
       <Helmet>
        <title>ChillGamer || WatchList</title>
      </Helmet>
      <div className="overflow-x-auto  w-11/12 md:10/12 lg:9/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-center">SL</th>
              <th className="text-center">Game</th>
              <th className="text-center">Published</th>
              <th className="text-center">Rating</th>
              <th className="text-center">Genre</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">

            {userWatchList?.map((game,idx) => <GameData key={game._id} idx={idx} game={game}></GameData>)}


          </tbody>
        </table>
      </div>
    </div>
  );}
  else return (
    <div className="min-h-80 bg-gradient-to-br from-amber-200 to-gray-200 dark:from-gray-700 dark:to-black">
      <div className="flex flex-col gap-5 justify-center items-center my-auto min-h-96">
        <h2 className="text-4xl text-center dark:text-gray-200">No Games in your Watchlist yet!</h2>
        <h2 className="text-4xl text-center dark:text-gray-200">Explore <Link to={"/reviews"} className="text-blue-700 font-semibold">Reviews</Link> and add to your Watchlist?</h2>
      </div>
    </div>
  );
};

export default Watchlist;