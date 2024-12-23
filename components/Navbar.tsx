// components/Menu.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-6">
        <div className="flex-shrink-0 pl-10">SRM LOGO</div>

        {/* Menu */}
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-4 text-[21px]">
            <li>
              <Link
                href="/"
                className="text-white hover:bg-gray-700 px-7 py-2 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="text-white hover:bg-gray-700 px-7 py-2 rounded"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/isdlab"
                className="text-white hover:bg-gray-700 px-7 py-2 rounded"
              >
                ISD Lab
              </Link>
            </li>
            <li>
              <Link
                href="/drones"
                className="text-white hover:bg-gray-700 px-7 py-2 rounded"
              >
                Drones
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-white hover:bg-gray-700 px-7 py-2 rounded"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/worklets"
                className="text-white hover:bg-gray-700 px-7 py-2 rounded"
              >
                Worklets
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-shrink-0">CTECH LOGO</div>
      </div>
    </nav>
  );
};

export default Navbar;
