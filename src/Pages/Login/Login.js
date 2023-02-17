import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle('Login');
  const { providerLogin, signIn } = useContext(AuthContext);
  const [fireError, setFireError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        console.log(error);
        setFireError(error.message);
      });
  };

  const handleLoginGoogle = () => {
    providerLogin()
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="lg:flex lg:my-20 lg:container mx-auto items-center">


      <div className="mx-auto max-w-lg ">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Login to your account
        </h1>

        <form
          onSubmit={handleEmailLogin}
          action=""
          className="mt-6 mb-0 space-y-4 rounded-lg py-8 px-20 shadow-2xl"
        >


          <div>
            <label for="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                name="pass"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link className="underline" to="/signup">
              signup
            </Link>
          </p>
          <div className="flex justify-between"></div>
          <button
            onClick={handleLoginGoogle}
            className="w-full h-10 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            sign in with google <FaGoogle />
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link className="underline" to="/login"> Please Login</Link>
            <p className="text-red-500">{fireError}</p>
          </p>
        </form>
      </div>


      <div className="lg:ml-0">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_ULeaW09pyz.json"
        ></Player>
      </div>
    </div>
  );
};

export default Login;
