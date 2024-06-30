import React from "react";
import { Link } from "react-router-dom";

interface TopArtistsProps {
  artists: { image: string; name: string }[];
}

export const TopArtists: React.FC<TopArtistsProps> = ({ artists }) => {
  return (
    <>
      <div className="flex justify-between text-xl">
        <p>Top artists</p>
        <Link to="/TopArtists" className="text-spotify-green">
          More
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {artists.slice(0, 10).map((artist, index) => (
          <button
            key={index}
            className="flex flex-col items-center w-[90px] p-2"
          >
            <div>
              <img
                src={artist.image}
                alt={artist.name}
                className="rounded-full"
                width={90}
                height={90}
              />
            </div>
            <p className="mt-2 overflow-hidden text-left whitespace-nowrap w-[90px] text-lg">{`${
              index + 1
            }. ${artist.name}`}</p>
          </button>
        ))}
      </div>
    </>
  );
};
