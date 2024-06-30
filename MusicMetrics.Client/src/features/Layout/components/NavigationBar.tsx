import { FaSpotify } from "react-icons/fa";

interface NavigationBarProps {
  toggleDrawer: () => void;
  profilePicture?: string;
  username?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  toggleDrawer,
  profilePicture,
  username,
}) => {
  return (
    <div className="flex justify-between shadow-md">
      <button className="flex gap-4 p-2 rounded-md" onClick={toggleDrawer}>
        <img
          src={profilePicture || "https://i.pravatar.cc/150?img=3"}
          width={60}
          height={60}
          className="object-cover rounded-full shadow-lg ring-2 ring-spotify-green aspect-square"
          alt="Avatar"
        />
        <p className="text-lg">{username || "Guest"}</p>
      </button>
      <a
        href="spotify://"
        onClick={(e) => {
          e.preventDefault();
          window.open("spotify://", "_blank");
        }}
      >
        <FaSpotify className="m-3 text-4xl bg-black rounded-full md:text-5xl text-spotify-green" />
      </a>
    </div>
  );
};
