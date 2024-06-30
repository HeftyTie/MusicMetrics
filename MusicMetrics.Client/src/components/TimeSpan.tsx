import React from "react";
import { Link } from "react-router-dom";

export const TimeSpan: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link
        to="/page/fourweeks"
        className="btn btn-spotify-green hover:btn-spotify-green"
      >
        4 weeks
      </Link>
      <Link
        to="/page/3months"
        className="btn btn-spotify-green hover:btn-spotify-green"
      >
        3 Months
      </Link>
      <Link
        to="/page/6months"
        className="btn btn-spotify-green hover:btn-spotify-green"
      >
        6 Months
      </Link>
      <Link
        to="/page/1year"
        className="btn btn-spotify-green hover:btn-spotify-green"
      >
        1 year
      </Link>
    </div>
  );
};
