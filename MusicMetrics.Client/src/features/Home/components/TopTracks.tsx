import React from "react";
import { Link } from "react-router-dom";

interface TopTracksProp {
  tracks: {
    image: string;
    name: string;
    artist: string;
  }[];
}

export const TopTracks: React.FC<TopTracksProp> = ({ tracks }) => {
  return (
    <>
      <div className="flex justify-between text-xl">
        <p>Top tracks</p>
        <Link to="/TopTracks" className="text-spotify-green">
          More
        </Link>
      </div>

      <button className="flex gap-2 overflow-x-auto no-scrollbar">
        {tracks.slice(0, 25).map((track, index) => (
          <div key={index} className="flex flex-col items-center w-[90px]">
            <img
              src={track.image}
              alt={track.name}
              className="rounded-lg"
              width={90}
              height={90}
            />
            <p className="mt-2 overflow-hidden text-left whitespace-nowrap w-[90px] text-lg flex flex-col">
              {`${index + 1}. ${track.name}`}
              <span className="text-sm font-thin">{track.artist}</span>
            </p>
          </div>
        ))}
      </button>
    </>
  );
};
