import React, { useState } from "react";
import AttachIcon from "../icons/AttachIcon";

const ReportForm = ({ type }) => {
  const [issue, setIssue] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  console.log(selectedImages);
  const handleFileChange = (e) => {
    if (selectedImages.length >= 2) {
      return;
    }
    const file = e.target.files[0];
    if (file && selectedImages.length < 2) {
      setSelectedImages((prevImages) => [
        ...prevImages,
        URL.createObjectURL(file),
      ]);
    }
    e.target.value = null;
  };
  const handleRemoveImage = (urlToRemove) => {
    const updatedUrls = selectedImages.filter((url) => url !== urlToRemove);
    setSelectedImages(updatedUrls);
  };

  return (
    <div className="sm:w-80 w-72 bg-[#F8F8F8] px-3 py-4 rounded-md">
      <div className="text-wrap font-bold text-center pb-3 px-5 border-b-[1.5px] border-[#CCCCCC] text-[#4D4D4D] ">
        {type === "Feedback" ? (
          <div>
            Let us know about the <span className="text-black">{type}</span> you
            are facing right now!
          </div>
        ) : (
          <div>
            {type === "Suggestions" ? (
              <div>
                Share your <span className="text-black">{type}</span> with us
                for a chance to earn rewards!
              </div>
            ) : (
              <div>
                {type === "Issue" ? (
                  <div>
                    Let us know about the Issue you are facing right now!
                  </div>
                ) : (
                  <div>Get in Contact with us for your queries!</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        {type !== "Feedback" && type !== "Your quries" && (
          <div className="flex flex-col justify-start items-start">
            <label className="mb-1">Choose a section</label>
            <select
              defaultValue={"interview"}
              className="w-full bg-[#E0E0E0] px-2 py-1 outline-none rounded-md"
            >
              <option value="concept">Concept cards</option>
              <option value="interview">Interview Questions</option>
              <option value="practice">Practice Questions</option>
              <option value="quizes">Quizzes</option>
            </select>
          </div>
        )}
        {type === "Your quries" && (
          <div className="flex flex-col justify-start items-start">
            <label className="mb-1">Your Name</label>
            <input
              type="text"
              className="w-full bg-[#E0E0E0] px-2 py-1 outline-none rounded-md"
            />
          </div>
        )}
        <div className="flex flex-col mt-3 justify-start items-start">
          <label className="mb-1">
            {type === "Feedback" ? (
              <div></div>
            ) : (
              <div>
                {type === "Suggestions" ? (
                  <div>
                    Describe the suggestion in detail{" "}
                    <span className="text-red-600">*</span>
                  </div>
                ) : (
                  <div>
                    {type === "Issue" ? (
                      <div>
                        Describe the issue in detail{" "}
                        <span className="text-red-600">*</span>
                      </div>
                    ) : (
                      <div>
                        What would you like to ask?
                        <span className="text-red-600">*</span>{" "}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </label>
          <div className="relative pb-10 bg-[#E0E0E0] rounded-md w-full">
            <textarea
              rows={5}
              placeholder="Write Here..."
              className="w-full  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 resize-none bg-[#E0E0E0]  px-2 py-1 outline-none rounded-md"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            ></textarea>
            <div className="flex">
              <label
                htmlFor="fileInput"
                className="absolute mt-4 bottom-2 left-1 flex items-center bg-[#C7C7C7] px-2 py-1 rounded-md"
              >
                <AttachIcon
                  color={selectedImages.length >= 2 ? "gray" : "black"}
                />
                <p
                  className={`${
                    selectedImages.length >= 2 ? "text-gray-600" : "text-black"
                  }`}
                >
                  Attach
                </p>
                <input
                  onChange={handleFileChange}
                  id="fileInput"
                  type="file"
                  disabled={selectedImages.length >= 2}
                  className="hidden"
                />
              </label>
              <div className="absolute flex mt-4 gap-3 bottom-2 right-1">
                {selectedImages?.map((image, index) => (
                  <div className="relative" key={index}>
                    <img className="h-10 w-10 rounded-md" src={image} alt="" />
                    <div
                      onClick={() => handleRemoveImage(image)}
                      className="absolute text-xs flex items-center justify-center h-3 w-3 rounded-full bg-black cursor-pointer -top-1 right-0 text-white z-50"
                    >
                      X
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {type === "Feedback" && (
          <div className="flex mt-2 items-center justify-start gap-1">
            <input type="checkbox" />
            <span className="text-sm">Send feedback anonymously</span>
          </div>
        )}
        <div className="flex items-end justify-end mt-3">
          <button
            className={`${
              issue ? "bg-[#0F0F0F]" : "bg-[#6C6C6C]"
            } px-3 py-1 rounded-md text-white w-fit`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
