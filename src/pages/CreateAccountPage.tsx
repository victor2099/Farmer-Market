import CreateAccountInputField from "../components/CreateAccountInputField";

function CreateAccountPage() {
  return (
    <div className=" grid justify-center grid-cols-2 h-screen py-5 px-10 gap-10">
      <div className="relative w-full h-full ">
        <img
          src="src/assets/photorealistic-view-african-people-harvesting-vegetables-grains 1.jpg"
          className="w-full max-h-[500px] object-cover filter contrast-105 saturate-110"
          alt="African farmer"
        />
        <div className="absolute inset-0 bg-green-300/20"></div>
        <div className="absolute top-5 left-5 w-25">
          <img src="src/assets/Logo 2.png" className="" alt="farmer logo" />
        </div>
      </div>

      <CreateAccountInputField />
    </div>
  );
}

export default CreateAccountPage;
