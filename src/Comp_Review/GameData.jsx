

const GameData = ({game,idx}) => {

    const {title, rating, publication, genre}=game;
    return (
   
      <tr>
        <th>{idx+1}</th>
        <td>{title}</td>
        <td>{rating}</td>
        <td>{genre}</td>
      </tr>
   
    );
};

export default GameData;