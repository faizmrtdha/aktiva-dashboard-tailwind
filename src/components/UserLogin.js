import React from "react";
import aktiva from "../assets/aktiva.png";
import poster from "../assets/side_image.jpg";

const UserLogin = () => {
  return (
    <>
      <section className="h-screen">
        <div className="flex h-full">
          <div className="w-4/12">
            <img
              src={poster}
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8/12 font-roboto flex flex-col">
            <div className="py-10 px-10">
              <img src={aktiva} alt="logo-aktiva" />
            </div>
            <div className="m-auto w-full px-[272px]">
              <h3 className="font-medium text-3xl mb-1">Selamat Datang</h3>
              <p className="text-sm font-normal mb-4">
                Log in untuk masuk ke Dashboard
              </p>
              <form action="" className="flex flex-col">
                <label htmlFor="email" className="block mb-1">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-[#D9D9D9] mb-4 py-1"
                />
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-[#D9D9D9] mb-4 py-1"
                />
                <a
                  href="#a"
                  className="font-roboto font-normal text-xs text-right inline-block mb-4 text-[#1890FF]">
                  Lupa password?
                </a>
                <button
                  type="submit"
                  className="w-full bg-polar-500 text-white py-1 rounded-sm">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
