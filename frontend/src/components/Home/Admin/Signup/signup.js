import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
  
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:2025/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
        <div className="flex items-center justify-center min-h-screen   bg-[conic-gradient(var(--tw-gradient-stops))] from-black via-gray-600 to-sky-500/55">
        <div className="w-full max-w-xl flex flex-col sm:flex-row rounded-lg shadow-lg">
          <div className="flex-1 flex flex-col items-center justify-center bg-black rounded-l-lg p-8 sm:p-12">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome Back</h1>
            <Link to="/login">
              <button type="button" className="mt-4 bg-gradient-to-r from-sky-500/55 via-gray-600 to-sky-500/55  focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 text-center text-white font-bold transform transition-transform duration-300 hover:translate-y-1">
                Sign in
              </button>
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-sky-500/55 rounded-r-lg p-8 sm:p-12">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <h1 className="text-2xl  mb-4 font-bold from-black via-gray-400 to-white bg-gradient-to-r bg-clip-text text-transparent">Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
              />
              {error && <div className="error-msg">{error}</div>}
              <button type="submit" className="w-60px bg-primary-600 bg-gradient-to-r from-black via-gray-600 to-sky-500/55 font-bold focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center text-white mt-4 transform transition-transform duration-300 hover:translate-y-1">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

	);
};

export default Signup;
