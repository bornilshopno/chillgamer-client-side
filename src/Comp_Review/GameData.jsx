

const GameData = ({game}) => {

    const {title, rating, publication, genre}=game;
    return (
   
      <tr>
        <th>1</th>
        <td>{title}</td>
        <td>{rating} out of 10</td>
        <td>{genre}</td>
      </tr>
   
    );
};

export default GameData;