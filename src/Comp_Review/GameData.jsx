

const GameData = ({game,idx}) => {

    const {title, rating, publication, genre}=game;
    return (
   
      <tr>
        <th className="text-center">{idx+1}</th>
        <td className="text-center">{title}</td>
        <td className="text-center">{publication}</td>
        <td className="text-center">{rating}</td>
        <td className="text-center">{genre}</td>
      </tr>
   
    );
};

export default GameData;