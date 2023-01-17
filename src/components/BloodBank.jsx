import React from "react";
import Footer from "./Footer";

const BloodBank = () => {
  return (
    <div className="bg-red-200 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap mx-4">
          {/* <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-red-600 rounded-lg p-6 text-white">
              <div className="text-xl font-medium mb-4">Blood Donors</div>
              <div className="text-lg mb-4">Find a Blood Donor</div>
              <div className="">
                Use our blood donor search to find a blood donor in your area.
              </div>
            </div>
          </div> */}
          <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
            <div className="bg-red-600 object-contain sm:w-[1/2] w-full rounded rounded-bl-none rounded-br-none  text-white">
              <div className="text-center mb-4">
                <img
                  src="https://wallpaperaccess.com/full/3709528.jpg"
                  alt="Donor"
                  className="w-[100%] h-[40%] max-h-[8rem] rounded rounded-bl-none rounded-br-none  mx-auto"
                />
              </div>
              <div className="text-lg font-medium mb-2">John Doe</div>
              <div className="text-gray-500 mb-2">New York, NY</div>
              <div className="text-gray-500 mb-2">
                <a href="#" className="text-white hover:text-white mr-2">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white hover:text-white mr-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="bg-red-500 p-6 text-white">
        <div className="text-center">Copyright © Blood Bank</div>
      </footer> */}
      <Footer />
    </div>
  );
};

export default BloodBank;
