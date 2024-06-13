import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsloading, setMovies, setNumber } from "../redux/states/Number";

export default function Navbar() {
  const dispatch = useDispatch();
  const [Text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const number = useSelector((state) => state.movie.number);
  const url = `http://www.omdbapi.com/?apikey=3a5bf9bd&s=${Text}`;
  function handleSubmit(e) {
    e.preventDefault();
    Text !== "" ? setSubmit(true) : setSubmit(false);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    if (submit) {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const result = await response.json();

          if (result.Respone === "True") {
            dispatch(setMovies(result.Search));
            dispatch(setNumber(result.totalResults));
            dispatch(setIsloading(false));
          } else {
            setText("");
          }
        } catch (err) {
        } finally {
          dispatch(setIsloading(false));
          setSubmit(false);
        }
      };
      fetchData();
    }
  }, [url, submit, dispatch]);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">usePopcorn</div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={Text}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
          <div className="Number">total {number} results found</div>
        </div>
      </nav>
    </div>
  );
}
