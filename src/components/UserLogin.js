import React from "react";
import aktiva from "../assets/aktiva.png";
import poster from "../assets/poster.jpg";

const UserLogin = () => {
  return (
    <>
      <section className="h-screen">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-4/12 bg-login"></div>
            <div className="w-8/12 font-roboto">
              <div className="py-10 px-10">
                <img src={aktiva} alt="logo-aktiva" />
              </div>
              <div className="flex flex-col justify-center w-full ">
                <h3 className="font-medium text-3xl">Selamat Datang</h3>
                <p className="text-sm font-normal">
                  Log in untuk masuk ke Dashboard
                </p>
                <form action="" className="flex flex-col">
                  <label htmlFor="email" className="block">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-[#D9D9D9]"
                  />
                  <label htmlFor="password" className="block">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-[#D9D9D9]"
                  />
                  <a
                    href="#a"
                    className="font-roboto font-normal text-xs text-right inline-block">
                    Lupa password?
                  </a>
                  <button
                    type="submit"
                    className="w-full bg-polar-500 text-white">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
