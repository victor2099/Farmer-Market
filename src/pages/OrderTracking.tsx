import logo from "../assets/Asset 9.png";
import dp from "../assets/dp.png"
import back from "../assets/arrow-icon.svg"

import { Bell, Settings, } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrderTracking: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(3); // Example count

  return (
    <div className="relative h-screen w-full bg-white overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <header className="bg-green-600 w-full flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="max-w-[200px]" alt="yellow farmerlogo" />
        </div>

        {/* Right Profile Section */}
        <div className="flex items-center gap-6 text-white relative">
          {/* Notifications */}
          <button
            onClick={() => alert("Notifications clicked!")}
            className="relative hover:text-yellow-300 transition"
          >
            <Bell className="w-6 h-6" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {notifications}
              </span>
            )}
          </button>

          {/* Settings */}
          <button
            onClick={() => alert("Settings clicked!")}
            className="hover:text-yellow-300 transition"
          >
            <Settings className="w-6 h-6" />
          </button>

          {/* Profile with dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src={dp} alt="usericon" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium">John Caleb Ekong</p>
                <p className="text-xs text-gray-200">Customer</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg py-2 z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content (unchanged for now) */}
      <main className="flex-1 overflow-hidden flex flex-col items-center justify-start px-10 md:px-16 py-10">
        <div className="w-full max-w-5xl mb-6 relative">
          <Link to=""> <img src={back} className="w-7 absolute -left-2 md:-left-10 -top-5 hover:opacity-50" alt="Back" /></Link>
        </div>

        <div className="w-full max-w-5xl bg-green-f rounded-xl p-6 shadow">
          <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">
            Track your product
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Please enter your tracking ID
          </p>
          <div className="relative flex items-center bg-white rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Tracking ID"
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="absolute top-3  right-4 bg-green-f  hover:bg-green-dark text-white px-0.5 rounded py-0">
              ▶
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderTracking;
