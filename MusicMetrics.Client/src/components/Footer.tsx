import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineBarChart, MdOutlineShowChart } from "react-icons/md";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full align-middle">
      <div className="flex items-center p-4 pb-2 justify-evenly">
        <div className="flex flex-col items-center justify-center text-center">
          <FaHome className="text-2xl text-spotify-green" />
          <span className="text-sm">Home</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <MdOutlineShowChart className="text-2xl text-spotify-green" />
          <span className="text-sm">Trends</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <MdOutlineBarChart className="text-2xl text-spotify-green" />
          <span className="text-sm">Stats</span>
        </div>

        <div className="flex flex-col items-center justify-center mt-1 text-center">
          <FaSearch className="text-xl text-spotify-green" />
          <span className="text-sm">Search</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
