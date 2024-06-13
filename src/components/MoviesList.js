import Movie from "./Movies";
import { useSelector } from "react-redux";
export default function MoviesList() {
  const isLoading = useSelector((state) => state.movie.isLoading);
  const movies = useSelector((state) => state.movie.movies);
  console.log(movies);

  return (
    <div className="movie-tab">
      <p>Search results</p>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {movies.length === 0 ? (
              <p>No movies</p>
            ) : (
              movies.map((movie, index) => (
                <Movie key={index} name={movie.Title} photo={movie.photo} />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
