import { setWatched } from "../redux/states/Number";
import { useDispatch } from "react-redux";
export default function Movie(props) {
  const dispatch = useDispatch();
  const handleAddToWatched = (movieName) => {
    dispatch(setWatched(movieName));
  };
  return (
    <div className="movie-card">
      <img src={props.photo} alt={props.name} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{props.name}</h2>
      </div>
      <div>
        <button
          className="watched"
          onClick={() => handleAddToWatched(props.name)}
        >
          Add to Watched
        </button>
      </div>
    </div>
  );
}
