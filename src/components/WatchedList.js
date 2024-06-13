import WatchedMovie from "./WatchedMovie";
import { useSelector } from "react-redux";

export default function WatchedList() {
  const Watched = useSelector((state) => state.movie.Watched);

  return (
    <div className="movie-tab-watched">
      <p>WatchedList</p>
      {Watched === 0 ? (
        <p>empty</p>
      ) : (
        Watched.map((movie, i) => (
          <WatchedMovie movie={movie} key={i} movies={Watched} />
        ))
      )}
    </div>
  );
}
