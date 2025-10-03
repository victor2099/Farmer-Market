import bgImage from "../assets/woman-harvesting-vegetable 1.jpg";
import logo from "../assets/Logo 2.png";

const BuyerReg: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] max-h-full w-full font-dm-sans  bg-light md:px-20 md:py-10 max-w-5xl mx-auto md:gap-10">
      
    
      <div
        className="relative md:flex flex-col   p-12 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        
        <div className="relative ">
          {/* Logo */}
          <img
            src={logo}
            alt="FarmMarket Logo"
            className="w-35 md:w-60 mb-10"
          />

          {/* Welcome Text */}
          <div className="text-white max-w-sm">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              Hello, Welcome!
            </h1>
            <p className="text-base md:text-lg">
              Please create your verified account.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex  justify-start pt-5 px-12 ">
        <div className="w-full max-w-md">
          <h2 className="text-green-600 text-2xl font-semibold mb-6">
            Create Account
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+234"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="min. 6 characters"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium">State</label>
              <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select State</option>
              </select>
            </div>

            {/* LGA */}
            <div>
              <label className="block text-sm font-medium">LGA</label>
              <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
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
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyerReg;
