import africanFarmerImage from "../assets/photorealistic-view-african-people-harvesting-vegetables-grains 1.svg"
import logo from "../assets/Logo 2.png";
import CreateAccountInputField from "../components/CreateAccountInputField"

function CreateAccountPage() {
  return (
    <div className="box-border pb-10   font-dm-sans grid h-screen w-full grid-cols-1 md:grid-cols-2 gap-5 text-[10px] sm:text-[14px] md:text-[16px]  px-3">
        <div className="hidden md:block md:relative h-full w-full md:h-screen ">  
        <img 
        src={africanFarmerImage} 
        className="  w-full h-full object-cover " 
        alt="African farmer" />
        <div 
        className="absolute top-2 left-1 md:left-3 ">
        <img 
        src={logo} 
        className=" w-30 h-10  object-contain" 
        alt="farmer logo" />
        </div>
    </div>
     
      <CreateAccountInputField />

    </div>
  )
}

export default CreateAccountPage
