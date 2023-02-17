import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Player } from "@lottiefiles/react-lottie-player";
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
  useTitle('Sign up');
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [fireError, setFireError] = useState('');
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const pass = form.pass.value;
    const name = form.name.value;
    const role = form.role.value;
    const photoURL = form.photoURL.value;
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    const user = { email, name, role };
    console.log("user", user);
    fetch("https://server-jfjubaer.vercel.app/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          createUser(email, pass)
            .then((result) => {
              form.reset();
              handleUpdate(profile);
              toast.success("Successfully Registered");
            })
            .catch((error) => {
              console.log(error);
              setFireError(error.message);
            });
        }
      });

  };
  const handleUpdate = (profile) => {
    updateUserProfile(profile)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:flex lg:container items-center">
      <div>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_O2ci8jA9QF.json"

        ></Player>
      </div>
      <div>
        <div className="mx-auto  px-4 py-16  ">
          <div className="mx-auto ">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Get started today. SignUp now!!!
            </h1>

            <form
              onSubmit={handleRegister}
              className="mt-6 mb-0 space-y-4 rounded-lg py-10 px-20 shadow-2xl"
              action=""
            >


              <div>
                <label for="email" className="text-sm font-medium">
                  Name
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter Name"
                    required
                  />

                  <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
                </div>
              </div>
              <div>
                <label for="email" className="text-sm font-medium">
                  Photo URL
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    name="photoURL"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter Photo URL"
                    required
                  />

                  <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
                </div>
              </div>
              <div>
                <label for="email" className="text-sm font-medium">
                  Email
                </label>

                <div className="relative mt-1">
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    required
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                    name="pass"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    required
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <select name="role">
                <option value={"buyer"}>buyer</option>
                <option value={"seller"}>seller</option>
                {/* <option value={"admin"}>admin</option> */}
              </select>
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                SignUp
              </button>
              <p className="text-center text-sm text-gray-500">
                Already have an account ?
                <Link className="underline" to="/login">
                  Login
                </Link>
              </p>
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <Link className="underline" to="/login"> Please Login</Link>
                <p className="text-red-500">{fireError}</p>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
