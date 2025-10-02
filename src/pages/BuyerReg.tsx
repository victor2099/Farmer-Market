import bgImage from "../assets/woman-harvesting-vegetable 1.jpg";
import logo from "../assets/Logo 2.png";
import BuyerRegInput from "../components/BuyerRegInput";

const BuyerReg = () => {
  return (
<div className="font-dm-sans bg-light grid justify-center h-full w-full md:h-screen  md:grid-cols-[1fr_1fr] max-w-7xl mx-auto ">

     <div 
  className="relative bg-contain bg-no-repeat bg-center h-full w-full hidden md:block"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <img 
    src={logo} 
    className="absolute top-5 left-20 w-30 md:w-50 h-10 object-contain " 
    alt="logo" 
  />
</div>

        <div className="mt-5 md:mt-10">

        < BuyerRegInput />
        </div>
    </div>

    
  );
};

export default BuyerReg;
