import MoviesList from "./MoviesList";
import WatchedList from "./WatchedList";

export default function Main() {
  // console.log(props.movies);
  return (
    <div className="main">
      <MoviesList />
      <WatchedList />
    </div>
  );
}
