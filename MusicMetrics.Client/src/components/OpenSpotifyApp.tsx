import { FaSpotify } from "react-icons/fa";

export const OpenSpotifyApp = () => {
  const openSpotifyApp = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const spotifyAppLink = "spotify://";
    const webUrl = "https://open.spotify.com/";

    const isSpotifySupported = navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
      ? true
      : false;

    if (isSpotifySupported) {
      const opened = window.open(spotifyAppLink, "_self");

      if (opened && !opened.closed && typeof opened.closed !== "undefined") {
        return;
      }
    }

    window.location.href = webUrl;
  };

  return (
    <a href="#" onClick={openSpotifyApp}>
      <FaSpotify className="m-3 text-4xl bg-black rounded-full md:text-5xl text-spotify-green" />
    </a>
  );
};
