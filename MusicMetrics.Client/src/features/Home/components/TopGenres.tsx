import { Link } from "react-router-dom";

interface TopGenresProps {
  genres: string[];
}

export const TopGenres: React.FC<TopGenresProps> = ({ genres }) => {
  return (
    <>
      <div className="flex justify-between text-xl">
        <p>Top Genres</p>
        <Link to="/TopGenres" className="text-spotify-green">
          More
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {genres.slice(0, 10).map((genre, index) => (
          <div key={index} className="flex flex-col items-center">
            <button className="overflow-hidden text-center whitespace-nowrap btn-sm btn-spotify-green">
              {`${index + 1}. ${genre}`}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
