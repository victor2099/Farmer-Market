import { useState } from "react";
import axios from "axios";
import bgImage from "../assets/woman-farm.png";
import logo from "../assets/Logo 2.png";
import back from "../assets/arrow-icon.svg";
import { Link } from "react-router-dom";

const BuyerReg: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    lga: "",
    businessName: "",
    businessType: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ✅ Use full backend URL and correct route
      const res = await axios.post(
        "http://localhost:3500/api/users/register",
        form,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage(res.data.message || "Account created successfully 🎉");
    } catch (error: any) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light font-dm-sans min-h-screen w-full flex items-center justify-center md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] w-full font-dm-sans bg-light max-w-5xl mx-auto">
        {/* Left Section */}
        <div
          className="relative md:flex flex-col p-12 sm:py-5 sm:px-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <img src={logo} alt="FarmMarket Logo" className="w-35 sm:w-40 mb-10" />
          <div className="text-white max-w-sm">
            <h1 className="text-xl md:text-3xl font-bold mb-2 sm:w-[20px]">
              Hello, Welcome!
            </h1>
            <p className="text-base md:text-sm">
              Please create your verified account.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex justify-start pt-5 px-12">
          <div className="w-full max-w-md">
            <div className="relative gap-3 mb-6">
              <Link to="/signuphome">
                <img
                  src={back}
                  className="w-6 absolute -left-8 md:-left-10 top-1 hover:opacity-50"
                  alt="Back"
                />
              </Link>
              <h2 className="text-green-btn text-2xl font-semibold mb-6">
                Create Account
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { label: "Full Name", name: "fullName", type: "text" },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Email", name: "email", type: "email" },
                { label: "Password", name: "password", type: "password" },
                { label: "Confirm Password", name: "confirmPassword", type: "password" },
              ].map(({ label, name, type }) => (
                <div
                  key={name}
                  className={`${
                    name === "fullName" || name === "confirmPassword"
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <label className="block text-sm font-medium">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={(form as any)[name]}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
                  />
                </div>
              ))}

              {/* State */}
              <div>
                <label className="block text-sm font-medium">State</label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full text-gray-500 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
                  required
                >
                  <option value="">Select State</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                </select>
              </div>

              {/* LGA */}
              <div>
                <label className="block text-sm font-medium">LGA</label>
                <select
                  name="lga"
                  value={form.lga}
                  onChange={handleChange}
                  className="w-full text-gray-500 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
                  required
                >
                  <option value="">Select LGA</option>
                  <option value="ikeja">Ikeja</option>
                  <option value="garki">Garki</option>
                </select>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium">
                  Business Name <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium">
                  Business Type <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-btn text-sm"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-btn text-white py-2 rounded-md hover:bg-green-dark transition"
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>

              {message && (
                <p className="sm:col-span-2 text-center text-sm text-gray-700 mt-2">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerReg;
