import React from "react";
import { Link } from "react-router-dom";

export const TimeSpan: React.FC = () => {
  return (
    <div className="flex justify-center gap-2 overflow-x-auto no-scrollbar">
      <Link
        to="/page/fourweeks"
        className="flex-shrink-0 btn btn-spotify-green hover:btn-spotify-green"
      >
        4 weeks
      </Link>
      <Link
        to="/page/3months"
        className="flex-shrink-0 btn btn-spotify-green hover:btn-spotify-green"
      >
        3 Months
      </Link>
      <Link
        to="/page/6months"
        className="flex-shrink-0 btn btn-spotify-green hover:btn-spotify-green"
      >
        6 Months
      </Link>
      <Link
        to="/page/1year"
        className="flex-shrink-0 btn btn-spotify-green hover:btn-spotify-green"
      >
        1 year
      </Link>
    </div>
  );
};
