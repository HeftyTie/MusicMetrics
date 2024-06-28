import { useState } from "react";
import { FaCog, FaSpotify } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";

function NavigationBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="flex justify-between">
        <button className="flex gap-4 p-2 rounded-md" onClick={toggleDrawer}>
          <img
            src="https://avatar.iran.liara.run/public"
            width={60}
            height={60}
            className="object-cover rounded-full shadow-lg ring-2 ring-spotify-green aspect-square"
          />
          <p className="text-lg">Guest</p>
        </button>

        <FaSpotify className="m-3 text-3xl text-spotify-green" />
      </div>

      <div
        className={`fixed top-0 left-0 h-full shadow-lg w-64 transform transition-transform z-10 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          <div className="w-full py-5 text-center">
            <a href="#" className="block hover:text-spotify-green">
              View Profile
            </a>
          </div>
          <ul>
            <li className="py-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-spotify-green"
              >
                <GiMusicalNotes className="move" />
                Currently Playing
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-spotify-green"
              >
                <FaCog className="rotate" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
}

export default NavigationBar;
