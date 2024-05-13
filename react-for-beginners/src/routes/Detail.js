import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div>
            <h2>id: {movie.id}</h2>
            <h2>{movie.title}</h2>
            <img src={movie.large_cover_image}></img>
            <div>
                <span> year: {movie.year} </span>
                <span> minutes: {movie.runtime} </span>
                <span> rate: {movie.rating} </span>
                <span> like: {movie.like_count} </span>
            </div>
            <p>{movie.description_intro}</p>
            <ul>
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
}
export default Detail;