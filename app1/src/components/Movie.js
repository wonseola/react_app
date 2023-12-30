
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import "../style.css"

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className="movie">
            <img src={coverImg} alt={title} />
            <h3><Link to={`${process.env.PUBLIC_URL}/movie/${id}`} > {title} </Link> </h3>
            <p>{summary}</p>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;