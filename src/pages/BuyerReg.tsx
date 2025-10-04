import bgImage from "../assets/woman-farm.png";
import logo from "../assets/Logo 2.png";
import { Link } from "react-router-dom";
import back from "../assets/arrow-icon.svg";

const BuyerReg: React.FC = () => {
  return (
    <div className="bg-light font-dm-sans min-h-screen w-full flex items-center justify-center md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr]  w-full font-dm-sans bg-light max-w-5xl mx-auto ">
      
    
      <div
        className="relative md:flex flex-col   p-12 sm:py-5 sm:px-1 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        
        <div className="relative ">
        
          <img
            src={logo}
            alt="FarmMarket Logo"
            className="w-35 sm:w-40 mb-10"
          />

          
          <div className="text-white max-w-sm">
            <h1 className="text-xl md:text-3xl font-bold mb-2 sm:w-[20px]">
              Hello, Welcome!
            </h1>
            <p className="text-base md:text-sm">
              Please create your verified account.
            </p>
          </div>
        </div>
      </div>
     

      {/* Right Section - Form */}
      <div className="flex  justify-start pt-5 px-12 ">


        <div className="w-full max-w-md">

           <div className="relative  gap-3 mb-6">
              <Link to="/signup2">
     <img src={back} className="w-6 absolute -left-8 md:-left-10 top-1 hover:opacity-50" alt="Back" /> </Link> 
          <h2 className="text-green-btn text-2xl font-semibold mb-6">
            Create Account
          </h2>
          </div>


          

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full  mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+234"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="min. 6 characters"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium">State</label>
              <select className="w-full text-gray-500 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm">
                <option>Select State</option>
              </select>
            </div>

            {/* LGA */}
            <div>
              <label className="block text-sm font-medium">LGA</label>
              <select className="w-full text-gray-500 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm">
                <option>Select LGA</option>
              </select>
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium">
                Business Name{" "}
                <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-sm font-medium">
                Business Type{" "}
                <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
              />
            </div>

            {/* Checkboxes */}
            <div className="sm:col-span-2 space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-green-600" />
                I agree to FarmMarket's Terms & Conditions and Privacy Policy
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-green-600" />
                I consent to FarmMarket verifying my details for platform safety
              </label>
            </div>

            {/* Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-btn text-white py-2 rounded-md hover:bg-green-dark transition"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BuyerReg;
