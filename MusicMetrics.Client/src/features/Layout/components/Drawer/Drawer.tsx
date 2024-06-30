import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";

export const Drawer: React.FC<{
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}> = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <>
      <div
        className={`drawer fixed top-0 h-full shadow-lg w-64 flex flex-col transform transition-transform z-10 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          <Link
            to="/Profile"
            className="flex items-center gap-2 my-2 text-xl hover:text-spotify-green"
          >
            <img
              src="https://i.pravatar.cc/150?img=3"
              width={20}
              height={20}
              className="object-cover rounded-full shadow-lg ring-2 ring-spotify-green aspect-square"
              alt="Avatar"
            />
            Profile
          </Link>
          <Link
            to="/Settings"
            className="flex items-center gap-2 my-2 text-xl hover:text-spotify-green"
          >
            <FaCog className="rotate" />
            App Settings
          </Link>

          <Link to="/About" className="my-2 text-xl hover:text-spotify-green">
            About Music Metrics
          </Link>
        </nav>
        <div className="flex items-center justify-center mt-auto mb-5">
          <ThemeToggler />
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};
