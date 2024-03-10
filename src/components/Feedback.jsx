import React, { useState } from "react";
import DefaultIcon from "../icons/DefaultIcon";
import FlagIcon from "../icons/FlagIcon";
import LikeIcon from "../icons/LikeIcon";
import Editicon from "../icons/Editicon";
import FeedBackIcon from "../icons/FeedBackIcon";
import CloseIcon from "../icons/CloseIcon";
import ReportForm from "./ReportForm";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState("");
  const handleForm = (formType) => {
    setType(formType);

    setShowForm(true);
  };
  return (
    <div className="fixed z-50 sm:bottom-8 sm:right-8 bottom-6 right-6 flex flex-col items-end gap-4">
      {showForm && <ReportForm type={type} />}
      <div
        className={`flex gap-4 items-end justify-end ${
          showForm ? "flex-row" : "flex-col"
        }`}
      >
        <div
          className={`${open ? "flex" : "hidden"} ${
            showForm ? "flex-row" : "flex-col"
          } items-end gap-4`}
        >
          <div className="flex gap-4 items-end justify-end">
            {!showForm && (
              <p className="bg-white px-2 py-1 rounded-md">Report an Issue</p>
            )}
            <button
              onClick={() => handleForm("Issue")}
              className="w-12  h-12 bg-[#F8F8F8] rounded-full shadow-md flex items-center justify-center"
            >
              <FlagIcon />
            </button>
          </div>
          <div className="flex gap-4 items-end justify-end">
            {!showForm && (
              <p className="bg-white px-2 py-1 rounded-md">Share Feedback</p>
            )}
            <button
              onClick={() => handleForm("Feedback")}
              className="w-12 h-12 bg-[#F8F8F8] rounded-full shadow-md flex items-center justify-center"
            >
              <LikeIcon />
            </button>
          </div>
          <div className="flex gap-4 items-end justify-end">
            {!showForm && (
              <p className="bg-white px-2 py-1 rounded-md">Give Suggestions</p>
            )}
            <button
              onClick={() => handleForm("Suggestions")}
              className="w-12 h-12 bg-[#F8F8F8] rounded-full shadow-md flex items-center justify-center"
            >
              <Editicon />
            </button>
          </div>
          <div className="flex gap-4 items-end justify-end">
            {!showForm && (
              <p className="bg-white px-2 py-1 rounded-md">Contact Us</p>
            )}
            <button
              onClick={() => handleForm("Your quries")}
              className="w-12 h-12 bg-[#F8F8F8] rounded-full shadow-md flex items-center justify-center"
            >
              <FeedBackIcon />
            </button>
          </div>
        </div>

        {open ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowForm(false);
            }}
            className="w-12 h-12  bg-[#F8F8F8] rounded-full shadow-md flex items-center justify-center"
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            onClick={() => setOpen(!open)}
            className="w-12 h-12  bg-[#F8F8F8] rounded-full shadow-md flex items-center justify-center"
          >
            <DefaultIcon />
          </button>
        )}
      </div>
      {open && (
        <div className="sm:hidden fixed -z-10 inset-0 bg-black opacity-70"></div>
      )}
    </div>
  );
};

export default Feedback;
