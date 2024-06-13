import { removeWatched } from "../redux/states/Number";
import { useDispatch } from "react-redux";
export default function WatchedMovie(props) {
  const dispatch = useDispatch();
  function handleRemove(movieToDelete) {
    dispatch(removeWatched(movieToDelete));
  }
  return (
    <div className="movie-card">
      <img alt={props.movie} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{props.movie}</h2>
      </div>
      <div className="Remove">
        <button onClick={() => handleRemove(props.movie)}>Remove</button>
      </div>
    </div>
  );
}
