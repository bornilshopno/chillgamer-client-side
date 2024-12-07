import { useLoaderData } from "react-router-dom";
import GameData from "./GameData";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";

//need to sort wishlist array
const Watchlist = () => {
  const{user,userWatchList, setUserWatchList}=useContext(AuthContext)
    const games=useLoaderData();
    console.log(games);
  useEffect(()=>{
    const myWatchlist=games?.filter(game=> game.watchlistedBy===user?.email)
    console.log(myWatchlist);
    setUserWatchList(myWatchlist);
  } ,[games, user])
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Game</th>
        <th>Rating</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>

        {userWatchList?.map(game=><GameData key={game._id}  game={game}></GameData>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Watchlist;