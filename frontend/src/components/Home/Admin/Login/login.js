import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });//this is object with empty value of email and password;
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();// is used to stop the form from being submitted the traditional way (which would cause a full-page reload).
		try {
			const url = "http://localhost:2025/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
	    <div className="flex items-center justify-center min-h-screen bg-dark-500 w-full h-screen bg-black ">
      <div className="w-full max-w-xl flex flex-col sm:flex-row rounded-lg shadow-lg">
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-l-lg p-8 sm:p-12">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-2xl  mb-4 font-bold from-black via-gray-600 to-sky-500/55  bg-gradient-to-r bg-clip-text text-transparent">Sign in to your account</h1>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              onChange={handleChange}//The onChange attribute calls handleChange, which updates the corresponding state when the user types.
              value={data.email}
              required
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />
            {error && <div className="error-msg">{error}</div>}
            <button type="submit"
  className="w-60px bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 focus:ring-sky-500/55  text-center bg-gradient-to-r from-black via-gray-600 to-sky-500/55 text-white transform transition-transform duration-300 hover:translate-y-1"
>
  Sign in
</button>

          </form>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-sky-500/55  rounded-r-lg p-8 sm:p-12">
          <h1 className="text-2xl md:text-4xl text-white mb-4 font-bold   ">New Here?</h1>
          <Link to="/signup">
            <button type="button" className="  focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center text-white bg-gradient-to-r from-black via-gray-500 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1 ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>

	);
};

export default Login;
