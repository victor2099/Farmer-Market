import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image1 from "../assets/Home-Images/Home-Img 1.svg";
import Image2 from "../assets/Home-Images/Home-Img 2.svg";
import Image3 from "../assets/Home-Images/Home-Img 3.svg";
import Image4 from "../assets/Home-Images/Home-Img 4.svg";
import Image5 from "../assets/Home-Images/Home-Img 5.svg";
import Image6 from "../assets/Home-Images/Home-Img 6.svg";
import Image7 from "../assets/Home-Images/Home-Img 7.svg";
import Image8 from "../assets/Home-Images/Home-Img 8.svg";
import Image9 from "../assets/Home-Images/Home-Img 9.svg";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[676px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className=" relative max-w-[45%] z-10 px-5  mx-auto flex flex-col   justify-center items-center h-full text-center">
          <h1 className="text-white  font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug">
            Fresh Food From Farmers
          </h1>
          <p className="text-white text-xl mt-5 mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            inventore, sit nobis quibusdam odit cum recusandae, doloremque quod
            ratione maxime
          </p>
          <div>
            <button className="border-0 outline-0 bg-sec cursor-pointer text-black text-sm font-bold py-3 px-5 rounded-md hover:bg-sec2">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* HEALTHY FOOD */}
      <section className="pt-20 pb-[200px]">
        <div className="max-w-[1100px] px-5 mx-auto grid  md:grid-cols-[35%_65%] items-center gap-15">
          {/* IMAGE SECTION */}
          <div className="relative  w-full">
            {/* BIG MAGE */}
            <img
              src={Image2}
              alt="Healthy Food"
              className="w-full rounded-lg h-auto"
            />
            {/* SMALL IMAGE */}
            <img
              src={Image3}
              className="absolute bottom-0 right-0 w-45 shadow-lg transform translate-x-28 translate-y-20 "
            />
          </div>
          {/* TEXT SECTION */}
          <div className=" w-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-[32px] text-pri font-bold leading-snug mb-5">
              Be Healthy & Eat <br />
              Only Fresh Food From Us
            </h2>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-500">
                <span className="w-[10px] h-[10px] bg-pri rounded-full mr-3"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                laudantium.
              </li>
              <li className="flex items-center text-gray-500">
                <span className="w-[10px] h-[10px] bg-pri rounded-full mr-3"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                laudantium.
              </li>
            </ul>
            {/* CTA BUTTON */}
            <div className="mt-6 mb-20">
              <button className="border-0 outline-0 bg-black cursor-pointer text-white text-sm font-bold py-3 px-5 rounded-md ">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY SEC */}
      <section className="pb-20">
        <div className="max-w-[1100px] px-5 mx-auto">
          <div className="w-1/2">
            <h2 className="text-3xl md:text-[32px] text-pri font-bold leading-snug mb-5">
              Delivered To Your Doorstep <br />
              Fresh From The Farm
            </h2>
            <p className="text-gray-700 w-[80%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate cumque pariatur culpa at aliquid commodi maiores maxime
              molestiae deleniti a.
            </p>
          </div>
          {/* IMAGE GRID */}
          <div className="grid mt-15 gap-6 md:grid-cols-[30%_40%_30%]">
            <img
              src={Image4}
              alt="Delivery Image 1"
              className="rounded-md shadow"
            />
            <img
              src={Image5}
              alt="Delivery Image 2"
              className="rounded-md shadow"
            />
            <img
              src={Image6}
              alt="Delivery Image 3"
              className="rounded-md shadow"
            />
          </div>
        </div>
      </section>

      {/* LOVERS SEC */}
      <section className="pb-20">
        <div className="max-w-[1100px] px-5 mx-auto">
          <div className="w-1/2">
            <h2 className="text-3xl md:text-[32px] text-pri font-bold leading-snug mb-5">
              What Our Green <br />
              Lovers Are Saying
            </h2>
          </div>
          {/* IMAGE GRID */}
          <div className="flex flex-col mt-15 gap-12 ">
            {/* LOVERS 1 */}
            <div className="flex gap-12 items-center">
              <img
                src={Image7}
                alt="Lovers Image 1"
                className="w-[118px] rounded-md shadow"
              />
              <div className="space-y-6">
                <h4 className="text-pri text-xl font-semibold">George Udom</h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum reprehenderit ratione nam labore. Illum nihil
                  ducimus pariatur velit molestiae aliquid?
                </p>
              </div>
            </div>
            {/* LOVERS 2 */}
            <div className="flex gap-12 items-center">
              <img
                src={Image8}
                alt="Lovers Image 1"
                className="w-[118px] rounded-md shadow"
              />
              <div className="space-y-6">
                <h4 className="text-pri text-xl font-semibold">
                  Ishola Solomon
                </h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum reprehenderit <br /> ratione nam labore. Illum
                  nihil ducimus pariatur velit molestiae aliquid?
                </p>
              </div>
            </div>
            {/* LOVERS 3 */}
            <div className="flex gap-12 items-center">
              <img
                src={Image9}
                alt="Lovers Image 1"
                className="w-[118px] rounded-md shadow"
              />
              <div className="space-y-6">
                <h4 className="text-pri text-xl font-semibold">Tunde Badmus</h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum reprehenderit <br /> ratione nam labore. Illum
                  nihil ducimus pariatur velit molestiae aliquid?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
