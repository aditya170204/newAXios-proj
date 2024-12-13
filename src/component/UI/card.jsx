export const Card = ({ movieData }) => {
  const { Poster, imdbID } = movieData;
  return (
    <li>
      <div className="hero-container">
        <div className="main-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket-content">
            <a href={`/movies/${imdbID}`}>
              <button className="ticket-buy-btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
