import { useLoaderData } from "react-router-dom";
import GameData from "./GameData";

//need to sort wishlist array
const Watchlist = () => {
    const games=useLoaderData();
    console.log(games);
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

        {games.map(game=><GameData key={game._id} game={game}></GameData>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Watchlist;