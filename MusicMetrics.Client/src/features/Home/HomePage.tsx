import React from "react";
import { TimeSpan } from "../../components/TimeSpan";
import { TopTracks } from "./components/TopTracks";
import { TopArtists } from "./components/TopArtists";
import { TopGenres } from "./components/TopGenres";

import "./HomePage.css";
import { RecentTracks } from "./components/RecentTracks";

const artistsData = [
  { image: "https://i.pravatar.cc/300", name: "Artist 1" },
  {
    image: "https://i.pravatar.cc/301",
    name: "Artist 2",
  },
  {
    image: "https://i.pravatar.cc/302",
    name: "Artist 3",
  },
  {
    image: "https://i.pravatar.cc/303",
    name: "Artist 4",
  },
  {
    image: "https://i.pravatar.cc/304",
    name: "Artist 5",
  },
];

const genreData: string[] = [
  "Pop",
  "Rock",
  "Hip Hop",
  "Electronic",
  "Jazz",
  "Classical",
  "Country",
  "R&B",
  "Indie",
  "Metal",
  "Folk",
  "Blues",
];

const trackData: { image: string; name: string; artist: string }[] = [
  {
    image: "https://i.pravatar.cc/400",
    name: "Track 1",
    artist: "Artist 1",
  },
  {
    image: "https://i.pravatar.cc/401",
    name: "Track 2",
    artist: "Artist 2",
  },
  {
    image: "https://i.pravatar.cc/402",
    name: "Track 3",
    artist: "Artist 3",
  },
  {
    image: "https://i.pravatar.cc/403",
    name: "Track 4",
    artist: "Artist 4",
  },
  {
    image: "https://i.pravatar.cc/404",
    name: "Track 5",
    artist: "Artist 5",
  },
];

const lastTracksData: {
  image: string;
  name: string;
  artist: string;
  lastPlayed: number;
}[] = [
  {
    image: "https://i.pravatar.cc/400",
    name: "Track 1",
    artist: "Artist 1",
    lastPlayed: 10,
  },
  {
    image: "https://i.pravatar.cc/401",
    name: "Track 2",
    artist: "Artist 2",
    lastPlayed: 20,
  },
  {
    image: "https://i.pravatar.cc/402",
    name: "Track 3",
    artist: "Artist 3",
    lastPlayed: 30,
  },
  {
    image: "https://i.pravatar.cc/403",
    name: "Track 4",
    artist: "Artist 4",
    lastPlayed: 40,
  },
  {
    image: "https://i.pravatar.cc/404",
    name: "Track 5",
    artist: "Artist 5",
    lastPlayed: 60,
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="my-2 md:my-5">
      <TimeSpan />
      <div className="flex flex-col gap-2 m-4 mt-2 md:mx-auto md:container">
        <TopTracks tracks={trackData} />
        <TopArtists artists={artistsData} />
        <TopGenres genres={genreData} />
        <RecentTracks tracks={lastTracksData} />
      </div>
    </div>
  );
};
