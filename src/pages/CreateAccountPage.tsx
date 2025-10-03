import africanFarmerImage from "../assets/photorealistic-view-african-people-harvesting-vegetables-grains 1.jpg";
import logo from "../assets/Logo 2.png";
import CreateAccountInputField from "../components/CreateAccountInputField";

function CreateAccountPage() {
  return (
    <div className="bg-light font-dm-sans min-h-screen w-full flex flex-col  md:grid md:grid-cols-[1fr_1.2fr] md:gap-5 max-w-7xl mx-auto">
      
      {/* Left Section - Farmer Image + Logo */}
      <div
        className="relative h-50  bg-[position:20%_40%] md:h-auto bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${africanFarmerImage})` }}
        role="img"
        aria-label="African farmer harvesting fresh vegetables in a field"
      >
        <a href="/" aria-label="FarmMarket Home">
          <img
            src={logo}
            className="absolute top-4 sm:top-10 left-4 w-24 sm:w-28 md:w-35 object-contain"
            alt="FarmMarket Logo"
          />
        </a>
      </div>

      {/* Right Section - Form */}
      <div className="flex justify-center py-10  md:pr-5 px-12">
        <div className="w-full max-w-lg">
          <CreateAccountInputField />
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
