import React from "react";

function Registration() {
  return (
    <>
      {/*
             This example requires updating your template:
     
             ```
             <html class="h-full bg-white">
             <body class="h-full">
             ```
           */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">
            Creante an account
          </h2>
          <h6 className="text-center text-center text-sm/6 text-gray-500 font-semibold">
            It's free and always will be.
          </h6>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div className="flex gap-4 mt-2 ">
              <div>
                <input
                  type="first name"
                  name="first name"
                  id="first name"
                  placeholder="First Name"
                  className="block  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div>
                <input
                  type="last name"
                  name="last name"
                  id="last name"
                  placeholder="Last Name"
                  className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Mobile number or email address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="New password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="mt-6">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Re-enter password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor=" "
                  id="birthdate"
                  name="birthdate"
                  className="text-md font-bold text-base text-gray-900 "
                >
                  Birthday :
                </label>
              </div>
              <div className="text-base text-gray-900 ">
                <input type="date" name="date" id="date" />
              </div>
              <div className="mt-3 font-bold text-base text-gray-900 flex gap-4">
                <div>
                  <input
                    type="radio"
                    name="female"
                    id="female"
                    className="mr-2"
                  />
                  Female
                </div>
                <div>
                  <input type="radio" name="male" id="male" className="mr-2" />
                  Male
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="mr-2 text-sm/2 font-semibold"
                />
                I accept the{" "}
                <a
                  href="#"
                  className="font-semibold text-sm text-indigo-600 hover:text-indigo-500 hover:underline"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-md/6 font-bold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm/6 text-gray-500">
            Already you have an account?
            <a
              href="http://localhost:5173/Login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 pl-2 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Registration;
