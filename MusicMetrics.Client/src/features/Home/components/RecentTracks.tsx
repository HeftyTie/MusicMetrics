import React from "react";
import { TbHistoryToggle } from "react-icons/tb";
import { Link } from "react-router-dom";

interface RecentTracksProp {
  tracks: {
    image: string;
    name: string;
    artist: string;
    lastPlayed: number;
  }[];
}

export const RecentTracks: React.FC<RecentTracksProp> = ({ tracks }) => {
  return (
    <>
      <div className="flex justify-between text-xl">
        <p>Recent Tracks</p>
        <Link to="/TopTracks" className="text-spotify-green">
          More
        </Link>
      </div>

      <div className="flex flex-col ">
        {tracks.slice(0, 25).map((track, index) => (
          <div key={index} className="flex items-center justify-between p-2">
            <button className="flex items-center gap-2">
              <img
                src={track.image}
                alt={track.name}
                className="rounded-lg"
                width={50}
                height={50}
              />
              <div className="flex flex-col mt-2 overflow-hidden text-lg text-left whitespace-nowrap">
                <span>{track.name}</span>
                <span className="text-sm font-thin">{track.artist}</span>
              </div>
            </button>
            <span className="flex flex-col items-center">
              <TbHistoryToggle className="text-xl" />
              <p>{formatLastPlayed(track.lastPlayed)}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

function formatLastPlayed(lastPlayed: number) {
  if (lastPlayed >= 60) {
    const hours = Math.floor(lastPlayed / 60);
    return `${hours}h`;
  } else {
    return `${lastPlayed}m`;
  }
}
