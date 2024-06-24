import { useState } from "react";

function NavigationBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative">
      <button
        className="absolute flex gap-4 p-2 rounded-md text-spotify-green"
        onClick={toggleDrawer}
      >
        <img
          src="https://avatar.iran.liara.run/public"
          width={60}
          height={60}
          className="object-cover rounded-full shadow-lg ring-2 ring-spotify-green aspect-square"
        />
        <p>Guest</p>
      </button>

      <div
        className={`fixed top-0 left-0 h-full shadow-lg w-64 transform transition-transform z-10 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          <div className="w-full py-5 text-center text-spotify-green">
            <a href="#" className="block hover:text-spotify-green">
              View Profile
            </a>
          </div>
          <ul>
            <li className="py-2">
              <a href="#" className="block hover:text-spotify-green">
                Currently Playing
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="block hover:text-spotify-green">
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
