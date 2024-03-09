import React from "react";
import Navbar from "../components/Navbar";
import RocketIcon from "../icons/RocketIcon";
import EyeIcon from "../icons/EyeIcon";
import AlertCircle from "../icons/AlertCircle";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:px-20 px-4 py-10">
        <div className="mb-4">Back to Questions</div>
        <div className="sm:px-20 px-1">
          <div className="bg-[#F8F8F8] p-4 text-black rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="px-2 py-1 bg-[#A9D9FF] rounded-md">Design</p>
                <p className="px-2 py-1 bg-[#A9D9FF] rounded-md">Technology</p>
              </div>
              <div className="flex flex-col items-center">
                <RocketIcon />
                <p>Startup</p>
              </div>
            </div>
            <h2 className="font-bold">
              A travel startup wants Amazon to pre-install their personal travel
              agent bot on existing Amazon Echos. What is the value of the
              partnership to the travel startup?{" "}
            </h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
              viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
              donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
              magna cursus se?{" "}
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <EyeIcon />
                <p>100 Views</p>
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle />
                <p>How should you word your answer?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
